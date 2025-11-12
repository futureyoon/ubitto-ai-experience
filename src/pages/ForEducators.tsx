import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, BookOpen, TrendingUp, Sparkles, Target } from "lucide-react";
import educatorDashboard from "@/assets/educator-dashboard.png";

const ForEducators = () => {
  const benefits = [
    {
      icon: Users,
      title: "Connect with Eager Learners",
      description: "Reach students from around the world who are passionate about learning Korean."
    },
    {
      icon: BookOpen,
      title: "AI-Powered Teaching Tools",
      description: "Use cutting-edge AI to create personalized lessons and track student progress effortlessly."
    },
    {
      icon: TrendingUp,
      title: "Grow Your Income",
      description: "Set your own rates and expand your teaching practice with flexible scheduling options."
    },
    {
      icon: Sparkles,
      title: "Community Support",
      description: "Join a vibrant community of educators sharing resources and best practices."
    },
    {
      icon: Target,
      title: "Proven Methodology",
      description: "Access our experience-based curriculum designed for effective language acquisition."
    }
  ];

  const features = [
    "Automated lesson planning with AI assistance",
    "Real-time student progress tracking",
    "Interactive virtual classroom tools",
    "Resource library with 1000+ teaching materials",
    "Built-in scheduling and payment management",
    "Professional development workshops",
    "Peer mentorship program",
    "Marketing support to grow your student base"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Empower Your Teaching Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join uBitto's community of passionate Korean language educators. Leverage AI technology 
                and experience-based learning to inspire the next generation of Korean speakers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#membership">Start Teaching Today</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#features">Explore Features</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Free to join</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>Set your own rates</span>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src={educatorDashboard} 
                alt="Educator dashboard showing teaching tools and student analytics"
                className="rounded-2xl shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Educators Choose uBitto</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create engaging learning experiences and grow your teaching practice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <benefit.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Powerful Tools at Your Fingertips</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform is designed by educators, for educators. Every feature is built to 
                save you time and help your students succeed.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl mb-2">Educator Success Story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  "uBitto transformed my teaching practice. The AI tools help me create personalized 
                  lessons in minutes, and I've grown my student base by 300% in just 6 months. The 
                  community support is incredible!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-lg font-semibold text-primary">JK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ji-won Kim</p>
                    <p className="text-sm text-muted-foreground">Korean Teacher, Seoul</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="membership" className="py-20 px-6 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Lives Through Teaching?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of educators who are making a difference with uBitto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#signup">Create Educator Account</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Schedule a Demo</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            No credit card required • Free onboarding support • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEducators;
