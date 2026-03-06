import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Menu, X, Star } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const [, navigate] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);
    navigate(path);
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
      name: "Thais Hoffmann",
      profession: "Pedagoga",
      content: "Como pedagoga, os cursos da AUREA COMMKT revolucionaram minha comunicação em sala de aula! Ferramentas práticas e conteúdo profundo.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/logo-aurea.jpg" alt="AUREA Logo" className="h-12 md:h-14 w-auto" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => navigate("/")} className="text-gray-800 hover:text-amber-600 transition-colors font-semibold text-lg">Home</button>
            <button onClick={() => navigate("/produtos")} className="text-gray-800 hover:text-amber-600 transition-colors font-semibold text-lg">Vitrine</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="container mx-auto px-4 flex flex-col gap-4 items-start">
              <button onClick={() => handleNavigation("/")} className="text-gray-800 hover:text-amber-600 transition-colors font-semibold text-lg w-full text-left">Home</button>
              <button onClick={() => handleNavigation("/produtos")} className="text-gray-800 hover:text-amber-600 transition-colors font-semibold text-lg w-full text-left">Vitrine</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-28 md:py-40 text-white bg-cover bg-center" style={{ backgroundImage: "url("/AUREA_FUT.jpeg")" }}>
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight uppercase tracking-wide">
            AUREA COMUNICAÇÃO
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-95 font-light">
            Linguística, Comunicação e Marketing: a experiência de quem ensina aplicada ao seu crescimento pessoal e profissional.
          </p>
          <Button 
            onClick={() => navigate("/produtos")}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-8 text-xl shadow-2xl rounded-full font-bold tracking-wider uppercase"
          >
            Conheça a Vitrine <ArrowRight className="ml-3" />
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">O que dizem nossos alunos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="text-amber-500 fill-amber-500" />)}
                </div>
                <p className="text-gray-700 mb-6 flex-grow">\"{testimonial.content}\"</p>
                <div>
                  <p className="font-bold text-lg">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.profession}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
          <p className="max-w-2xl mx-auto mb-8">Inscreva-se para receber insights, dicas e notícias sobre nossos próximos lançamentos.</p>
          <NewsletterForm />
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <div className="text-3xl font-bold mb-4 text-amber-500">AUREA</div>
            <p className="text-gray-400 max-w-xs leading-relaxed mx-auto md:mx-0">Educando para a comunicação estratégica e autoridade no mercado digital.</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl uppercase tracking-wider">Contato</h4>
            <div className="space-y-4 text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-3 hover:text-amber-500 transition-colors
              cursor-pointer" onClick={handleWhatsApp}><Phone size={18} className="text-amber-500" /> +55 (48) 98827-4343</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><Mail size={18} className="text-amber-500" /> aureacommkt@gmail.com</p>
              <p className="flex items-center justify-center md:justify-start gap-3"><MapPin size={18} className="text-amber-500" /> Florianópolis, SC</p>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-xl uppercase tracking-wider">Siga-nos</h4>
            <div className="flex gap-6 justify-center md:justify-start">
              <Instagram onClick={() => window.open("https://instagram.com/aurea_commkt", "_blank")} className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
              <Linkedin className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
              <Facebook onClick={() => window.open("https://facebook.com/aureacommkt", "_blank")} className="cursor-pointer hover:text-amber-500 transition-colors" size={28} />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} AUREA Comunicação & Marketing. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
