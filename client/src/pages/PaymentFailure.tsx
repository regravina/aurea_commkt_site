import { Button } from "@/components/ui/button";
import { XCircle, RotateCcw } from "lucide-react";
import { useLocation } from "wouter";

export default function PaymentFailure() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <XCircle className="w-16 h-16 text-red-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pagamento Não Aprovado
        </h1>

        <p className="text-gray-600 mb-6">
          Desculpe, seu pagamento não foi processado. Por favor, tente novamente ou use outro método de pagamento.
        </p>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700">
            <strong>O que pode ter acontecido:</strong>
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>• Dados do cartão incorretos</li>
            <li>• Saldo insuficiente</li>
            <li>• Transação recusada pelo banco</li>
            <li>• Timeout na conexão</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/")}
            className="w-full text-white py-3 rounded-lg transition flex items-center justify-center gap-2"
            style={{ backgroundColor: "#D4AF37" }}
          >
            <RotateCcw className="w-4 h-4" />
            Tentar Novamente
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("https://wa.me/5548988274343", "_blank")}
            className="w-full py-3 rounded-lg transition"
          >
            Falar com Suporte
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Precisa de ajuda? Entre em contato: (48) 98827-4343
        </p>
      </div>
    </div>
  );
}
