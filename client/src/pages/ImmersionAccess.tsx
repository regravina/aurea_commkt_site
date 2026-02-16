import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Play, FileText, Award, ArrowLeft, Lock, Unlock } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/_core/hooks/useAuth";

interface ImmersionDay {
  day: number;
  title: string;
  description: string;
  videoUrl: string;
  ebookUrl: string;
  prezilLink: string;
  duration: string;
  status: "available" | "locked";
}

const IMMERSION_DAYS: ImmersionDay[] = [
  {
    day: 1,
    title: "Fundamentos da IA - Desmistificando o Futuro",
    description: "Entenda os conceitos básicos de IA, como funciona e os mitos que cercam a tecnologia.",
    videoUrl: "https://drive.google.com/file/d/13x3_0ypaHg9x9MmuEJVQvOJZH_cD-FDU/view?usp=sharing",
    ebookUrl: "#", // Will be replaced with actual S3 URL
    prezilLink: "#",
    duration: "45 min",
    status: "available",
  },
  {
    day: 2,
    title: "O Guia Prático de Ferramentas de IA",
    description: "Explore as principais ferramentas de IA disponíveis: ChatGPT, Claude, MANUS e outras.",
    videoUrl: "https://drive.google.com/file/d/17DaT-5uzwLR4s5J-y87VbH9JducfeVSQ/view?usp=sharing",
    ebookUrl: "#",
    prezilLink: "#",
    duration: "50 min",
    status: "available",
  },
  {
    day: 3,
    title: "IA para Negócios - Casos de Sucesso",
    description: "Descubra como empresas estão usando IA para aumentar vendas e eficiência.",
    videoUrl: "https://drive.google.com/file/d/17IQ-pJj16OQ-WG0_6qT45zhbAMEZztes/view?usp=sharing",
    ebookUrl: "#",
    prezilLink: "#",
    duration: "55 min",
    status: "available",
  },
  {
    day: 4,
    title: "Seu Primeiro Projeto de IA",
    description: "Aprenda a criar seu primeiro projeto prático usando IA passo a passo.",
    videoUrl: "https://drive.google.com/file/d/1U24hcyMid44DsWqhdZ2b2MaX7utcuUvG/view?usp=sharing",
    ebookUrl: "#",
    prezilLink: "#",
    duration: "60 min",
    status: "available",
  },
  {
    day: 5,
    title: "Monetização e Escalabilidade",
    description: "Descubra como monetizar seus projetos de IA e escalar para o próximo nível.",
    videoUrl: "https://drive.google.com/file/d/1Ztvl_qxhZ7kSvs89mIIkyEyPjutCI-x7/view?usp=sharing",
    ebookUrl: "#",
    prezilLink: "#",
    duration: "50 min",
    status: "available",
  },
];

export default function ImmersionAccess() {
  const [, navigate] = useLocation();
  const { user, loading } = useAuth();
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  const userOrdersQuery = trpc.orders.getUserOrders.useQuery(undefined, {
    enabled: !!user,
  });

  useEffect(() => {
    // Check if user has purchased immersion course
    if (userOrdersQuery.data) {
      const hasImmersion = userOrdersQuery.data.some(
        (order) => order.status === "approved" && order.productId === 1 // Adjust product ID as needed
      );
      if (!hasImmersion && !loading) {
        navigate("/checkout/immersion");
      }
    }
  }, [userOrdersQuery.data, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Carregando seu acesso...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Card className="p-8 max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Acesso Restrito</h2>
          <p className="text-slate-600 mb-6">
            Você precisa estar logado para acessar o conteúdo da imersão.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Voltar para Home
          </Button>
        </Card>
      </div>
    );
  }

  const totalDays = IMMERSION_DAYS.length;
  const progressPercentage = (completedDays.length / totalDays) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-3xl font-bold text-slate-900">Minha Imersão IA</h1>
            </div>
            <Award className="w-8 h-8 text-blue-600" />
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-600 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2">
            {completedDays.length} de {totalDays} dias concluídos
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-6">
          {IMMERSION_DAYS.map((day) => (
            <Card
              key={day.day}
              className="p-6 border-slate-200 shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="flex items-start gap-6">
                {/* Day Badge */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Dia {day.day}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{day.title}</h3>
                  <p className="text-slate-600 mb-4">{day.description}</p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <span>⏱️ {day.duration}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {/* Video Button */}
                    <a
                      href={day.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Assistir Vídeo
                    </a>

                    {/* E-book Button */}
                    <a
                      href={day.ebookUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg transition font-medium"
                    >
                      <FileText className="w-4 h-4" />
                      E-book PDF
                    </a>

                    {/* Prezi Button */}
                    <a
                      href={day.prezilLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg transition font-medium"
                    >
                      <Play className="w-4 h-4" />
                      Apresentação Prezi
                    </a>

                    {/* Mark Complete Button */}
                    <button
                      onClick={() => {
                        if (completedDays.includes(day.day)) {
                          setCompletedDays(completedDays.filter((d) => d !== day.day));
                        } else {
                          setCompletedDays([...completedDays, day.day]);
                        }
                      }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium ${
                        completedDays.includes(day.day)
                          ? "bg-green-100 hover:bg-green-200 text-green-700"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      <Award className="w-4 h-4" />
                      {completedDays.includes(day.day) ? "Concluído" : "Marcar como Concluído"}
                    </button>
                  </div>
                </div>

                {/* Status Icon */}
                <div className="flex-shrink-0">
                  {completedDays.includes(day.day) ? (
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <Award className="w-6 h-6 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <Unlock className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}

          {/* Certificate Section */}
          {completedDays.length === totalDays && (
            <Card className="p-8 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
              <div className="text-center">
                <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  🎉 Parabéns! Você Completou a Imersão!
                </h3>
                <p className="text-green-700 mb-6">
                  Você concluiu todos os 5 dias da Imersão IA. Seu certificado está pronto para download.
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Certificado
                </Button>
              </div>
            </Card>
          )}

          {/* Support Section */}
          <Card className="p-6 border-slate-200 bg-slate-50">
            <h3 className="text-lg font-bold text-slate-900 mb-2">Precisa de Ajuda?</h3>
            <p className="text-slate-600 mb-4">
              Se tiver dúvidas sobre o conteúdo ou problemas ao acessar os materiais, entre em contato conosco.
            </p>
            <a
              href="mailto:support@aurea.commkt.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
            >
              Enviar E-mail
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
