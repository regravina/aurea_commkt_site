import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail, Clock, BookOpen } from "lucide-react";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function ThankYou() {
  const [, navigate] = useLocation();

  useEffect(() => {
    // Track purchase conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase_complete', {
        'timestamp': new Date().toISOString()
      });
    }
    
    // Track Meta conversion
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 0,
        currency: 'BRL'
      });
    }
  }, []);

  const steps = [
    {
      number: 1,
      title: "Confirme seu Email",
      description: "Verifique sua caixa de entrada. Você receberá um email de confirmação com instruções de acesso.",
      icon: Mail
    },
    {
      number: 2,
      title: "Acesse o Curso",
      description: "Clique no link do email para acessar a plataforma de cursos e começar a aprender.",
      icon: BookOpen
    },
    {
      number: 3,
      title: "Comece Agora",
      description: "Você tem acesso por 6 meses. Estude no seu ritmo e transforme sua carreira!",
      icon: Clock
    }
  ];

  const bonusItems = [
    "📚 Material Didático Completo em PDF",
    "🎥 Aulas Gravadas + Aulas ao Vivo",
    "📝 Exercícios Práticos com Gabarito",
    "💬 Acesso ao Grupo de Alunos no WhatsApp",
    "🎓 Certificado de Conclusão"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-gray-900 transition font-medium"
          >
            ← Voltar para Home
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Success Message */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Parabéns! Sua Compra foi Confirmada! 🎉
          </h1>

          <p className="text-lg text-gray-700 mb-2">
            Obrigado por investir no seu desenvolvimento profissional.
          </p>

          <p className="text-gray-600 mb-8">
            Você receberá um email de confirmação em breve com todas as instruções de acesso.
          </p>
        </div>

        {/* Next Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#D4AF37" }}>
                    {step.number}
                  </div>
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bonus Section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 md:p-12 rounded-lg border-2 mb-12" style={{ borderColor: "#D4AF37" }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✨ Bônus Exclusivos Inclusos
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {bonusItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            📥 Downloads Úteis
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <button className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition">
              <Download className="w-6 h-6" style={{ color: "#D4AF37" }} />
              <div className="text-left">
                <p className="font-bold text-gray-900">Guia de Boas-vindas</p>
                <p className="text-sm text-gray-600">PDF com instruções completas</p>
              </div>
            </button>

            <button className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition">
              <Download className="w-6 h-6" style={{ color: "#D4AF37" }} />
              <div className="text-left">
                <p className="font-bold text-gray-900">Material de Apoio</p>
                <p className="text-sm text-gray-600">Recursos adicionais do curso</p>
              </div>
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ❓ Precisa de Ajuda?
          </h2>

          <p className="text-gray-700 mb-6">
            Se você não receber o email de confirmação em até 5 minutos, ou tiver qualquer dúvida, entre em contato conosco:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://wa.me/5548988274343"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <span className="text-2xl">💬</span>
              <div className="text-left">
                <p className="font-bold text-gray-900">WhatsApp</p>
                <p className="text-sm text-gray-600">+55 48 98827-4343</p>
              </div>
            </a>

            <a
              href="mailto:support@aurea.commkt.com"
              className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <span className="text-2xl">📧</span>
              <div className="text-left">
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">support@aurea.commkt.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Enquanto aguarda o email, conheça mais sobre a AUREA COMMKT
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              className="hover:bg-amber-700 text-white py-3 px-8 rounded-lg transition text-base font-bold"
              style={{ backgroundColor: "#D4AF37" }}
            >
              Voltar para Home
            </Button>

            <Button
              onClick={() => navigate("/blog")}
              className="border-2 text-gray-900 py-3 px-8 rounded-lg transition text-base font-bold"
              style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
              variant="outline"
            >
              Ler Blog
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2025 AUREA COMMKT. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
