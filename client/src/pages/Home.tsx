import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Menu, X, Star } from "lucide-react";
import { useLocation } from "wouter";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5548988274343?text=Olá%20AUREA%20COMMKT%2C%20gostaria%20de%20saber%20mais%20sobre%20seus%20cursos%20e%20serviços.", "_blank" );
  };

  const testimonials = [
    {
      name: "Audrey Soares Rembowski",
      profession: "Turismóloga",
      content: "Os cursos da AUREA COMMKT transformaram minha comunicação profissional. Consigo apresentar ideias com muito mais confiança.",
      rating: 5
    },
    {
      name: "Fabiane Ribeiro",
      profession: "Administradora",
      content: "As aulas da Profa. Regina no Senac foram incríveis! Aprender marketing e estratégia mudou minha carreira.",
      rating: 5
    },
    {
      name: "Tais Hoffmann",
      profession: "Pedagoga",
      content: "Ferramentas práticas e didática impecável. Recomendo para qualquer profissional que queira evoluir.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/AUREA_LOGO.jpeg" 
              alt="AUREA Logo" 
              className="h-12 md:h-16 w-auto object-contain cursor-pointer" 
              onClick={() => navigate('/')}
            />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => navigate('/')} className="hover:text-amber-600">Home</button>
            <button onClick={() => navigate('/produtos')} className="hover:text-amber-600">Vitrine</button>
            <Button onClick={handleWhatsApp} className="bg-amber-600 hover:bg-amber-700">Fale Conosco</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4">
              <button onClick={() => navigate('/')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left">Home</button>
              <button onClick={() => navigate('/produtos')} className="text-gray-700 hover:text-gray-900 transition font-medium text-left">Vitrine</button>
              <button onClick={handleWhatsApp} className="text-gray-700 hover:text-gray-900 transition font-medium text-left">Fale Conosco</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section com sua imagem original */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-cover bg-center text-white" style={{ backgroundImage: "url('/AUREA_FUT.jpeg')" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase">
            AUREA COMUNICAÇÃO   
E MARKETING
          </h1>
          <p className="text-xl mb-10 max-w-2xl opacity-90">
            Linguística, Comunicação e Marketing: a experiência de quem ensina aplicada ao seu crescimento pessoal e profissional.
          </p>
          <Button 
            onClick={() => navigate('/produtos')}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 px-10 py-7 text-xl shadow-2xl"
          >
            ACESSAR VITRINE <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* SEÇÃO VITRINE - ÚNICA E SEM ABAS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">VITRINE</h2>
            <div className="h-1.5 w-24 bg-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 text-left">
            <div className="group cursor-pointer border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all" onClick={() => navigate('/produtos')}>
              <img src="/ptconcursos.jpeg" alt="Português" className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2 text-gray-800">Português para Concursos</h3>
                <p className="text-gray-600 mb-4">Domine a gramática e interpretação para vencer desafios acadêmicos.</p>
                <span className="text-amber-600 font-bold flex items-center">Saiba mais <ArrowRight size={16} className="ml-2" /></span>
              </div>
            </div>
            
            <div className="group cursor-pointer border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all" onClick={() => navigate('/produtos')}>
              <img src="/comunicacao.jpeg" alt="Comunicação" className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2 text-gray-800">Comunicação Básica</h3>
                <p className="text-gray-600 mb-4">A base essencial para uma expressão clara e de alto impacto profissional.</p>
                <span className="text-amber-600 font-bold flex items-center">Saiba mais <ArrowRight size={16} className="ml-2" /></span>
              </div>
            </div>
            
            <div className="group cursor-pointer border rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all" onClick={() => navigate('/produtos')}>
              <img src="/oratoria.jpg" alt="Oratória" className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="p-8">
                <h3 className="font-bold text-2xl mb-2 text-gray-800">Retórica e Oratória</h3>
                <p className="text-gray-600 mb-4">A arte clássica de cativar e convencer plateias presenciais e virtuais.</p>
                <span className="text-amber-600 font-bold flex items-center">Saiba mais <ArrowRight size={16} className="ml-2" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos - Recuperados do seu original */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">O que dizem nossos alunos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex justify-center text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="italic text-gray-700 mb-6">\"{t.content}\"</p>
                <h4 className="font-bold text-gray-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.profession}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rodapé - Recuperado do seu original */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-amber-600">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="text-3xl font-bold mb-6 text-amber-500">AUREA</div>
            <p className="text-gray-400 max-w-xs leading-relaxed">Educando para a comunicação estratégica e autoridade no mercado digital.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl">Contato</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center gap-3"><Phone size={18} className="text-amber-500" /> +55 (48) 98827-4343</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-amber-500" /> aureacommkt@gmail.com</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-amber-500" /> Florianópolis, SC</p>
            </div>
          </div>
          <div className="flex gap-6">
            <Instagram onClick={() => window.open('https://instagram.com/aurea_commkt', '_blank' )} className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
            <Linkedin className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
            <Facebook className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm font-medium">
          &copy; 2026 AUREA Comunicação & Marketing. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
