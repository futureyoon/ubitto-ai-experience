import experienceImage from "@/assets/experience-learning.jpg";

export const ProductOverview = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What is Ubitto?</h2>
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
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
