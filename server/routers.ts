import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { getProducts, getProductById, getUserOrders } from "./db";
import { createMercadopagoPreference } from "./mercadopago";
import { z } from "zod";

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
});

export type AppRouter = typeof appRouter;
