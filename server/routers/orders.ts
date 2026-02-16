import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { createOrder, getUserOrders, getOrderByMercadopagoId, updateOrderStatus } from "../db";
import { TRPCError } from "@trpc/server";

// Mock Mercado Pago integration (replace with real API calls)
async function createMercadoPagoPayment(
  email: string,
  name: string,
  amount: number,
  productId: number
) {
  // In production, this would call the real Mercado Pago API
  // For now, we'll return a mock response
  
  const mockOrderId = `MP-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const mockInitPoint = `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${mockOrderId}`;

  return {
    id: mockOrderId,
    initPoint: mockInitPoint,
    status: "pending",
    email,
    name,
    amount,
    productId,
  };
}

export const ordersRouter = router({
  // Create a payment for immersion course
  createPayment: publicProcedure
    .input(
      z.object({
        productId: z.number(),
        customerEmail: z.string().email(),
        customerName: z.string(),
        quantity: z.number().default(1),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const { productId, customerEmail, customerName, quantity } = input;

        // Get product details (in real scenario, fetch from DB)
        // For now, we'll use hardcoded immersion product
        const productPrice = 29700; // R$ 297.00 in cents
        const totalAmount = productPrice * quantity;

        // Create Mercado Pago payment
        const mpPayment = await createMercadoPagoPayment(
          customerEmail,
          customerName,
          totalAmount,
          productId
        );

        // Store order in database
        const order = await createOrder({
          userId: 0, // Will be updated when user logs in
          productId,
          mercadopagoOrderId: mpPayment.id,
          amount: totalAmount,
          status: "pending",
          paymentMethod: "mercadopago",
          customerEmail,
          customerName,
        });

        if (!order) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Failed to create order",
          });
        }

        return {
          orderId: order.id,
          mercadopagoOrderId: mpPayment.id,
          initPoint: mpPayment.initPoint,
          amount: totalAmount,
          status: "pending",
        };
      } catch (error) {
        console.error("Payment creation error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create payment",
        });
      }
    }),

  // Get user's orders
  getUserOrders: protectedProcedure.query(async ({ ctx }) => {
    try {
      if (!ctx.user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated",
        });
      }

      const orders = await getUserOrders(ctx.user.id);
      return orders || [];
    } catch (error) {
      console.error("Get user orders error:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch orders",
      });
    }
  }),

  // Get order by Mercado Pago ID
  getOrderByMercadopagoId: publicProcedure
    .input(z.object({ mercadopagoOrderId: z.string() }))
    .query(async ({ input }) => {
      try {
        const order = await getOrderByMercadopagoId(input.mercadopagoOrderId);
        if (!order) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Order not found",
          });
        }
        return order;
      } catch (error) {
        console.error("Get order error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch order",
        });
      }
    }),

  // Update order status (called by webhook)
  updateOrderStatus: publicProcedure
    .input(
      z.object({
        mercadopagoOrderId: z.string(),
        status: z.enum(["pending", "approved", "failed", "refunded"]),
      })
    )
    .mutation(async ({ input }) => {
      try {
        const order = await updateOrderStatus(input.mercadopagoOrderId, input.status);
        if (!order) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Order not found",
          });
        }

        // If order is approved, trigger material delivery
        if (input.status === "approved") {
          // TODO: Send email with access to materials
          // TODO: Generate access link for immersion course
          console.log(`Order ${input.mercadopagoOrderId} approved. Sending materials...`);
        }

        return order;
      } catch (error) {
        console.error("Update order status error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update order status",
        });
      }
    }),

  // Get immersion course access (after purchase)
  getImmersionAccess: protectedProcedure.query(async ({ ctx }) => {
    try {
      if (!ctx.user) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "User not authenticated",
        });
      }

      const orders = await getUserOrders(ctx.user.id);
      
      // Check if user has purchased immersion course
      const immersionOrder = orders?.find(
        (order) => order.productId === 1 && order.status === "approved"
      );

      if (!immersionOrder) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "You don't have access to this course",
        });
      }

      // Return access details
      return {
        hasAccess: true,
        orderId: immersionOrder.id,
        purchaseDate: immersionOrder.createdAt,
        materials: {
          videos: [
            {
              day: 1,
              title: "Fundamentos da IA - Desmistificando o Futuro",
              url: "https://drive.google.com/file/d/13x3_0ypaHg9x9MmuEJVQvOJZH_cD-FDU/view?usp=sharing",
            },
            {
              day: 2,
              title: "O Guia Prático de Ferramentas de IA",
              url: "https://drive.google.com/file/d/17DaT-5uzwLR4s5J-y87VbH9JducfeVSQ/view?usp=sharing",
            },
            {
              day: 3,
              title: "IA para Negócios - Casos de Sucesso",
              url: "https://drive.google.com/file/d/17IQ-pJj16OQ-WG0_6qT45zhbAMEZztes/view?usp=sharing",
            },
            {
              day: 4,
              title: "Seu Primeiro Projeto de IA",
              url: "https://drive.google.com/file/d/1U24hcyMid44DsWqhdZ2b2MaX7utcuUvG/view?usp=sharing",
            },
            {
              day: 5,
              title: "Monetização e Escalabilidade",
              url: "https://drive.google.com/file/d/1Ztvl_qxhZ7kSvs89mIIkyEyPjutCI-x7/view?usp=sharing",
            },
          ],
          ebooks: [
            { day: 1, title: "Fundamentos da IA", url: "/ebooks/EBOOK_DIA1.pdf" },
            { day: 2, title: "Ferramentas de IA", url: "/ebooks/EBOOK_DIA2.pdf" },
            { day: 3, title: "IA para Negócios", url: "/ebooks/EBOOK_DIA3.pdf" },
            { day: 4, title: "Seu Primeiro Projeto", url: "/ebooks/EBOOK_DIA4.pdf" },
            { day: 5, title: "Monetização", url: "/ebooks/EBOOK_DIA5.pdf" },
          ],
          prezis: [
            { day: 1, title: "Apresentação Dia 1", url: "#" },
            { day: 2, title: "Apresentação Dia 2", url: "#" },
            { day: 3, title: "Apresentação Dia 3", url: "#" },
            { day: 4, title: "Apresentação Dia 4", url: "#" },
            { day: 5, title: "Apresentação Dia 5", url: "#" },
          ],
        },
      };
    } catch (error) {
      console.error("Get immersion access error:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch immersion access",
      });
    }
  }),
});
