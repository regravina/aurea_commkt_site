import { Button } from "@/components/ui/button";
import { CheckCircle, Download } from "lucide-react";
import { useLocation } from "wouter";

export default function PaymentSuccess() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Pagamento Confirmado!
        </h1>

        <p className="text-gray-600 mb-6">
          Obrigado por sua compra! Seu e-book será enviado para seu e-mail em breve.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
          <p className="text-sm text-gray-700">
            <strong>Próximos passos:</strong>
          </p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1">
            <li>✓ Verifique seu e-mail (incluindo spam)</li>
            <li>✓ Baixe o e-book do link enviado</li>
            <li>✓ Aproveite o conteúdo!</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => navigate("/")}
            className="w-full text-white py-3 rounded-lg transition flex items-center justify-center gap-2"
            style={{ backgroundColor: "#D4AF37" }}
          >
            <Download className="w-4 h-4" />
            Voltar para Home
          </Button>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          Dúvidas? Entre em contato conosco via WhatsApp: (48) 98827-4343
        </p>
      </div>
    </div>
  );
}
