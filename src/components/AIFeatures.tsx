import { Brain, Radar, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Smart Speaking Quizzes",
    description: "Speech-recognition quizzes that evaluate pronunciation and fluency instantly.",
  },
  {
    icon: Radar,
    title: "Skill Radar Analytics",
    description: "Radar graph visualizes learners' performance across key language skills.",
  },
  {
    icon: Sparkles,
    title: "AI Feedback Engine",
    description: "Generate personalized learner feedback automatically, saving hours of manual grading.",
  },
];

export const AIFeatures = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI that Supports Real Teaching
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance how you teach, assess, and grow learners — powered by AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors group-hover:animate-glow">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
