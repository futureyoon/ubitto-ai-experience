import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
import { WaveDivider } from "@/components/WaveDivider";

export const VideoDemo = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-muted/20 to-background">
      <CircleDecoration className="top-10 -right-32" size="xl" color="accent" opacity={5} />
      <CircleDecoration className="bottom-10 -left-32" size="lg" opacity={5} />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See uBitto in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how AI transforms language learning with real-time pronunciation feedback, 
            automated grading, and personalized growth tracking
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl animate-fade-up">
          <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group cursor-pointer">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" />
              </div>
              <p className="text-white font-semibold text-lg md:text-xl drop-shadow-lg">
                Watch Platform Overview (2:30)
              </p>
            </div>

            {/* Replace this div with your actual video embed, for example: */}
            {/* <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="uBitto Platform Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="p-6 text-center animate-fade-up">
            <div className="text-4xl font-bold text-primary mb-2">AI-Powered</div>
            <p className="text-muted-foreground">Real-time pronunciation & grammar analysis</p>
          </Card>
          <Card className="p-6 text-center animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-4xl font-bold text-primary mb-2">Automated</div>
            <p className="text-muted-foreground">Instant quiz grading & feedback</p>
          </Card>
          <Card className="p-6 text-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-primary mb-2">Integrated</div>
            <p className="text-muted-foreground">All-in-one teaching & learning platform</p>
          </Card>
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 right-0" flip color="muted" />
    </section>
  );
};
