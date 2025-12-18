import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useLocation } from "wouter";

export default function Blog() {
  const [, navigate] = useLocation();

  const artigos = [
    {
      id: 1,
      title: "5 Técnicas de Oratória que Transformam Apresentações",
      excerpt: "Descubra as técnicas mais eficazes para melhorar sua performance ao falar em público.",
      author: "AUREA COMMKT",
      date: "15 de Dezembro, 2025",
      category: "Oratória",
      image: "/curso-oratoria.jpg"
    },
    {
      id: 2,
      title: "Como Escrever Textos que Vendem: Guia Prático",
      excerpt: "Aprenda os segredos do copywriting persuasivo e aumente suas conversões.",
      author: "AUREA COMMKT",
      date: "12 de Dezembro, 2025",
      category: "Marketing",
      image: "/curso-linguistica-parte2.png"
    },
    {
      id: 3,
      title: "Linguagem Corporal: O Poder Silencioso da Comunicação",
      excerpt: "Entenda como sua postura e gestos influenciam a percepção do seu público.",
      author: "AUREA COMMKT",
      date: "10 de Dezembro, 2025",
      category: "Comunicação",
      image: "/curso-oratoria.jpg"
    },
    {
      id: 4,
      title: "Estratégia de Conteúdo: Do Planejamento à Execução",
      excerpt: "Crie um plano de conteúdo que atrai, engaja e converte seu público-alvo.",
      author: "AUREA COMMKT",
      date: "8 de Dezembro, 2025",
      category: "Marketing",
      image: "/curso-linguistica-parte1.png"
    },
    {
      id: 5,
      title: "Branding Linguístico: Construindo uma Marca Memorável",
      excerpt: "Descubra como a linguagem define sua marca e diferencia você da concorrência.",
      author: "AUREA COMMKT",
      date: "5 de Dezembro, 2025",
      category: "Branding",
      image: "/ebook-branding-linguistico-v2.png"
    },
    {
      id: 6,
      title: "A Importância da Clareza na Escrita Profissional",
      excerpt: "Técnicas para escrever de forma clara, concisa e profissional em qualquer contexto.",
      author: "AUREA COMMKT",
      date: "1 de Dezembro, 2025",
      category: "Linguística",
      image: "/curso-linguistica-parte1.png"
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
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Blog</h1>
          <div className="w-20"></div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog AUREA COMMKT
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Artigos, dicas e insights sobre linguística, comunicação e marketing para potencializar seu negócio.
          </p>
        </div>
      </section>

      {/* Artigos */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artigos.map((artigo) => (
              <article key={artigo.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
                <img src={artigo.image} alt={artigo.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                      {artigo.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{artigo.title}</h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-2">{artigo.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {artigo.date}
                    </span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Ler Artigo
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Quer Aprender Mais?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Confira nossos cursos e e-books especializados para aprofundar seu conhecimento.
          </p>
          <Button 
            onClick={() => navigate('/produtos')}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
          >
            Ver Produtos
          </Button>
        </div>
      </section>
    </div>
  );
}
