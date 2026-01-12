import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MercadoPagoCheckoutProps {
  productId: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
}

export default function MercadoPagoCheckout({
  productId,
  productTitle,
  productPrice,
  productDescription,
}: MercadoPagoCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      // Aqui você chamará a API do MercadoPago para criar uma preferência de pagamento
      // Por enquanto, vamos simular o fluxo
      const response = await fetch("/api/mercadopago/create-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId,
          productTitle,
          productPrice,
          productDescription,
          buyerEmail: "aureacommkt@gmail.com",
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Redireciona para o checkout do MercadoPago
        if (data.init_point) {
          window.location.href = data.init_point;
        }
      } else {
        alert("Erro ao processar o pagamento. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com o servidor de pagamento.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full text-white py-2 rounded-lg transition"
      style={{ backgroundColor: "#D4AF37" }}
    >
      {isLoading ? "Processando..." : "Comprar Agora"}
    </Button>
  );
}
