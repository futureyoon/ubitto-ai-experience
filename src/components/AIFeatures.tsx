import { Mic, Radar, Calendar, BarChart3, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "AI 음성 분석",
    description: "발음·억양·유창성 실시간 평가",
  },
  {
    icon: Radar,
    title: "스킬 레이더",
    description: "Listening, Expression, Vocabulary, Grammar, Reading, Writing 시각화",
  },
  {
    icon: Calendar,
    title: "예약·결제·알림 일체형",
    description: "스케줄 관리와 결제 및 알림을 자동화",
  },
  {
    icon: BarChart3,
    title: "학습 리포트",
    description: "AI 분석으로 학습 진행을 한눈에 파악",
  },
  {
    icon: Zap,
    title: "과제 및 퀴즈 자동화",
    description: "AI가 채점하고 피드백을 제시",
  },
  {
    icon: Users,
    title: "커뮤니티 기능",
    description: "그룹, 피드, 메시지로 학습자와 소통",
  },
];

const specs = [
  { item: "음성 분석", support: "실시간 STT 및 정확도 점수 제공" },
  { item: "역할 분리", support: "Educator / Learner / Institute 관리 구조" },
  { item: "예약·결제", support: "통합형 예약 및 결제, 다중 통화 지원" },
  { item: "리포트", support: "웹 보기, 공유 링크, PDF 내보내기" },
  { item: "보안", support: "암호화 결제, 접근 권한 제어, 로그 관리" },
  { item: "국제화", support: "한국어 / 영어 지원 (확장 가능)" },
];

export const AIFeatures = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">핵심 기능</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Specs Table */}
        <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-up">
          <h3 className="text-2xl font-bold mb-6">기술 사양</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">항목</th>
                  <th className="text-left py-3 px-4 font-semibold">지원</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 px-4 font-medium">{spec.item}</td>
                    <td className="py-3 px-4 text-muted-foreground">{spec.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
