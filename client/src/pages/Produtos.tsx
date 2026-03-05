import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Clock } from "lucide-react";
import { useLocation } from "wouter";

export default function Produtos() {
  const [, navigate] = useLocation();

  const cursos = [
    {
      id: 1,
      title: "Domine o Português Básico para Concursos com Aulas Interativas!",
      description: "Domine a Língua Portuguesa com foco em concursos públicos. Aprenda gramática, interpretação de textos e redação com técnicas comprovadas.",
      fullDescription: "Curso completo para dominar o Português para concursos. Abrange gramática, interpretação de textos, redação e simulados. Aulas ao vivo nas terças e quintas à noite.",
      image: "/capa_imersao_ia.jpg", // Placeholder, Regina, precisamos de uma imagem específica para o curso de Português.
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
      description: "Fundamentos essenciais de comunicação. Aprenda técnicas de comunicação clara, persuasiva e eficaz para qualquer contexto.",
      fullDescription: "Curso que aborda os fundamentos da comunicação: linguagem verbal e não verbal, técnicas de apresentação, comunicação em equipe e resolução de conflitos.",
      image: "/capa_imersao_ia.jpg",
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
      description: "Domine a arte de falar em público. Desenvolva confiança e impacto em suas apresentações.",
      fullDescription: "Este curso completo te ensina técnicas profissionais de oratória, desde o controle da voz até a linguagem corporal. Aprenda a estruturar apresentações poderosas, lidar com nervosismo e conquistar sua audiência.",
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
      fullDescription: "Aprenda as técnicas milenares da retórica e as habilidades modernas da oratória.",
      image: "/capa-imersao-ia.jpg",
      pages: "Variável",
      format: "E-book",
      price: "Consulte na Hotmart",
      link: "https://go.hotmart.com/A104321774N",
      preferenceId: null
    },
    {
      id: 1,
      title: "Imersão em IA para Empresas - Volume 1",
      description: "Descubra os segredos da comunicação que influencia decisões.",
      fullDescription: "Um guia completo sobre os princípios da persuasão e estratégias para influenciar decisões.",
      image: "/capa-imersao-ia.jpg",
      pages: 120,
      format: "PDF",
      price: "R$ 27,00",
      link: "https://mpago.la/2aESkDx"
    },
    {
      id: 2,
      title: "Imersão em IA para Empresas - Volume 2",
      description: "Planeje e execute uma estratégia de conteúdo que atrai e engaja.",
      fullDescription: "Aprenda a criar um plano de conteúdo estratégico e identificar seu público-alvo.",
      image: "/capa-imersao-ia.jpg",
      pages: 150,
      format: "PDF",
      price: "R$ 27,00",
      link: "https://mpago.la/1fL1RQb",
      preferenceId: "3133855711-f130d472-415a-4e6e-98fa-181d504e8557"
    },
    {
      id: 3,
      title: "Imersão em IA para Empresas - Volume 3",
      description: "Use a linguagem como ferramenta estratégica para construir uma marca memorável.",
      fullDescription: "Descubra como a linguagem define sua marca e cria mensagens consistentes.",
      image: "/capa-imersao-ia.jpg",
      pages: 130,
      format: "PDF",
      price: "R$ 27,00",
      link: "https://mpago.la/1EJZ2Ly",
      preferenceId: "3133855711-87d85f8a-6b10-4069-bba0-0088f65bd746"
    },
    {
      id: 4,
      title: "Imersão em IA para Empresas - Volume 4",
      description: "Descubra como a Inteligência Artificial pode revolucionar sua empresa.",
      fullDescription: "Guia prático para implementação e estratégias de IA em diversos setores.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      pages: 180,
      format: "PDF",
      link: "https://mpago.la/1cXvgke",
      preferenceId: "3133855711-ebcdd8bf-4cb1-4b00-a5c4-c1a249d509ee"
    },
    {
      id: 5,
      title: "Imersão em IA para Empresas - Volume 5",
      description: "Aprofunde-se nas tendências futuras da IA e tendências de mercado.",
      fullDescription: "Explore inovações, ética e o futuro da automação nos negócios.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 27,00",
      pages: 200,
      format: "PDF",
      link: "https://mpago.la/2CX2Crm",
      preferenceId: "3133855711-c3164fb9-57ea-4c7c-8de8-caca691eff18"
    },
    {
      id: 6,
      title: "Imersão em IA para Empresas - Combo Completo",
      description: "Adquira todos os 5 volumes com um desconto especial.",
      fullDescription: "O combo inclui os volumes 1, 2, 3, 4 e 5, do fundamento ao avançado.",
      image: "/capa-imersao-ia.jpg",
      price: "R$ 127,00",
      pages: "Total de 780",
      format: "PDF",
      link: "https://mpago.la/2BUJ2v9",
      preferenceId: "3133855711-3ace640c-7294-4f11-b4d1-0e71a8d2c1f0"
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

      {/* Cursos */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Nossa Vitrine</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <div key={curso.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition relative">

                {curso.status === "Disponível" && (
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10">DISPONÍVEL</div>
                )}
                <img src={curso.image} alt={curso.title} className="w-full h-48 object-cover rounded-t-2xl" />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{curso.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{curso.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {curso.duration}
                    </span>
                    <span>{curso.modules} módulos</span>
                  </div>
                  <p className="text-xs text-amber-600 font-medium mb-4">{curso.students} alunos</p>
                  {curso.status === "Disponível" && (
                    <p className="text-sm font-bold text-amber-700 mb-4">{curso.price}</p>
                  )}
                  <div className="space-y-2">
                    {curso.status === "Disponível" && curso.link ? (
                      <Button 
                        onClick={() => window.open(curso.link!, '_blank')}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        Comprar Agora
                      </Button>
                    ) : (
                      <>
                        <Button disabled className="w-full bg-gray-400 text-white cursor-not-allowed">
                          Em Breve
                        </Button>
                        <p className="text-xs text-gray-600 text-center">Disponível em breve</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 
