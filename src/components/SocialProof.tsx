import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
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
  {
    name: "Rachel Thompson",
    role: "Online Tutor",
    quote: "The payment integration is seamless. I get paid on time, every time.",
  },
  {
    name: "Kevin Wong",
    role: "Music Teacher",
    quote: "My students love the interactive quizzes. Engagement has never been higher.",
  },
  {
    name: "Sophia Martinez",
    role: "IELTS Instructor",
    quote: "The AI feedback helps my students improve faster than traditional methods.",
  },
  {
    name: "Tokyo Language Center",
    role: "Academy",
    quote: "We scaled from 50 to 200 students without hiring more admin staff.",
  },
  {
    name: "Chris Anderson",
    role: "Corporate L&D Manager",
    quote: "HRDC claims are now automated. This alone saved us 15 hours per month.",
  },
  {
    name: "Lisa Chang",
    role: "Art Workshop Leader",
    quote: "The scheduling feature eliminated double bookings completely.",
  },
  {
    name: "Ahmed Hassan",
    role: "Math Tutor",
    quote: "Parents love the detailed progress reports. My retention rate is now 95%.",
  },
  {
    name: "Nina Patel",
    role: "Yoga Instructor",
    quote: "From booking to payment to feedback - everything is in one place. Life-changing.",
  },
  {
    name: "Singapore Skills Institute",
    role: "Training Center",
    quote: "The platform paid for itself in the first month through increased bookings.",
  },
  {
    name: "Tom Bradley",
    role: "Coding Bootcamp Instructor",
    quote: "My students see their progress visually. It keeps them motivated through tough concepts.",
  },
];

export const SocialProof = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
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
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: Math.ceil(reviews.length / 4) }).map((_, pageIndex) => (
              <CarouselItem key={pageIndex}>
                <div className="grid md:grid-cols-2 gap-8">
                  {reviews.slice(pageIndex * 4, (pageIndex + 1) * 4).map((review, index) => (
                    <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-base mb-4 italic">"{review.quote}"</p>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.role}</p>
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
