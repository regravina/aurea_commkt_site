import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Users, Clock, Award, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function CursoComunicacao() {
  const [, navigate] = useLocation();

  const handleBuyClick = () => {
    // Track conversion
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'purchase_click', {
        'course_name': 'Comunicação Básica',
        'course_price': 30,
        'platform': 'hotmart'
      });
    }
    window.open('https://go.hotmart.com/D104320944X?dp=1', '_blank');
  };

  const benefits = [
    "Fundamentos de Comunicação Verbal e Não-Verbal",
    "Técnicas de Apresentação Profissional",
    "Comunicação em Equipe e Liderança",
    "Resolução de Conflitos",
    "Inteligência Emocional na Comunicação",
    "Acesso por 6 Meses",
    "Aulas Práticas e Interativas",
    "Certificado de Conclusão"
  ];

  const testimonials = [
    {
      name: "Audrey Soares Rembowski",
      role: "Turismóloga",
      text: "Os cursos da AUREA COMMKT transformaram minha comunicação profissional. Como turismóloga, agora consigo apresentar ideias com muito mais confiança e impacto.",
      rating: 5
    },
    {
      name: "Thais Hoffmann",
      role: "Pedagoga",
      text: "Como pedagoga, os cursos da AUREA COMMKT revolucionaram minha comunicação em sala de aula! Ferramentas práticas e didática impecável.",
      rating: 5
    }
  ];

  const modules = [
    { number: 1, title: "Fundamentos da Comunicação", description: "Conceitos básicos e modelos de comunicação" },
    { number: 2, title: "Comunicação Verbal", description: "Técnicas de fala clara e persuasiva" },
    { number: 3, title: "Comunicação Não-Verbal", description: "Linguagem corporal e expressão facial" },
    { number: 4, title: "Escuta Ativa", description: "Como ouvir e compreender melhor" },
    { number: 5, title: "Apresentações Profissionais", description: "Estrutura e técnicas de apresentação" },
    { number: 6, title: "Comunicação em Equipe", description: "Trabalho colaborativo e sinergia" },
    { number: 7, title: "Resolução de Conflitos", description: "Estratégias para lidar com desacordos" },
    { number: 8, title: "Inteligência Emocional", description: "Gestão de emoções na comunicação" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition"
            style={{ color: "#D4AF37" }}
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
          <div className="text-lg md:text-2xl font-bold" style={{ color: "#D4AF37" }}>
            AUREA
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg"
                alt="Comunicação Básica"
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                ✓ DISPONÍVEL AGORA
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Comunicação Básica
              </h1>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Fundamentos essenciais de comunicação. Aprenda técnicas de comunicação clara, persuasiva e eficaz para qualquer contexto profissional.
              </p>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-2" style={{ color: "#D4AF37" }}>
                  R$ 30,00
                </div>
                <p className="text-gray-600">Acesso por 6 meses | 8 módulos completos</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleBuyClick}
                  className="flex-1 hover:bg-amber-700 text-white py-3 rounded-lg transition text-base font-bold"
                  style={{ backgroundColor: "#D4AF37" }}
                >
                  💳 Comprar Agora
                </Button>
                <Button
                  onClick={() => document.getElementById('modulos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex-1 border-2 text-gray-900 py-3 rounded-lg transition text-base font-bold"
                  style={{ borderColor: "#D4AF37", color: "#D4AF37" }}
                  variant="outline"
                >
                  Ver Conteúdo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#D4AF37" }}>8</div>
                  <p className="text-sm text-gray-600">Módulos</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#D4AF37" }}>30+</div>
                  <p className="text-sm text-gray-600">Alunos</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold" style={{ color: "#D4AF37" }}>6 meses</div>
                  <p className="text-sm text-gray-600">Acesso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            O que você vai receber
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: "#D4AF37" }} />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modulos" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            8 Módulos Completos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div key={module.number} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold" style={{ backgroundColor: "#D4AF37" }}>
                    {module.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{module.title}</h3>
                    <p className="text-gray-600 text-sm">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            O que nossos alunos dizem
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
            Por que escolher este curso?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Professora Especialista</h3>
              <p className="text-gray-600">
                Mais de 10 anos de experiência em comunicação. Professora certificada e reconhecida.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Comunidade Ativa</h3>
              <p className="text-gray-600">
                Mais de 30 alunos já transformaram sua comunicação. Comunidade de apoio e networking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#D4AF37" }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Flexibilidade Total</h3>
              <p className="text-gray-600">
                Acesso por 6 meses. Estude no seu ritmo. Aulas práticas e interativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Pronto para melhorar sua comunicação?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Comece agora e transforme sua forma de se comunicar. Investimento que vai render em todas as áreas da sua vida.
          </p>
          <Button
            onClick={handleBuyClick}
            className="hover:bg-amber-700 text-white py-3 px-8 rounded-lg transition text-base font-bold"
            style={{ backgroundColor: "#D4AF37" }}
          >
            💳 Comprar Agora - R$ 30,00
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4" style={{ color: "#D4AF37" }}>AUREA</h3>
              <p className="text-gray-400 text-sm">
                Transforme sua experiência em resultados através da linguística, comunicação e marketing.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate("/")} className="hover:text-white transition">Home</button></li>
                <li><button onClick={() => navigate("/sobre")} className="hover:text-white transition">Sobre</button></li>
                <li><button onClick={() => navigate("/blog")} className="hover:text-white transition">Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Suporte</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={() => navigate('/faq')} className="hover:text-white transition">FAQ</button></li>
                <li><a href="/privacy-policy" className="hover:text-white transition">Política de Privacidade</a></li>
                <li><a href="/terms-of-use" className="hover:text-white transition">Termos de Uso</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{ color: "#D4AF37" }}>Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="https://wa.me/5548988274343" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    WhatsApp: +55 48 98827-4343
                  </a>
                </li>
                <li>
                  <a href="mailto:support@aurea.commkt.com" className="hover:text-white transition">
                    E-mail: support@aurea.commkt.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-400">&copy; 2025 AUREA COMMKT. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
