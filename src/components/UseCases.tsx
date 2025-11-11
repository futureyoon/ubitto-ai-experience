import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "Individual Tutors",
    before: "Time-consuming class prep and grading",
    after: "AI provides automatic grading and feedback",
    delta: "42% reduction in operational time",
  },
  {
    title: "Small Academies",
    before: "Scattered instructor management and reports",
    after: "Centralized reports and learning trend analysis",
    delta: "18% increase in re-enrollment",
  },
  {
    title: "Experience Educators",
    before: "Cumbersome booking and review management",
    after: "Manage booking, reviews, and promotion in one system",
    delta: "2x increase in bookings",
  },
];

export const UseCases = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
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
