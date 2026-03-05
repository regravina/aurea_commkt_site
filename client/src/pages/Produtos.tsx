import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShoppingCart } from "lucide-react";
import { useLocation } from "wouter";

export default function Produtos() {
  const [, navigate] = useLocation();

  const ebooksIA = [
    {
      id: 1,
      title: "Imersão em IA - Vol. 1",
      description: "Fundamentos e Primeiros Passos na Inteligência Artificial.",
      price: "R$ 27,00",
      link: "https://mpago.la/2aESkDx",
      prefId: "3133855711-8726a2a7-d163-4c5d-b056-0dc98791e847"
    },
    {
      id: 2,
      title: "Imersão em IA - Vol. 2",
      description: "IA para Produtividade e Gestão de Tempo.",
      price: "R$ 27,00",
      link: "https://mpago.la/1fL1RQb",
      prefId: "3133855711-f130d472-415a-4e6e-98fa-181d504e8557"
    },
    {
      id: 3,
      title: "Imersão em IA - Vol. 3",
      description: "Criação de Conteúdo e Marketing com IA.",
      price: "R$ 27,00",
      link: "https://mpago.la/1EJZ2Ly",
      prefId: "3133855711-87d85f8a-6b10-4069-bba0-0088f65bd746"
    },
    {
      id: 4,
      title: "Imersão em IA - Vol. 4",
      description: "Análise de Dados e Estratégia de Negócios.",
      price: "R$ 27,00",
      link: "https://mpago.la/1cXvgke",
      prefId: "3133855711-ebcdd8bf-4cb1-4b00-a5c4-c1a249d509ee"
    },
    {
      id: 5,
      title: "Imersão em IA - Vol. 5",
      description: "O Futuro da IA e Automações Avançadas.",
      price: "R$ 27,00",
      link: "https://mpago.la/2CX2Crm",
      prefId: "3133855711-c3164fb9-57ea-4c7c-8de8-caca691eff18"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Simples */}
      <header className="bg-white border-b py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <img 
            src="/AUREA_LOGO.jpeg" 
            alt="AUREA Logo" 
            className="h-12 cursor-pointer" 
            onClick={( ) => navigate('/')}
          />
          <Button variant="ghost" onClick={() => navigate('/')}>Voltar para Home</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">VITRINE AUREA</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Produtos exclusivos desenvolvidos para transformar sua comunicação e autoridade digital.
          </p>
        </div>

        {/* SEÇÃO 1: E-BOOK CLÁSSICO (HOTMART) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <CheckCircle2 className="text-amber-600" /> O Clássico da Oratória
          </h2>
          <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 flex flex-col md:flex-row shadow-xl">
            <div className="md:w-1/3">
              <img src="/oratoria.jpg" alt="Retórica e Oratória" className="w-full h-full object-cover" />
            </div>
            <div className="p-10 md:w-2/3 flex flex-col justify-center">
              <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 uppercase">Best Seller</span>
              <h3 className="text-3xl font-bold mb-4">E-book: Retórica e Oratória</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                O guia definitivo para quem deseja dominar a arte de falar em público, convencer plateias e construir uma imagem de autoridade inabalável. Disponível via Hotmart.
              </p>
              <Button 
                onClick={() => window.open('https://pay.hotmart.com/A104321774N?checkoutMode=2', '_blank' )}
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg w-fit rounded-xl shadow-lg"
              >
                COMPRAR NA HOTMART <ShoppingCart className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2: SÉRIE IMERSÃO EM IA (MERCADO PAGO) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <CheckCircle2 className="text-amber-600" /> Série Imersão em IA
          </h2>
          
          {/* COMBO PROMOCIONAL */}
          <div className="bg-amber-600 rounded-3xl p-10 text-white mb-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold mb-2">COMBO COMPLETO (VOL 1 AO 5)</h3>
              <p className="text-amber-100 text-lg">Leve a coleção completa com desconto exclusivo.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-4">R$ 127,00</div>
              <Button 
                onClick={() => window.open('https://mpago.la/2BUJ2v9', '_blank' )}
                className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold rounded-xl"
              >
                QUERO O COMBO <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>

          {/* VOLUMES INDIVIDUAIS */}
          <div className="grid md:grid-cols-3 gap-8">
            {ebooksIA.map((ebook) => (
              <div key={ebook.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all flex flex-col">
                <img src="/capa-imersao-ia.jpg" alt={ebook.title} className="w-full h-64 object-cover rounded-xl mb-6 shadow-md" />
                <h4 className="text-xl font-bold mb-2">{ebook.title}</h4>
                <p className="text-gray-500 text-sm mb-6 flex-grow">{ebook.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-gray-900">{ebook.price}</span>
                  <Button 
                    onClick={() => window.open(ebook.link, '_blank')}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    COMPRAR
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO 3: CURSOS (HOTMART) */}
        <section>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <CheckCircle2 className="text-amber-600" /> Cursos de Especialização
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="border rounded-3xl overflow-hidden shadow-lg group">
              <img src="/ptconcursos.jpeg" alt="Português" className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Português para Concursos</h3>
                <p className="text-gray-600 mb-6">Domine a gramática e interpretação de textos com foco em aprovação.</p>
                <Button 
                  onClick={() => window.open('https://go.hotmart.com/I104320902G?dp=1', '_blank' )}
                  className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg"
                >
                  MATRICULAR-SE (R$ 80,00)
                </Button>
              </div>
            </div>

            <div className="border rounded-3xl overflow-hidden shadow-lg group">
              <img src="/comunicacao.jpeg" alt="Comunicação" className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">Comunicação Básica</h3>
                <p className="text-gray-600 mb-6">A base essencial para uma expressão clara e de alto impacto profissional.</p>
                <Button 
                  onClick={() => window.open('https://go.hotmart.com/D104320944X?dp=1', '_blank' )}
                  className="w-full bg-amber-600 hover:bg-amber-700 py-6 text-lg"
                >
                  MATRICULAR-SE (R$ 30,00)
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20 text-center">
        <p className="text-gray-500">&copy; 2026 AUREA Comunicação & Marketing. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
