import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { ArrowRight, Star, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/AUREA_FUT.jpeg')" }}>
  <div className="absolute inset-0 bg-black/40" /> {/* Escurece um pouco para o texto aparecer */}
  <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            AUREA <span className="text-amber-600">Comunicação & Marketing</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transformando conhecimento em autoridade digital. Cursos e mentorias com a expertise da Profa. Regina Gravina.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/produtos')}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105 flex gap-2"
            >
              ACESSAR VITRINE <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Seção VITRINE (Destaque Único) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossa VITRINE</h2>
          <p className="text-gray-600 mb-12 max-w-xl mx-auto">
            Explore nossa série de E-books "Imersão em IA para Empresas" e nossos cursos de oratória e comunicação.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Card de Destaque 1 */}
            <div className="p-8 border border-amber-100 rounded-3xl bg-amber-50/30 flex flex-col items-center">
              <CheckCircle2 className="text-amber-600 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-2">IA para Negócios</h3>
              <p className="text-gray-600 text-sm">Série completa com 5 volumes e combo exclusivo.</p>
            </div>
            {/* Card de Destaque 2 */}
            <div className="p-8 border border-amber-100 rounded-3xl bg-amber-50/30 flex flex-col items-center">
              <Star className="text-amber-600 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-2">Comunicação & Oratória</h3>
              <p className="text-gray-600 text-sm">Técnicas clássicas e modernas para falar em público.</p>
            </div>
            {/* Card de Destaque 3 */}
            <div className="p-8 border border-amber-100 rounded-3xl bg-amber-50/30 flex flex-col items-center">
              <CheckCircle2 className="text-amber-600 mb-4" size={40} />
              <h3 className="font-bold text-xl mb-2">Linguagem & Carreira</h3>
              <p className="text-gray-600 text-sm">Domine o português para concursos e mercado de trabalho.</p>
            </div>
          </div>

          <Button 
            variant="outline"
            onClick={() => navigate('/produtos')}
            className="border-amber-600 text-amber-700 hover:bg-amber-50 rounded-full px-10"
          >
            Ver todos os produtos
          </Button>
        </div>
      </section>

      {/* Sobre Regina (Resumo do que você já gosta) */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Profa. Regina Gravina</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Com mais de 20 anos de experiência acadêmica e técnica, a AUREA nasceu para compartilhar conhecimento especializado em comunicação, marketing e novas tecnologias.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
