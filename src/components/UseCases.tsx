import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";

const allCases = [
  {
    title: "Individual Tutors",
    before: "Time-consuming class prep and grading",
    after: "AI provides automatic grading and feedback",
    delta: "42% reduction in operational time",
  },
  {
    title: "Self-Paced Programs",
    before: "Students miss out due to fixed schedule conflicts",
    after: "Learn Korean at your own pace with on-demand instructor support",
    delta: "60% improvement in completion rates",
  },
  {
    title: "Live Group Classes",
    before: "Challenging to manage multiple students simultaneously",
    after: "Real-time analytics and group performance dashboards",
    delta: "35% increase in class engagement",
  },
  {
    title: "1-on-1 Private Tutoring",
    before: "Manual scheduling and payment processing",
    after: "Integrated booking and payment system",
    delta: "50% reduction in administrative time",
  },
  {
    title: "Experience Makers",
    before: "Cumbersome booking and review management",
    after: "Manage booking, reviews, and promotion in one system",
    delta: "2x increase in bookings",
  },
  {
    title: "Small Academies",
    before: "Scattered instructor management and reports",
    after: "Centralized reports and learning trend analysis",
    delta: "18% increase in re-enrollment",
  },
  {
    title: "Schools (Korean as 2nd Language)",
    before: "Limited resources for individualized feedback",
    after: "AI-powered personalized learning paths for each student",
    delta: "45% improvement in test scores",
  },
  {
    title: "Language Institutes",
    before: "Complex multi-level class management",
    after: "Automated level assessment and class grouping",
    delta: "30% increase in student satisfaction",
  },
  {
    title: "Corporate Training Programs",
    before: "Difficulty tracking ROI and employee progress",
    after: "Comprehensive analytics and performance reporting",
    delta: "3x faster skill acquisition",
  },
  {
    title: "Corporate HRDC Programs",
    before: "Complex HRDC fund claim processes and manual tracking",
    after: "Automated HRDC claims with integrated skill enhancement tracking",
    delta: "Streamlined compliance driving long-term talent development",
  },
];

export const UseCases = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [cases, setCases] = React.useState(allCases);

  React.useEffect(() => {
    // Shuffle cases on mount
    const shuffled = [...allCases].sort(() => Math.random() - 0.5);
    setCases(shuffled);
  }, []);

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Use Cases</h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: Math.ceil(cases.length / 6) }).map((_, pageIndex) => (
              <CarouselItem key={pageIndex}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cases.slice(pageIndex * 6, (pageIndex + 1) * 6).map((useCase, index) => (
                    <Card key={index} className="p-6 transition-all duration-300 hover:scale-105">
                      <h3 className="text-xl font-bold mb-4 text-primary">{useCase.title}</h3>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">Before</p>
                          <p className="text-sm text-foreground">{useCase.before}</p>
                        </div>

                        <ArrowRight className="w-5 h-5 text-primary mx-auto" />

                        <div>
                          <p className="text-xs font-semibold text-muted-foreground mb-1">After</p>
                          <p className="text-sm text-foreground">{useCase.after}</p>
                        </div>

                        <div className="pt-3 border-t">
                          <p className="text-lg font-bold text-accent">{useCase.delta}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        
        <CarouselDots api={api} />
      </div>
    </section>
  );
};
