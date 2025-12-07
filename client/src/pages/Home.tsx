import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/logo-aurea.jpg" alt="AUREA Logo" className="h-8 md:h-10 w-auto rounded-lg" />
            <div className="text-lg md:text-2xl font-bold text-amber-600">AUREA</div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition font-medium">Home</button>
            <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover:text-amber-600 transition font-medium">Cursos</button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-amber-600 transition font-medium">Serviços</button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-amber-600 transition font-medium">Contato</button>
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
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-600 transition font-medium text-left">Home</button>
              <button onClick={() => scrollToSection('cursos')} className="text-gray-700 hover:text-amber-600 transition font-medium text-left">Cursos</button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-amber-600 transition font-medium text-left">Serviços</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-amber-600 transition font-medium text-left">Contato</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Banner */}
      <section id="home" className="relative text-white py-12 md:py-24 overflow-hidden min-h-screen flex items-center" style={{
        backgroundImage: 'url(/banner-aurea.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              AUREA COMUNICAÇÃO E MARKETING
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-6 md:mb-8 leading-relaxed">
              Transforme sua experiência em resultados: Linguística, Comunicação e Marketing com a excelência de quem ensina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg rounded-lg transition w-full sm:w-auto"
                onClick={() => scrollToSection('cursos')}
              >
                Descubra Nossos Cursos e Serviços
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibilidade Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Por Que a AUREA é o Seu Próximo Passo?
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
            Para o pequeno e médio empresário e o profissional liberal, a comunicação é a chave para o crescimento. Na AUREA COMMKT, unimos a teoria linguística de ponta com a prática do marketing digital para entregar soluções que realmente funcionam.
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Diferencial 1 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Experiência Comprovada</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Mais de 10 anos de atuação e formação de profissionais na área de linguística, comunicação e marketing.
              </p>
            </div>

            {/* Diferencial 2 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Excelência Pedagógica</h3>
              <p className="text-gray-700 text-sm md:text-base">
                A qualidade e competência de quem não apenas faz, mas também ministra cursos técnicos e complementares.
              </p>
            </div>

            {/* Diferencial 3 */}
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-amber-500 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">✓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Resultados Tangíveis</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Foco em estratégias de comunicação e marketing que geram crescimento real para o seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ofertas Section */}
      <section id="cursos" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 text-gray-900">
            Soluções AUREA: Comunicação, Linguística e Mercado
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-8 md:mb-16 max-w-2xl mx-auto">
            Escolha entre nossos cursos especializados ou serviços de consultoria personalizados.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {/* Cursos */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Cursos Técnicos e Complementares</h3>
              <p className="text-gray-700 text-sm md:text-base mb-8">
                Invista no seu conhecimento com nossos cursos especializados. Aprenda as técnicas mais atuais de comunicação e linguística aplicadas ao mercado.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Copywriting Estratégico</h4>
                    <p className="text-gray-600 text-xs md:text-sm">A arte de escrever para vender</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Linguística Aplicada ao Marketing</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Entenda como a linguagem influencia a decisão de compra</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Oratória e Apresentações de Alto Impacto</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Domine a arte de falar em público</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 md:py-3 rounded-lg transition text-sm md:text-base">
                Ver Catálogo Completo de Cursos
              </Button>
            </div>

            {/* Serviços */}
            <div id="servicos" className="bg-white p-6 md:p-10 rounded-2xl shadow-md border border-gray-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Serviços de Consultoria e Marketing</h3>
              <p className="text-gray-700 text-sm md:text-base mb-8">
                Sua comunicação e marketing nas mãos de especialistas. Desenvolvemos estratégias personalizadas para posicionar sua marca e atrair seus clientes ideais.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Consultoria de Marketing Digital</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Estratégia completa para presença online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Criação de Conteúdo Otimizado (SEO)</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Textos que educam e vendem</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Revisão e Edição Profissional</h4>
                    <p className="text-gray-600 text-xs md:text-sm">Garanta a excelência linguística em todos os seus materiais</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 md:py-3 rounded-lg transition text-sm md:text-base">
                Solicitar Orçamento Personalizado
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Pronto para Elevar Sua Comunicação ao Nível AUREA?
          </h2>
          <p className="text-base md:text-xl text-gray-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Não perca mais tempo com estratégias que não funcionam. Fale com quem entende de linguagem e mercado.
          </p>
          <Button 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 md:px-10 py-2 md:py-4 text-base md:text-lg rounded-lg transition"
            onClick={() => scrollToSection('contato')}
          >
            Fale Conosco Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-gray-300 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Sobre */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">AUREA COMMKT</h3>
              <p className="text-sm">
                Excelência em linguística, comunicação e marketing para o seu negócio crescer.
              </p>
            </div>

            {/* Links Rápidos */}
            <div>
              <h4 className="text-white font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-500 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('cursos')} className="hover:text-amber-500 transition">Cursos</button></li>
                <li><button onClick={() => scrollToSection('servicos')} className="hover:text-amber-500 transition">Serviços</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="hover:text-amber-500 transition">Contato</button></li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>aureacommkt@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
              <p>&copy; 2025 AUREA COMMKT. Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-amber-500 transition">Política de Privacidade</a>
                <a href="#" className="hover:text-amber-500 transition">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
