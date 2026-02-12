import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getProducts, getProductById, getUserOrders, subscribeToNewsletter, getNewsletterSubscriber, unsubscribeFromNewsletter } from "./db";
import { createMercadopagoPreference } from "./mercadopago";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  products: router({
    list: publicProcedure.query(() => getProducts()),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(({ input }) => getProductById(input.id)),
  }),

  orders: router({
    getUserOrders: protectedProcedure.query(({ ctx }) =>
      getUserOrders(ctx.user.id)
    ),
    createPayment: publicProcedure
      .input(z.object({
        productId: z.number(),
        customerEmail: z.string().email(),
        customerName: z.string(),
        quantity: z.number().default(1),
      }))
      .mutation(async ({ input }) => {
        try {
          const preference = await createMercadopagoPreference(input);
          return {
            success: true,
            preferenceId: preference.preferenceId,
            initPoint: preference.initPoint,
          };
        } catch (error) {
          console.error("[tRPC] Error creating payment:", error);
          throw error;
        }
      }),
  }),

  newsletter: router({
    subscribe: publicProcedure
      .input(z.object({
        email: z.string().email("E-mail inválido"),
        name: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        try {
          const existing = await getNewsletterSubscriber(input.email);
          if (existing && existing.status === "active") {
            throw new TRPCError({
              code: "CONFLICT",
              message: "Este e-mail já está inscrito na newsletter.",
            });
          }
          const result = await subscribeToNewsletter(input.email, input.name);
          if (!result) {
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: "Falha ao inscrever-se na newsletter.",
            });
          }
          return {
            success: true,
            message: "Inscrição realizada com sucesso!",
          };
        } catch (error) {
          if (error instanceof TRPCError) throw error;
          console.error("[tRPC] Error subscribing to newsletter:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Erro ao processar sua inscrição.",
          });
        }
      }),

    unsubscribe: publicProcedure
      .input(z.object({
        email: z.string().email(),
      }))
      .mutation(async ({ input }) => {
        try {
          const result = await unsubscribeFromNewsletter(input.email);
          return {
            success: true,
            message: "Você foi removido da newsletter.",
          };
        } catch (error) {
          console.error("[tRPC] Error unsubscribing from newsletter:", error);
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Erro ao remover inscrição.",
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
