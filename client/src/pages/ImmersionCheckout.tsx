import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Check, AlertCircle, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

interface ImmersionProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  modules: string[];
  benefits: string[];
  image: string;
}

const IMMERSION_PRODUCT: ImmersionProduct = {
  id: "immersion-ia-5dias",
  title: "Imersão IA - 5 Dias de Transformação",
  description: "Aprenda tudo sobre Inteligência Artificial em 5 dias intensivos com conteúdo prático e aplicável ao seu negócio.",
  price: 29700, // R$ 297.00 in cents
  duration: "5 dias",
  modules: [
    "Dia 1: Fundamentos da IA - Desmistificando o Futuro",
    "Dia 2: O Guia Prático de Ferramentas de IA",
    "Dia 3: IA para Negócios - Casos de Sucesso",
    "Dia 4: Seu Primeiro Projeto de IA",
    "Dia 5: Monetização e Escalabilidade",
  ],
  benefits: [
    "✓ 5 vídeos em alta qualidade com apresentações em Prezi",
    "✓ 5 e-books completos (um para cada dia)",
    "✓ Acesso a todas as apresentações em Prezi",
    "✓ Certificado de conclusão",
    "✓ Suporte por email",
    "✓ Acesso vitalício ao conteúdo",
  ],
  image: "/aurea_dia1_fundamentos.png",
};

export default function ImmersionCheckout() {
  const [, navigate] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createPaymentMutation = trpc.orders.createPayment.useMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Nome é obrigatório");
      return false;
    }
    if (!formData.email.trim()) {
      setError("E-mail é obrigatório");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("E-mail inválido");
      return false;
    }
    if (!formData.phone.trim()) {
      setError("Telefone é obrigatório");
      return false;
    }
    return true;
  };

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const result = await createPaymentMutation.mutateAsync({
        productId: 1, // Will be updated with actual immersion product ID
        customerEmail: formData.email,
        customerName: formData.name,
        quantity: 1,
      });

      if (result.initPoint) {
        // Redirect to Mercado Pago payment page
        window.location.href = result.initPoint;
      } else {
        setError("Erro ao processar pagamento. Tente novamente.");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Erro ao processar sua compra. Tente novamente.");
      toast.error("Erro ao processar pagamento");
    } finally {
      setIsLoading(false);
    }
  };

  const priceInReais = IMMERSION_PRODUCT.price / 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
          <h1 className="text-2xl font-bold text-slate-900">Checkout - Imersão IA</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Product Details */}
          <div className="lg:col-span-2">
            {/* Product Card */}
            <Card className="p-8 mb-8 border-slate-200 shadow-lg">
              <div className="flex gap-6 mb-8">
                <img
                  src={IMMERSION_PRODUCT.image}
                  alt={IMMERSION_PRODUCT.title}
                  className="w-32 h-32 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {IMMERSION_PRODUCT.title}
                  </h2>
                  <p className="text-slate-600 mb-4">{IMMERSION_PRODUCT.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-slate-500">Duração:</span>
                    <span className="font-semibold text-slate-900">{IMMERSION_PRODUCT.duration}</span>
                  </div>
                </div>
              </div>

              {/* Modules */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">O que você vai aprender:</h3>
                <ul className="space-y-3">
                  {IMMERSION_PRODUCT.modules.map((module, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-blue-600">{idx + 1}</span>
                      </div>
                      <span className="text-slate-700">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">O que está incluído:</h3>
                <ul className="space-y-2">
                  {IMMERSION_PRODUCT.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-700">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </div>

          {/* Right Column - Checkout Form */}
          <div className="lg:col-span-1">
            <Card className="p-8 border-slate-200 shadow-lg sticky top-24">
              {/* Price Summary */}
              <div className="mb-8 pb-8 border-b border-slate-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold text-slate-900">R$ {priceInReais.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-slate-600">Taxas</span>
                  <span className="font-semibold text-slate-900">Incluídas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">R$ {priceInReais.toFixed(2)}</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleCheckout} className="space-y-4">
                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                {/* Name Input */}
                <div>
                  <Label htmlFor="name" className="text-slate-700 font-medium mb-2 block">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <Label htmlFor="email" className="text-slate-700 font-medium mb-2 block">
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <Label htmlFor="phone" className="text-slate-700 font-medium mb-2 block">
                    Telefone/WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(48) 98827-4343"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="w-full"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Ir para Pagamento
                      <span className="text-lg">→</span>
                    </>
                  )}
                </Button>

                {/* Security Info */}
                <p className="text-xs text-slate-500 text-center mt-4">
                  🔒 Pagamento seguro via Mercado Pago. Seus dados estão protegidos.
                </p>
              </form>

              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center mb-3">Formas de Pagamento</p>
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">Cartão</span>
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">PIX</span>
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">Boleto</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
