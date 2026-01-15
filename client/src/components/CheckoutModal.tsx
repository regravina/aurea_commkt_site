import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    title: string;
    price: string;
    description: string;
  };
}

export function CheckoutModal({ isOpen, onClose, product }: CheckoutModalProps) {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPaymentMutation = trpc.orders.createPayment.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      // Extract product ID from the product object
      const productId = product.id;
      
      const result = await createPaymentMutation.mutateAsync({
        productId,
        customerEmail,
        customerName,
        quantity: 1,
      });

      if (result.success && result.initPoint) {
        // Redirect to MercadoPago checkout
        window.location.href = result.initPoint;
      } else {
        setError("Erro ao criar preferência de pagamento. Tente novamente.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Erro ao processar pagamento. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Comprar E-book</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Info */}
          <div className="mb-6 pb-6 border-b border-gray-200">
            <h3 className="font-bold text-gray-900 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
              {product.price}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Seu nome"
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-mail
              </label>
              <input
                type="email"
                required
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="seu@email.com"
                disabled={isLoading}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isLoading}
                className="flex-1"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isLoading || !customerName || !customerEmail}
                className="flex-1 text-white flex items-center justify-center gap-2"
                style={{ backgroundColor: "#D4AF37" }}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processando...
                  </>
                ) : (
                  "Ir para Pagamento"
                )}
              </Button>
            </div>
          </form>

          {/* Payment Methods Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              Você será redirecionado para o MercadoPago para completar o pagamento com:
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                💳 Cartão de Crédito
              </span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                🏦 Boleto
              </span>
              <span className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                📱 PIX
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
