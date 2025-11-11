import { Button } from "@/components/ui/button";
import experienceImage from "@/assets/experience-learning.jpg";

export const ExperienceLearning = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img 
              src={experienceImage} 
              alt="Cultural Experience Learning"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>

          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beyond the Screen:<br />Experience Learning
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              From kimchi-making to folk games — real-world experiences that deepen connection and understanding.
            </p>
            <Button size="lg" variant="accent" asChild>
              <a href="/for-experience-makers">Join as Experience Maker</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
