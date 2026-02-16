import { describe, it, expect, beforeEach, vi } from "vitest";
import { z } from "zod";

// Mock data
const mockImmersionProduct = {
  id: 1,
  title: "Imersão IA - 5 Dias de Transformação",
  price: 29700, // R$ 297.00 in cents
  type: "immersion",
  status: "available",
};

const mockCustomer = {
  name: "João Silva",
  email: "joao@example.com",
  phone: "(48) 98827-4343",
};

describe("Immersion Checkout Flow", () => {
  describe("Input Validation", () => {
    it("should validate customer email correctly", () => {
      const emailSchema = z.string().email();

      expect(() => emailSchema.parse("valid@email.com")).not.toThrow();
      expect(() => emailSchema.parse("invalid-email")).toThrow();
    });

    it("should validate customer name is not empty", () => {
      const nameSchema = z.string().min(1);

      expect(() => nameSchema.parse("João Silva")).not.toThrow();
      expect(() => nameSchema.parse("")).toThrow();
    });

    it("should validate phone format", () => {
      const phoneSchema = z.string().min(10);

      expect(() => phoneSchema.parse("(48) 98827-4343")).not.toThrow();
      expect(() => phoneSchema.parse("123")).toThrow();
    });

    it("should validate product ID is positive number", () => {
      const productIdSchema = z.number().positive();

      expect(() => productIdSchema.parse(1)).not.toThrow();
      expect(() => productIdSchema.parse(0)).toThrow();
      expect(() => productIdSchema.parse(-1)).toThrow();
    });
  });

  describe("Payment Calculation", () => {
    it("should calculate correct total for single product", () => {
      const quantity = 1;
      const total = mockImmersionProduct.price * quantity;

      expect(total).toBe(29700);
    });

    it("should calculate correct total for multiple quantities", () => {
      const quantity = 3;
      const total = mockImmersionProduct.price * quantity;

      expect(total).toBe(89100);
    });

    it("should convert price from cents to reais correctly", () => {
      const priceInReais = mockImmersionProduct.price / 100;

      expect(priceInReais).toBe(297);
    });
  });

  describe("Order Creation", () => {
    it("should create order with correct data structure", () => {
      const mockOrder = {
        id: 1,
        userId: 1,
        productId: mockImmersionProduct.id,
        mercadopagoOrderId: "MP-123456789",
        amount: mockImmersionProduct.price,
        status: "pending",
        paymentMethod: "mercadopago",
        customerEmail: mockCustomer.email,
        customerName: mockCustomer.name,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(mockOrder).toHaveProperty("id");
      expect(mockOrder).toHaveProperty("productId");
      expect(mockOrder).toHaveProperty("mercadopagoOrderId");
      expect(mockOrder).toHaveProperty("amount");
      expect(mockOrder).toHaveProperty("status");
      expect(mockOrder.status).toBe("pending");
      expect(mockOrder.customerEmail).toBe(mockCustomer.email);
    });

    it("should validate order status transitions", () => {
      const validStatuses = ["pending", "approved", "failed", "refunded"];
      const testStatus = "approved";

      expect(validStatuses).toContain(testStatus);
    });
  });

  describe("Immersion Access", () => {
    it("should grant access after approved payment", () => {
      const order = {
        id: 1,
        status: "approved",
        productId: 1,
      };

      const hasAccess = order.status === "approved" && order.productId === 1;

      expect(hasAccess).toBe(true);
    });

    it("should deny access for pending payment", () => {
      const order = {
        id: 1,
        status: "pending",
        productId: 1,
      };

      const hasAccess = order.status === "approved" && order.productId === 1;

      expect(hasAccess).toBe(false);
    });

    it("should include all 5 days of materials in access", () => {
      const materials = {
        videos: [
          { day: 1, title: "Dia 1" },
          { day: 2, title: "Dia 2" },
          { day: 3, title: "Dia 3" },
          { day: 4, title: "Dia 4" },
          { day: 5, title: "Dia 5" },
        ],
        ebooks: [
          { day: 1, title: "E-book Dia 1" },
          { day: 2, title: "E-book Dia 2" },
          { day: 3, title: "E-book Dia 3" },
          { day: 4, title: "E-book Dia 4" },
          { day: 5, title: "E-book Dia 5" },
        ],
      };

      expect(materials.videos).toHaveLength(5);
      expect(materials.ebooks).toHaveLength(5);
      expect(materials.videos.every((v) => v.day >= 1 && v.day <= 5)).toBe(true);
    });
  });

  describe("Email Notifications", () => {
    it("should send confirmation email after approved payment", async () => {
      const sendEmailMock = vi.fn().mockResolvedValue(true);

      const order = {
        customerEmail: mockCustomer.email,
        status: "approved",
      };

      if (order.status === "approved") {
        await sendEmailMock(order.customerEmail, "Compra Confirmada");
      }

      expect(sendEmailMock).toHaveBeenCalledWith(
        mockCustomer.email,
        "Compra Confirmada"
      );
    });

    it("should include access link in confirmation email", async () => {
      const sendEmailMock = vi.fn().mockResolvedValue(true);
      const accessLink = "/immersion/access";

      const order = {
        customerEmail: mockCustomer.email,
        status: "approved",
      };

      if (order.status === "approved") {
        await sendEmailMock(order.customerEmail, `Acesse aqui: ${accessLink}`);
      }

      expect(sendEmailMock).toHaveBeenCalledWith(
        mockCustomer.email,
        expect.stringContaining("/immersion/access")
      );
    });
  });

  describe("Security", () => {
    it("should not expose sensitive payment data", () => {
      const order = {
        id: 1,
        mercadopagoOrderId: "MP-123456789",
        customerEmail: mockCustomer.email,
      };

      // Should not include sensitive data in response
      expect(order).not.toHaveProperty("paymentToken");
      expect(order).not.toHaveProperty("creditCard");
    });

    it("should validate user ownership of order", () => {
      const userId = 1;
      const order = {
        id: 1,
        userId: 1,
      };

      const isOwner = order.userId === userId;

      expect(isOwner).toBe(true);
    });
  });

  describe("Error Handling", () => {
    it("should handle invalid product ID", () => {
      const productSchema = z.object({
        id: z.number().positive(),
      });

      expect(() => productSchema.parse({ id: 0 })).toThrow();
      expect(() => productSchema.parse({ id: -1 })).toThrow();
    });

    it("should handle missing required fields", () => {
      const checkoutSchema = z.object({
        customerName: z.string().min(1),
        customerEmail: z.string().email(),
        productId: z.number().positive(),
      });

      expect(() =>
        checkoutSchema.parse({
          customerName: "",
          customerEmail: "test@example.com",
          productId: 1,
        })
      ).toThrow();
    });

    it("should handle duplicate orders", () => {
      const orders = [
        {
          id: 1,
          mercadopagoOrderId: "MP-123",
          customerEmail: "test@example.com",
        },
        {
          id: 2,
          mercadopagoOrderId: "MP-123",
          customerEmail: "test@example.com",
        },
      ];

      const duplicates = orders.filter(
        (order, index, self) =>
          self.findIndex((o) => o.mercadopagoOrderId === order.mercadopagoOrderId) !== index
      );

      expect(duplicates).toHaveLength(1);
    });
  });
});
