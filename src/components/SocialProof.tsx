import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    name: "Jane K.",
    role: "Tutor",
    quote: "AI reports cut my feedback time in half.",
  },
  {
    name: "Ali M.",
    role: "Learner",
    quote: "Seeing my weaknesses clearly makes learning so efficient.",
  },
  {
    name: "Hana Studio",
    role: "Institute",
    quote: "The team-level reporting feature is outstanding.",
  },
  {
    name: "Michael Chen",
    role: "Self-Paced Student",
    quote: "The automated progress tracking keeps me motivated and on track.",
  },
  {
    name: "Sarah Park",
    role: "Group Class Instructor",
    quote: "Managing 20+ students has never been this easy. Real-time insights are game-changing.",
  },
  {
    name: "David Kim",
    role: "Private Tutor",
    quote: "The booking system freed up hours of my week. I can focus on teaching now.",
  },
  {
    name: "Emma Wilson",
    role: "Experience Maker",
    quote: "Bookings doubled after joining Ubitto. The visibility is incredible.",
  },
  {
    name: "Seoul International School",
    role: "Institution",
    quote: "Our Korean language program has transformed with AI-powered personalization.",
  },
  {
    name: "James Lee",
    role: "Corporate Trainer",
    quote: "The analytics help us prove ROI to management. Student progress is crystal clear.",
  },
  {
    name: "Maria Rodriguez",
    role: "Language Institute Director",
    quote: "Student satisfaction scores jumped 30% since we started using Ubitto.",
  },
];

export const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Educator & Learner Reviews</h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-lg font-semibold ml-2">4.8</span>
            <span className="text-muted-foreground ml-2">1,200+ Reviews</span>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-8 h-full hover:shadow-lg transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{review.quote}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};
