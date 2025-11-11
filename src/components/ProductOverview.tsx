import experienceImage from "@/assets/experience-learning.jpg";
import { WaveDivider } from "./WaveDivider";
import { CircleDecoration } from "./CircleDecoration";

export const ProductOverview = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Wave Divider Top */}
      <WaveDivider className="absolute top-0 left-0 right-0" color="primary" />
      
      {/* Decorative Elements */}
      <CircleDecoration className="top-20 right-10 blur-3xl" size="xl" color="primary" opacity={5} />
      <CircleDecoration className="bottom-20 left-10 blur-3xl" size="lg" color="accent" opacity={8} />
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-accent/30 animate-float" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-primary/40 animate-float-delay" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What is uBitto?</h2>
          <p className="text-xl text-muted-foreground">
            An AI-powered education platform where educators and learners grow together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                Class preparation and grading are automated with AI diagnostics and feedback.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                Booking, payment, and notifications work seamlessly in one system.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                Radar charts visualize learner strengths and weaknesses.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img 
              src={experienceImage} 
              alt="Platform Overview"
              className="rounded-2xl shadow-[0_12px_48px_hsl(211_89%_34%_/_0.15)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
