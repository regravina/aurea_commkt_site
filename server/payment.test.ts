import { describe, it, expect, vi, beforeEach } from "vitest";
import { createMercadopagoPreference, processMercadopagoWebhook } from "./mercadopago";
import * as db from "./db";

// Mock do módulo db
vi.mock("./db", () => ({
  getProductById: vi.fn(),
  createOrder: vi.fn(),
  getOrderByMercadopagoId: vi.fn(),
  updateOrderStatus: vi.fn(),
}));

// Mock do axios
vi.mock("axios", () => ({
  default: {
    post: vi.fn(),
    get: vi.fn(),
  },
}));

describe("MercadoPago Integration", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("createMercadopagoPreference", () => {
    it("should create a preference with valid product data", async () => {
      const mockProduct = {
        id: 1,
        title: "Test E-book",
        description: "Test Description",
        price: 1500, // R$ 15.00
        type: "ebook",
        image: "/test.png",
      };

      vi.mocked(db.getProductById).mockResolvedValue(mockProduct as any);

      // Mock axios response
      const axios = await import("axios");
      vi.mocked(axios.default.post).mockResolvedValue({
        data: {
          id: "test-preference-id",
          init_point: "https://www.mercadopago.com.br/checkout/test",
        },
      });

      const result = await createMercadopagoPreference({
        productId: 1,
        customerEmail: "test@example.com",
        customerName: "Test User",
        quantity: 1,
      });

      expect(result).toEqual({
        preferenceId: "test-preference-id",
        initPoint: "https://www.mercadopago.com.br/checkout/test",
        productId: 1,
        amount: 1500,
      });

      expect(db.getProductById).toHaveBeenCalledWith(1);
    });

    it("should throw error if product not found", async () => {
      vi.mocked(db.getProductById).mockResolvedValue(undefined);

      await expect(
        createMercadopagoPreference({
          productId: 999,
          customerEmail: "test@example.com",
          customerName: "Test User",
          quantity: 1,
        })
      ).rejects.toThrow("Product not found");
    });
  });

  describe("processMercadopagoWebhook", () => {
    it("should process approved payment webhook", async () => {
      const mockProduct = {
        id: 1,
        title: "Test E-book",
        price: 1500,
      };

      vi.mocked(db.getProductById).mockResolvedValue(mockProduct as any);
      vi.mocked(db.getOrderByMercadopagoId).mockResolvedValue(null);
      vi.mocked(db.createOrder).mockResolvedValue({
        id: 1,
        status: "approved",
      } as any);

      const axios = await import("axios");
      vi.mocked(axios.default.get).mockResolvedValue({
        data: {
          id: "payment-123",
          status: "approved",
          external_reference: "product_1_1234567890",
          payer: {
            email: "customer@example.com",
            first_name: "John",
          },
          payment_method: {
            type: "credit_card",
          },
        },
      });

      await processMercadopagoWebhook({
        type: "payment",
        data: { id: "payment-123" },
      });

      expect(db.createOrder).toHaveBeenCalled();
      expect(db.getProductById).toHaveBeenCalledWith(1);
    });

    it("should handle rejected payment webhook", async () => {
      const mockProduct = {
        id: 1,
        title: "Test E-book",
        price: 1500,
      };

      vi.mocked(db.getProductById).mockResolvedValue(mockProduct as any);
      vi.mocked(db.getOrderByMercadopagoId).mockResolvedValue({
        id: 1,
        status: "pending",
      } as any);
      vi.mocked(db.updateOrderStatus).mockResolvedValue({
        id: 1,
        status: "failed",
      } as any);

      const axios = await import("axios");
      vi.mocked(axios.default.get).mockResolvedValue({
        data: {
          id: "payment-456",
          status: "rejected",
          external_reference: "product_1_1234567890",
          payer: {
            email: "customer@example.com",
            first_name: "Jane",
          },
          payment_method: {
            type: "debit_card",
          },
        },
      });

      await processMercadopagoWebhook({
        type: "payment",
        data: { id: "payment-456" },
      });

      expect(db.updateOrderStatus).toHaveBeenCalledWith(
        "payment-456",
        "failed"
      );
    });
  });
});
