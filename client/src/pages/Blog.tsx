import { useState } from "react";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

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
    </div>
  );
}
