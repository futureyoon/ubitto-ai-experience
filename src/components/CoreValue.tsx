import { Clock, Target, DollarSign, Merge, Brain, Megaphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const problems = [
  { icon: Target, title: "Scattered Tools & Complex Operations", desc: "Teachers juggle multiple apps for quizzes, progress tracking, student management, and class prep" },
  { icon: Brain, title: "Difficult Personalization", desc: "Hard to identify learner weaknesses and provide personalized feedback in real-time" },
  { icon: DollarSign, title: "Monetization Challenges", desc: "Booking, payment, and feedback systems operate separately, creating friction" },
  { icon: Clock, title: "Inflexible Scheduling & Motivation", desc: "Teachers need flexible teaching options while keeping learners consistently engaged" },
];

const solutions = [
  { icon: Merge, title: "Unified All-in-One Platform", desc: "Operations, analytics, teaching, payment, quizzes, and progress tracking — all consolidated in one place" },
  { icon: Brain, title: "AI-Powered Diagnostics & Gamification", desc: "Real-time learner weakness identification with gamified quizzes that keep students engaged and motivated" },
  { icon: Megaphone, title: "Enhanced Visibility & Conversion", desc: "Boost educator and program visibility with integrated marketing tools and higher conversion rates" },
  { icon: Clock, title: "Flexible Automated Scheduling", desc: "Set your own schedule and teach at your convenience with automated booking and notifications" },
];

export const CoreValue = () => {
  const [visibleCards, setVisibleCards] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInView) {
        const currentScrollY = window.scrollY;
        const scrollDiff = Math.abs(currentScrollY - lastScrollY.current);

        // Show first card when section enters view
        if (visibleCards === 0) {
          setVisibleCards(1);
          lastScrollY.current = currentScrollY;
        }
        // Show next card after scrolling ~100px
        else if (scrollDiff > 100 && visibleCards < problems.length) {
          setVisibleCards(prev => Math.min(prev + 1, problems.length));
          lastScrollY.current = currentScrollY;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCards]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-32 left-0 w-[500px] h-[500px] bg-destructive/3 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Problems uBitto Solves
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-destructive">Problems</h3>
            <div className="space-y-6">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                const isCardVisible = index < visibleCards;
                return (
                  <Card 
                    key={index} 
                    className={`p-6 bg-destructive/5 transition-all duration-700 ${
                      isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
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
                const isCardVisible = index < visibleCards;
                return (
                  <Card 
                    key={index} 
                    className={`p-6 bg-primary/5 transition-all duration-700 ${
                      isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
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
