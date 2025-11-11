import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "개인 튜터",
    before: "수업 준비·채점에 많은 시간 소요",
    after: "AI가 자동 채점·피드백 제공",
    delta: "운영 시간 42% 절감",
  },
  {
    title: "소형 학원",
    before: "강사별 관리와 리포트 분산",
    after: "중앙 리포트와 학습 경향 분석",
    delta: "재등록률 18% 향상",
  },
  {
    title: "체험 교육자",
    before: "예약·후기 관리 번거로움",
    after: "한 시스템에서 예약·후기·홍보 관리",
    delta: "예약 2배 증가",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">활용 사례</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((useCase, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{useCase.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Before</p>
                  <p className="text-foreground">{useCase.before}</p>
                </div>

                <ArrowRight className="w-6 h-6 text-primary mx-auto" />

                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-2">After</p>
                  <p className="text-foreground">{useCase.after}</p>
                </div>

                <div className="pt-4 border-t">
                  <p className="text-xl font-bold text-accent">{useCase.delta}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
