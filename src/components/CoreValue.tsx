import { Clock, Target, DollarSign, Merge, Brain, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  { icon: Clock, title: "운영이 복잡", desc: "툴이 분산되어 수업 준비와 관리에 시간 소요" },
  { icon: Target, title: "개인화 어려움", desc: "학습자의 약점을 실시간으로 파악하기 어려움" },
  { icon: DollarSign, title: "수익화 난관", desc: "예약, 결제, 피드백이 따로 운영됨" },
];

const solutions = [
  { icon: Merge, title: "하나로 통합된 플랫폼", desc: "운영, 분석, 수업, 결제, 커뮤니티까지 한 곳에서" },
  { icon: Brain, title: "AI 맞춤 진단", desc: "학습자의 약점을 실시간 파악하고 자동 피드백 제공" },
  { icon: Megaphone, title: "노출 강화", desc: "교사와 프로그램의 가시성·전환율 향상" },
];

export const CoreValue = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ubitto가 해결하는 문제
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-destructive">문제점</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <Card key={index} className="p-6 border-destructive/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{problem.title}</h4>
                        <p className="text-sm text-muted-foreground">{problem.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary">해결책</h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Card key={index} className="p-6 border-primary/20">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{solution.title}</h4>
                        <p className="text-sm text-muted-foreground">{solution.desc}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
