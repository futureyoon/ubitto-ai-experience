import experienceImage from "@/assets/experience-learning.jpg";

export const ProductOverview = () => {
  return (
    <section className="relative py-24 px-6 bg-background overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
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
              className="rounded-3xl shadow-[0_12px_48px_hsl(211_89%_34%_/_0.15)] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
