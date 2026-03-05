import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function Produtos() {
  const [, navigate] = useLocation();

  const cursos = [
    {
      id: 1,
      title: "Domine o Português Básico para Concursos com Aulas Interativas!",
      description: "Domine a Língua Portuguesa com foco em concursos públicos. Aprenda gramática, interpretação de textos e redação.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 80,00",
      duration: "Acesso por 6 meses",
      modules: 12,
      students: "50+",
      link: "https://go.hotmart.com/I104320902G?dp=1",
      status: "Disponível"
    },
    {
      id: 2,
      title: "Comunicação Básica",
      description: "Fundamentos essenciais de comunicação clara, persuasiva e eficaz para qualquer contexto.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 30,00",
      duration: "Acesso por 6 meses",
      modules: 8,
      students: "30+",
      link: "https://go.hotmart.com/D104320944X?dp=1",
      status: "Disponível"
    },
    {
      id: 3,
      title: "Oratória e Apresentações",
      description: "Domine a arte de falar em público. Desenvolva confiança e impacto.",
      image: "/capa-imersao-ia.jpg",
      price: "Em breve",
      duration: "5 semanas",
      modules: 8,
      students: "150+",
      link: null,
      status: "Em Breve"
    },
    {
      id: 7,
      title: "Retórica e Oratória (O Clássico)",
      description: "Domine a arte de falar em público e aprimore sua retórica com este e-book clássico.",
      image: "/capa-imersao-ia.jpg",
      price: "Consulte na Hotmart",
      duration: "E-book",
      modules: "Completo",
      students: "Novo",
      link: "https://go.hotmart.com/A104321774N",
      status: "Disponível"
    },
    {
      id: 101,
      title: "IA para Empresas - Vol 1",
      description: "Descubra os segredos da comunicação que influencia decisões.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      duration: "PDF",
      modules: "E-book",
      students: "Premium",
      link: "https://mpago.la/2aESkDx",
      status: "Disponível"
    },
    {
      id: 102,
      title: "IA para Empresas - Vol 2",
      description: "Planeje e execute uma estratégia de conteúdo que atrai e engaja.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      duration: "PDF",
      modules: "E-book",
      students: "Premium",
      link: "https://mpago.la/1fL1RQb",
      status: "Disponível"
    },
    {
      id: 103,
      title: "IA para Empresas - Vol 3",
      description: "Use a linguagem como ferramenta estratégica para sua marca.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      duration: "PDF",
      modules: "E-book",
      students: "Premium",
      link: "https://mpago.la/1EJZ2Ly",
      status: "Disponível"
    },
    {
      id: 104,
      title: "IA para Empresas - Vol 4",
      description: "Descubra como a IA pode revolucionar sua empresa.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      duration: "PDF",
      modules: "E-book",
      students: "Premium",
      link: "https://mpago.la/1cXvgke",
      status: "Disponível"
    },
    {
      id: 105,
      title: "IA para Empresas - Vol 5",
      description: "Aprofunde-se nas tendências futuras da IA e automação.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      duration: "PDF",
      modules: "E-book",
      students: "Premium",
      link: "https://mpago.la/2CX2Crm",
      status: "Disponível"
    },
    {
      id: 106,
      title: "Combo IA Completo",
      description: "Adquira todos os 5 volumes com um desconto especial.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 127,00",
      duration: "PDF",
      modules: "5 Volumes",
      students: "Oferta",
      link: "https://mpago.la/2BUJ2v9",
      status: "Disponível"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-amber-700 hover:text-amber-800 transition"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Voltar</span>
          </button>
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Nossos Produtos</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vitrine AUREA
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Escolha entre nossos cursos e e-books para aprender com expertise e qualidade.
          </p>
        </div>
      </section>

      {/* Grid de Produtos */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Nossa Vitrine</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <div key={curso.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative flex flex-col">
                {curso.status === "Disponível" && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">DISPONÍVEL</div>
                )}
                <img src={curso.image} alt={curso.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{curso.title}</h4>
                  <p className="text-gray-700 text-sm mb-4 flex-grow">{curso.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {curso.duration}
                    </span>
                    <span>{curso.modules}</span>
                  </div>
                  <p className="text-xs text-amber-600 font-medium mb-4">{curso.students}</p>
                  <p className="text-sm font-bold text-amber-700 mb-4">{curso.price}</p>
                  <div className="mt-auto">
                    {curso.status === "Disponível" && curso.link ? (
                      <Button 
                        onClick={() => window.open(curso.link!, '_blank')}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        Comprar Agora
                      </Button>
                    ) : (
                      <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                        Em Breve
                      </Button>
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
