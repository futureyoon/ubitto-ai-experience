import { Search, Map, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const modules = [
  { icon: Search, label: "Find Teachers", href: "/for-learners#find-teacher" },
  { icon: Map, label: "Browse Experiences", href: "/for-experience-makers#browse" },
  { icon: Calendar, label: "Book Now", href: "/for-learners#booking" },
];

export const LearnerConnection = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Connecting with Learners</h2>
          <p className="text-xl text-muted-foreground">
            Teachers, academies, and experience educators meet learners in one space.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center transition-all duration-300 hover:scale-105 animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{module.label}</h3>
                <Button variant="outline" asChild>
                  <a href={module.href}>Get Started</a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
