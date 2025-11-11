import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-up">
          Get Started Now
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button size="lg" variant="ctaPrimary" asChild>
            <a href="/for-educators">Join as Educator</a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href="/for-learners">Join as Learner</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
