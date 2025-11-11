import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

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

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};
