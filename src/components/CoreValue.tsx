import { Clock, Target, DollarSign, Merge, Brain, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const problems = [
  { icon: Clock, title: "Complex Operations", desc: "Scattered tools lead to time-consuming class prep and management" },
  { icon: Target, title: "Difficult Personalization", desc: "Hard to identify learner weaknesses in real-time" },
  { icon: DollarSign, title: "Monetization Challenges", desc: "Booking, payment, and feedback operate separately" },
  { icon: Clock, title: "Motivation Issues", desc: "Keeping learners motivated is a constant challenge for teachers" },
  { icon: Target, title: "Scattered Tools", desc: "Teachers juggle multiple apps for quizzes, progress tracking, and student management" },
  { icon: DollarSign, title: "Inflexible Schedule", desc: "Teachers need flexible options to teach at their free time" },
];

const solutions = [
  { icon: Merge, title: "Unified Platform", desc: "Operations, analytics, teaching, payment, community — all in one place" },
  { icon: Brain, title: "AI-Powered Diagnostics", desc: "Identify learner weaknesses in real-time with automated feedback" },
  { icon: Megaphone, title: "Enhanced Visibility", desc: "Boost educator and program visibility & conversion rates" },
];

export const CoreValue = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Problems Ubitto Solves
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-destructive">Problems</h3>
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
            <h3 className="text-2xl font-bold mb-8 text-primary">Solutions</h3>
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
