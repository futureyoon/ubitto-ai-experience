import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Gradient Background with Wave Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary animate-wave" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-secondary/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-up">
          Join the Movement in Smart Learning
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button size="lg" variant="ctaPrimary" asChild>
            <a href="/for-educators">I'm an Educator</a>
          </Button>
          <Button size="lg" variant="ctaSecondary" asChild>
            <a href="/for-learners">I'm a Learner</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
