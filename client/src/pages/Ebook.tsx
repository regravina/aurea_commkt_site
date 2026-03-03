import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import { useLocation } from "wouter";

export default function Ebook() {
  const [, navigate] = useLocation();

  const ebooks = [
    {
      id: 1,
      title: "Imersão em IA para Empresas - Volume 1",
      description: "Descubra como a Inteligência Artificial pode revolucionar sua empresa. Guia prático para implementação e estratégias.",
      fullDescription: "Este e-book aborda a aplicação de IA em diversos setores empresariais, desde otimização de processos até a criação de novos produtos e serviços. Inclui estudos de caso e dicas de implementação.",
      image: "/ebooks/aurea_ia_vol1.png",
      price: "R$ 27,00",
      pages: 120,
      format: "PDF",
      link: "#MERCADO_PAGO_LINK_VOL1"
    },
    {
      id: 2,
      title: "Imersão em IA para Empresas - Volume 2",
      description: "Aprofunde-se nas tendências futuras da IA e como se preparar para o impacto no mercado de trabalho e nos negócios.",
      fullDescription: "Explore as inovações mais recentes em IA, como IA generativa, ética em IA e o futuro da automação. Prepare sua empresa para os desafios e oportunidades que virão.",
      image: "/ebooks/aurea_ia_vol2.png",
      price: "R$ 27,00",
      pages: 150,
      format: "PDF",
      link: "#MERCADO_PAGO_LINK_VOL2"
    },
    {
      id: 3,
      title: "Imersão em IA para Empresas - Volume 3",
      description: "Use a linguagem como ferramenta estratégica para construir uma marca memorável e diferenciada.",
      fullDescription: "Descubra como a linguagem define sua marca. Aprenda a criar uma voz única, mensagens consistentes e identidade linguística que diferencia você da concorrência.",
      image: "/ebooks/aurea_ia_vol3.png",
      price: "R$ 27,00",
      pages: 130,
      format: "PDF",
      link: "#MERCADO_PAGO_LINK_VOL3"
    },
    {
      id: 4,
      title: "Imersão em IA para Empresas - Volume 4",
      description: "Descubra como a Inteligência Artificial pode revolucionar sua empresa. Guia prático para implementação e estratégias.",
      fullDescription: "Este e-book aborda a aplicação de IA em diversos setores empresariais, desde otimização de processos até a criação de novos produtos e serviços. Inclui estudos de caso e dicas de implementação.",
      image: "/ebooks/aurea_ia_vol4.png",
      price: "R$ 27,00",
      pages: 180,
      format: "PDF",
      link: "#MERCADO_PAGO_LINK_VOL4"
    },
    {
      id: 5,
      title: "Imersão em IA para Empresas - Volume 5",
      description: "Aprofunde-se nas tendências futuras da IA e como se preparar para o impacto no mercado de trabalho e nos negócios.",
      fullDescription: "Explore as inovações mais recentes em IA, como IA generativa, ética em IA e o futuro da automação. Prepare sua empresa para os desafios e oportunidades que virão.",
      image: "/ebooks/aurea_ia_vol5.png",
      price: "R$ 27,00",
      pages: 200,
      format: "PDF",
      link: "#MERCADO_PAGO_LINK_VOL5"
    },
    {
      id: 6,
      title: "Imersão em IA para Empresas - Combo Completo",
      description: "Adquira todos os 5 volumes da Imersão em IA para Empresas com um desconto especial. Conhecimento completo para transformar seu negócio!",
      fullDescription: "O combo inclui os volumes 1, 2, 3, 4 e 5, cobrindo desde os fundamentos até as aplicações avançadas e tendências futuras da IA no ambiente corporativo.",
      image: "/ebooks/aurea_ia_5_isbn.png",
      price: "R$ 127,00",
      pages: "Total de 780",
      format: "PDF",
      link: "#HOTMART_LINK_COMBO"
    }
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 text-center">
            Nossos E-books de Imersão em IA para Empresas
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center max-w-3xl mx-auto">
            Explore nossa coleção de e-books e aprofunde seus conhecimentos em Inteligência Artificial para transformar seu negócio.
          </p>
        </div>
      </section>

      {/* E-books Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div key={ebook.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative">
                <img src={ebook.image} alt={ebook.title} className="w-full h-64 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{ebook.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{ebook.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Download size={16} />
                      {ebook.pages} páginas
                    </span>
                    <span>{ebook.format}</span>
                  </div>
                  <p className="text-lg font-bold text-amber-700 mb-4">{ebook.price}</p>
                  <div className="space-y-2">
                    {ebook.link && (
                      <a
                        href={ebook.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className="w-full hover:bg-amber-700 text-white py-3 rounded-lg transition text-base flex items-center justify-center gap-2"
                          style={{ backgroundColor: "#D4AF37" }}
                        >
                          <Download className="w-5 h-5" />
                          Comprar Agora
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
