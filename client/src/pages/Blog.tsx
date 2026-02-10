import { useState } from "react";
import { Search, Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const articleContent = {
  1: "A Era da Decisao marca uma transformacao profunda em como as organizacoes operam. Nao se trata apenas de ter dados, mas de transformar informacoes estruturadas em decisoes estrategicas que geram resultados reais.\n\n## O Desafio da Sobrecarga de Informacao\n\nVivemos em uma epoca onde dados sao gerados constantemente. Mas ter dados nao significa ter conhecimento. O verdadeiro desafio esta em filtrar, analisar e extrair insights significativos dessa montanha de informacoes.\n\nMuitas organizacoes ainda dependem de feeling ou intuicao para tomar decisoes importantes. Isso funciona em pequena escala, mas nao e escalavel nem sustentavel.\n\n## O Caminho para a Democracia Analitica\n\nA democracia analitica significa que TODOS na organizacao tem acesso a dados e podem tomar decisoes baseadas em evidencias, nao apenas os executivos.\n\nIsso requer:\n- Infraestrutura de dados robusta\n- Ferramentas acessiveis para analise\n- Cultura de questionamento e validacao\n- Treinamento em literacia de dados\n\n## Conclusao\n\nA Era da Decisao nao e sobre tecnologia. E sobre pessoas, processos e cultura. Quando alinhados, transformam dados em poder real de negocio.",
  
  2: "Portugues para Concursos nao precisa ser complicado. Este guia apresenta as regras essenciais que aparecem em 90% das provas de nivel medio.\n\n## Ortografia Essencial\n\n### Uso de S, SS, C e CC\n- Palavras terminadas em -oso: gracioso, generoso\n- Palavras com -ssao: discussao, impressao\n- Palavras com -acao: criacao, recepcao\n\n### Acentuacao\n- Proparoxitonas: SEMPRE levam acento (criatura, vantagem)\n- Paroxitonas: levam acento em casos especificos (onibus, taxi)\n- Oxitonas: levam acento em terminacoes especificas (-a, -e, -o)\n\n## Novo Acordo Ortografico\n\nO novo acordo de 1990 trouxe mudancas importantes:\n- Eliminacao do trema em palavras como linguistica\n- Mudancas em palavras com hifen\n- Simplificacao de algumas acentuacoes\n\n## Dicas Praticas para Provas\n\n1. Leia o texto completo antes de responder\n2. Procure por palavras-chave que indicam a resposta\n3. Elimine opcoes obviamente erradas\n4. Quando em duvida, escolha a opcao mais formal\n\n## Conclusao\n\nDominando essas regras basicas, voce estara preparado para a maioria das questoes de Portugues em concursos publicos.",
  
  3: "A comunicacao e uma habilidade fundamental no mundo profissional. Mas muitos nao entendem que ela vai muito alem de falar bem.\n\n## Os Tres Niveis da Comunicacao\n\n### 1. Comunicacao Verbal\nE o que voce diz. As palavras, o vocabulario, a clareza da mensagem. Uma mensagem verbal clara e concisa e fundamental.\n\n### 2. Comunicacao Vocal\nE COMO voce diz. Tom de voz, ritmo, entonacao, volume. Uma mesma frase pode ter significados completamente diferentes dependendo de como e dita.\n\n### 3. Comunicacao Corporal\nE o que seu corpo transmite. Postura, gestos, contato visual, expressao facial. Estudos mostram que 55% da comunicacao e corporal.\n\n## Os 6 Elementos do Processo Comunicativo\n\n1. Emissor: quem comunica\n2. Mensagem: o conteudo\n3. Canal: o meio (presencial, video, texto)\n4. Receptor: quem recebe\n5. Feedback: resposta do receptor\n6. Ruido: interferencias na comunicacao\n\n## Feedback Construtivo\n\nFeedback nao e critica. E um presente que voce oferece para ajudar alguem a melhorar.\n\nUm bom feedback:\n- E especifico (nao generico)\n- E timely (no momento certo)\n- E equilibrado (reconhece pontos fortes e areas de melhoria)\n- E actionable (oferece caminhos para melhorar)\n\n## Conclusao\n\nDominando esses elementos, voce se torna um comunicador eficaz em qualquer contexto.",
  
  4: "A cultura analitica nao e um destino, e uma jornada. E a evolucao de uma organizacao que passa de decisoes baseadas em intuicao para decisoes baseadas em dados.\n\n## Do Feeling para a Evidencia\n\nMuitos lideres ainda confiam em seu feeling ou intuicao. E verdade que experiencia importa, mas sem dados para validar, as decisoes sao arriscadas.\n\nA transicao para uma cultura analitica requer:\n- Mudanca de mentalidade\n- Investimento em tecnologia\n- Desenvolvimento de competencias\n- Lideranca comprometida\n\n## O Papel da IA & Data Science\n\nInteligencia Artificial e Data Science nao sao buzzwords. Sao ferramentas reais que:\n- Identificam padroes que humanos nao veem\n- Automatizam processos repetitivos\n- Predizem tendencias futuras\n- Otimizam recursos\n\n## Democracia Analitica\n\nNao e apenas sobre ter dados. E sobre DEMOCRATIZAR o acesso a dados.\n\nQuando todos na organizacao entendem dados e podem tomar decisoes baseadas em evidencias, a organizacao se torna mais agil, mais inteligente e mais competitiva.\n\n## Conclusao\n\nA cultura analitica e o diferencial competitivo do seculo 21. Organizacoes que nao evoluem nesse sentido ficam para tras.",
  
  5: "Oratoria e Retorica sao disciplinas complementares que, juntas, criam comunicadores verdadeiramente persuasivos.\n\n## Retorica: A Estrategia do Discurso\n\nRetorica e a arte de persuadir atraves da linguagem. Ela estuda:\n- Como estruturar argumentos\n- Como usar figuras de linguagem\n- Como apelar para emocoes e razao\n- Como construir credibilidade\n\n## Oratoria: A Performance do Orador\n\nOratoria e a arte de falar em publico com impacto. Ela trabalha:\n- Respiracao e projecao de voz\n- Linguagem corporal\n- Gestao do nervosismo\n- Conexao com a audiencia\n\n## Os Tres Pilares de Aristoteles\n\n### 1. Ethos (Credibilidade)\nAs pessoas acreditam em quem tem credibilidade. Voce precisa demonstrar que sabe do que esta falando e que e digno de confianca.\n\n### 2. Pathos (Emocao)\nAs pessoas sao movidas por emocoes. Uma apresentacao que toca o coracao e mais memoravel que uma cheia de dados.\n\n### 3. Logos (Logica)\nMas a emocao sozinha nao basta. Voce precisa de argumentos logicos e evidencias para sustentar sua mensagem.\n\n## Pratica e Persistencia\n\nNinguem nasce orador. Oratoria e Retorica sao habilidades que se desenvolvem com pratica constante.\n\nComece pequeno, apresente para amigos, grave videos, participe de grupos de discussao. Cada apresentacao e uma oportunidade de aprender.\n\n## Conclusao\n\nQuem domina Oratoria e Retorica tem um superpoder no mundo profissional. Consegue influenciar, persuadir e inspirar pessoas. E essa e uma habilidade que nunca sai de moda."
};

const articles = [
  {
    id: 1,
    title: "A Era da Decisao: Transformando Dados em Poder de Negocio",
    excerpt: "Descubra como transformar dados estruturados em decisoes estrategicas. Explore o desafio da sobrecarga de informacao e o caminho para a democracia analitica.",
    category: "Analise de Dados",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "8 min"
  },
  {
    id: 2,
    title: "Guia de Portugues para Concursos: Domine o Basico em 30 Dias",
    excerpt: "Resumo visual das regras gramaticais essenciais para concursos publicos de nivel medio. Ortografia, pontuacao e novo acordo ortografico explicados de forma pratica.",
    category: "Portugues",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg",
    readTime: "10 min"
  },
  {
    id: 3,
    title: "Domine a Arte da Comunicacao: Do Basico ao Profissional",
    excerpt: "Fundamentos essenciais da comunicacao: verbal, vocal e corporal. Aprenda os 6 elementos do processo comunicativo e tecnicas de feedback construtivo.",
    category: "Comunicacao",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "12 min"
  },
  {
    id: 4,
    title: "O Poder da Cultura Analitica: Do Feeling a Inteligencia Artificial",
    excerpt: "Entenda como evoluir de decisoes baseadas em intuicao para uma cultura analitica. Explore a democracia analitica e o papel da IA & Data Science.",
    category: "Estrategia",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/OFZoOIzVaqnZzPsk.jpg",
    readTime: "9 min"
  },
  {
    id: 5,
    title: "Oratoria & Retorica: A Arte de Cativar Pessoas",
    excerpt: "Fundamentos da comunicacao persuasiva unindo estrategia do discurso (Retorica) com performance do orador (Oratoria). Os tres pilares de Aristoteles aplicados.",
    category: "Oratoria",
    author: "AUREA COMMKT",
    date: "2026-02-08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030713898/AvnZmyNrFlhmFzrS.jpg",
    readTime: "11 min"
  }
];

const categories = ["Todos", "Analise de Dados", "Portugues", "Comunicacao", "Estrategia", "Oratoria"];

export default function Blog() {
  const [, navigate] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Blog AUREA
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Artigos, insights e guias praticos sobre comunicacao, marketing, analise de dados e desenvolvimento profissional.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 md:py-12 border-b border-gray-200">
        <div className="container mx-auto px-4">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? "text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                style={selectedCategory === category ? { backgroundColor: "#D4AF37" } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden border border-gray-200"
                >
                  {/* Article Image */}
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
                        style={{ backgroundColor: "#D4AF37" }}
                      >
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-gray-600 mb-4 pb-4 border-b border-gray-200">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(article.date).toLocaleDateString("pt-BR")}
                      </div>
                      <div className="flex items-center gap-1">
                        <span>⏱️ {article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <Button
                      onClick={() => setSelectedArticle(article)}
                      className="w-full text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2"
                      style={{ backgroundColor: "#D4AF37" }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
                    >
                      Ler Artigo
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                Nenhum artigo encontrado. Tente outra busca ou categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quer aprofundar seus conhecimentos?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Conheca nossos cursos especializados em comunicacao, marketing e desenvolvimento profissional.
          </p>
          <Button
            onClick={() => navigate('/produtos')}
            className="text-white px-8 py-3 text-lg rounded-lg transition"
            style={{ backgroundColor: "#D4AF37" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
          >
            Descubra Nossos Cursos
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full my-8">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
              <div className="flex-1 pr-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full mb-3" style={{ backgroundColor: "#D4AF37" }}>
                  {selectedArticle.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900">{selectedArticle.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mt-3 flex-wrap">
                  <span>{selectedArticle.author}</span>
                  <span>{new Date(selectedArticle.date).toLocaleDateString("pt-BR")}</span>
                  <span>⏱️ {selectedArticle.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="text-gray-500 hover:text-gray-700 transition flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="h-64 overflow-hidden bg-gray-200">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {selectedArticle && articleContent[selectedArticle.id as keyof typeof articleContent]?.split('\n\n').map((paragraph: string, idx: number) => {
                if (paragraph.startsWith('##')) {
                  return (
                    <h3 key={idx} className="text-xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('###')) {
                  return (
                    <h4 key={idx} className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('-')) {
                  return (
                    <ul key={idx} className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                      {paragraph.split('\n').map((item: string, i: number) => (
                        <li key={i} className="text-gray-700">{item.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50 sticky bottom-0">
              <Button
                onClick={() => setSelectedArticle(null)}
                className="w-full text-white font-medium py-3 rounded-lg transition"
                style={{ backgroundColor: "#D4AF37" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#C99E2E"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#D4AF37"}
              >
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
