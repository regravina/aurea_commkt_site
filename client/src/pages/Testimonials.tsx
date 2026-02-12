import { ArrowLeft, Star } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function Testimonials() {
  const [, navigate] = useLocation();

  const testimonials = [
    {
      id: 1,
      name: "Audrey Soares Rembowski",
      profession: "Turismóloga",
      text: "Os cursos da AUREA COMMKT transformaram minha comunicação profissional. Como turismóloga, agora consigo apresentar ideias com muito mais confiança e impacto. Técnicas práticas que funcionam de verdade!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Audrey"
    },
    {
      id: 2,
      name: "Fabiane Ribeiro",
      profession: "Administradora Pública",
      text: "As aulas da prof. Regina no Senac foram incríveis! Aprender marketing com profundidade, gestão e estratégia mudou minha carreira. Hoje aplico tudo na Udesc. Super recomendo!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fabiane"
    },
    {
      id: 3,
      name: "Thais Hoffmann",
      profession: "Pedagoga",
      text: "Como pedagoga, os cursos da AUREA COMMKT revolucionaram minha comunicação em sala de aula! Ferramentas práticas, conteúdo profundo e didática impecável. Recomendo muito!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Thais"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header com botão voltar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold" style={{ color: "#D4AF37" }}>
            Depoimentos de Alunos
          </h1>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-12">
        {/* Introdução */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-lg text-gray-700">
            Conheça as histórias de sucesso de profissionais que transformaram suas carreiras com os cursos da AUREA COMMKT. Veja como a comunicação e o marketing estratégico podem fazer a diferença na sua trajetória profissional.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition overflow-hidden animate-slide-up"
              style={{ borderColor: "#D4AF37", animationDelay: `${idx * 0.15}s` }}
            >
              {/* Avatar */}
              <div className="flex justify-center pt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full border-4"
                  style={{ borderColor: "#D4AF37" }}
                />
              </div>

              {/* Conteúdo */}
              <div className="p-8">
                {/* Rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-current"
                      style={{ color: "#D4AF37" }}
                    />
                  ))}
                </div>

                {/* Texto do depoimento */}
                <p className="text-gray-700 text-center mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Nome e profissão */}
                <div className="border-t border-gray-200 pt-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600" style={{ color: "#D4AF37" }}>
                    {testimonial.profession}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-8 rounded-2xl max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Pronto para Transformar Sua Carreira?
          </h3>
          <p className="text-gray-300 mb-8">
            Junte-se a profissionais que já transformaram suas vidas com os cursos da AUREA COMMKT. Invista em sua comunicação e veja os resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/produtos")}
              className="text-gray-900 px-8 py-3 rounded-lg transition font-medium"
              style={{ backgroundColor: "#D4AF37" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#C99E2E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#D4AF37")
              }
            >
              Ver Nossos Cursos
            </Button>
            <Button
              onClick={() =>
                window.open(
                  "https://wa.me/5548988274343?text=Olá%20AUREA%20COMMKT%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20cursos%20e%20serviços.",
                  "_blank"
                )
              }
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition border border-white font-medium"
            >
              Fale Conosco via WhatsApp
            </Button>
          </div>
        </div>

        {/* Botão voltar no final */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Button
            onClick={() => navigate("/")}
            className="text-white px-6 py-2 rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#C99E2E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#D4AF37")
            }
          >
            Voltar para Home
          </Button>
        </div>
      </div>
    </div>
  );
}
