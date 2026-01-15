import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function PaymentPending() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <Clock className="w-16 h-16 text-yellow-500 mx-auto animate-pulse" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pagamento Pendente
        </h1>

        <p className="text-gray-600 mb-6">
          Seu pagamento está sendo processado. Isso pode levar alguns minutos.
        </p>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700">
            <strong>Informações importantes:</strong>
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>• Não feche esta página</li>
            <li>• Você receberá um e-mail de confirmação</li>
            <li>• Seu e-book será enviado em breve</li>
            <li>• Se nada acontecer em 10 minutos, verifique seu e-mail</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/")}
            className="w-full text-white py-3 rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
          >
            Voltar para Home
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Dúvidas? Entre em contato: (48) 98827-4343
        </p>
      </div>
    </div>
  );
}
