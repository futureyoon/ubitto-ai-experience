import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import learnerDashboard from "@/assets/learner-dashboard.png";
import educatorDashboard from "@/assets/educator-dashboard.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-accent/35" />
      </div>

      {/* Floating UI Mockups */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img 
          src={learnerDashboard} 
          alt="Learner Dashboard"
          className="absolute top-1/4 right-[10%] w-[35%] max-w-md rounded-lg shadow-2xl animate-float opacity-90 hidden md:block"
        />
        <img 
          src={educatorDashboard} 
          alt="Educator Dashboard"
          className="absolute top-1/3 left-[8%] w-[35%] max-w-md rounded-lg shadow-2xl animate-float-delay opacity-90 hidden md:block"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-up">
          Empowering Educators.<br />Inspiring Learners.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up max-w-2xl mx-auto">
          Ubitto blends AI, community, and experience to redefine how Korean is taught and learned.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <Button size="lg" variant="hero" asChild>
            <a href="/for-educators">For Educators</a>
          </Button>
          <Button size="lg" variant="heroOutline" asChild>
            <a href="/for-learners">For Learners</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
