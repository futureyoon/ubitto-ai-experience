import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, Users, Mic, Compass, BarChart3, Users2, MapPin, Bell,
  ListChecks, MicVocal, TrendingUp, Ticket, GraduationCap, Rocket,
  Star
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ForLearners = () => {
  const [activeDemoTab, setActiveDemoTab] = useState<"learner" | "educator">("learner");

  const valueProps = [
    { icon: Mic, title: "AI Speaking & Pronunciation", desc: "Practice speaking and get instant feedback on accuracy and fluency." },
    { icon: Compass, title: "Personalized Learning Path", desc: "Know exactly what to focus on and what to do next." },
    { icon: BarChart3, title: "Progress Radar & Reports", desc: "Visualize your skills across 7 areas and see improvement clearly." },
    { icon: Users2, title: "Real Teachers & Community", desc: "Learn from real educators and get support from peers." },
    { icon: MapPin, title: "Cultural Experiences", desc: "Go beyond textbooks with immersive, real-world activities." },
    { icon: Bell, title: "Reminders & Streaks", desc: "Stay consistent with smart reminders and gentle nudges." }
  ];

  const steps = [
    { step: "1", title: "Choose a Program", desc: "Pick live classes or self-paced courses that match your goals.", icon: ListChecks },
    { step: "2", title: "Practice & Get Feedback", desc: "Use AI speaking checks and assignments to improve faster.", icon: MicVocal },
    { step: "3", title: "Track Progress", desc: "See your growth on the radar and share reports if you want.", icon: TrendingUp }
  ];

  const useCases = [
    { title: "Pronunciation Gains", before: "Unsure if I'm saying it right", after: "Instant corrections and confidence", delta: "+24% speaking score" },
    { title: "Study Clarity", before: "I don't know what to focus on", after: "Clear next steps after each practice", delta: "2× faster improvement" },
    { title: "Consistency", before: "Hard to keep momentum", after: "Streaks and smart reminders keep me on track", delta: "+35% weekly activity" }
  ];

  const testimonials = [
    { name: "Minji P.", role: "Beginner Learner", quote: "I finally know what to fix after each practice — the AI tips are so specific.", rating: 5 },
    { name: "Thomas L.", role: "Business Learner", quote: "Radar charts made my progress visible. It kept me motivated.", rating: 5 },
    { name: "Sara A.", role: "Intermediate Learner", quote: "Real teachers, real feedback, and fun experiences — the combo works.", rating: 5 }
  ];

  const faqs = [
    { q: "How does AI help me learn faster?", a: "You get instant, targeted feedback after speaking and practice tasks, plus suggestions on what to do next." },
    { q: "Can I join classes and also do self-study?", a: "Yes. You can pick live classes with teachers and combine them with AI-powered practice." },
    { q: "Is Premium necessary?", a: "Not required. Free gives you a lot — Premium adds detailed analysis, priority bookings, and member-only events." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Centered Dashboard Showcase */}
      <section className="relative py-16 px-6 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Top Content - Centered */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-6">
              <Sparkles className="w-3 h-3 mr-2" />
              Learner-first Experience
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
              Learn smarter. Grow with confidence.
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Real teachers, AI feedback, and cultural experiences — all connected so you can learn faster and enjoy the journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#membership">Start Free</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#live-demo">Try Live Demo</a>
              </Button>
            </div>
          </div>
          
          {/* Dashboard Preview with Floating Info Cards */}
          <div className="relative max-w-5xl mx-auto animate-fade-in">
            {/* Main Dashboard */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
              <img 
                src="/src/assets/learner-dashboard.png" 
                alt="Learner Dashboard Preview"
                className="w-full"
              />
              {/* Gradient Overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Floating Feature Cards - Top Left */}
            <div className="absolute -top-8 left-8 lg:left-12 animate-fade-in hidden md:block" style={{ animationDelay: '0.2s' }}>
              <Card className="w-56 border-2 shadow-xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">AI Speaking Check</div>
                      <div className="text-xs text-muted-foreground">Instant pronunciation feedback</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating Feature Cards - Top Right */}
            <div className="absolute -top-8 right-8 lg:right-12 animate-fade-in hidden md:block" style={{ animationDelay: '0.3s' }}>
              <Card className="w-56 border-2 shadow-xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">7-Skill Radar</div>
                      <div className="text-xs text-muted-foreground">Track your progress visually</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating Feature Cards - Bottom Left */}
            <div className="absolute -bottom-8 left-8 lg:left-16 animate-fade-in hidden lg:block" style={{ animationDelay: '0.4s' }}>
              <Card className="w-64 border-2 shadow-xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                      <Users2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Real Teachers</div>
                      <div className="text-xs text-muted-foreground">Learn from experienced educators</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating Feature Cards - Bottom Right */}
            <div className="absolute -bottom-8 right-8 lg:right-16 animate-fade-in hidden lg:block" style={{ animationDelay: '0.5s' }}>
              <Card className="w-64 border-2 shadow-xl">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-sm mb-1">Cultural Experiences</div>
                      <div className="text-xs text-muted-foreground">Learn through real activities</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Stats Bar */}
          <div className="mt-24 flex flex-wrap justify-center gap-12 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">20,000+</div>
              <div className="text-sm text-muted-foreground">Active Learners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">24%</div>
              <div className="text-sm text-muted-foreground">Avg. Score Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">7 Skills</div>
              <div className="text-sm text-muted-foreground">Tracked & Improved</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section - Simple Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need to Learn Better
            </h2>
            <p className="text-xl text-muted-foreground">
              Personalized feedback, real guidance, meaningful progress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((prop, index) => {
              const Icon = prop.icon;
              return (
                <div 
                  key={index} 
                  className="group bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/40 transition-all animate-fade-in"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section - Horizontal Steps */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Three steps to learn with clarity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="animate-fade-in">
                  <div className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/40 transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
                      {step.step}
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in order-2 lg:order-1">
              <img 
                src="/src/assets/learner-dashboard.png" 
                alt="7-skill radar analytics"
                className="rounded-2xl shadow-2xl border-2 border-border"
              />
              <p className="text-sm text-muted-foreground mt-4 text-center">
                7-skill radar · auto insights · suggested next steps
              </p>
            </div>
            
            <div className="animate-fade-in order-1 lg:order-2">
              <Badge variant="outline" className="mb-4">
                Analytics
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                See Where You Shine — and What to Improve
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-lg">Track Listening, Expression, Vocabulary, Speaking, Grammar, Reading, Writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-lg">Get targeted suggestions right after practice</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-lg">Export or share your progress report</span>
                </li>
              </ul>
              <p className="text-muted-foreground italic mb-6">
                Learning feels motivating when progress becomes visible.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="#live-demo">View Sample Report</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Strip Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Ticket className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Learn Korean through Real Experiences
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            From kimchi-making to traditional games — discover activities that bring language to life.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/for-experience-makers#browse">Browse Experiences</a>
          </Button>
        </div>
      </section>

      {/* Before/After Use Cases Section - Clean Cards */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Real Progress, Real Stories
            </h2>
            <p className="text-xl text-muted-foreground">
              Before and after learning with Ubitto
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-card rounded-2xl overflow-hidden border-2 border-border hover:border-primary/40 transition-all">
                  {/* Title */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b">
                    <h3 className="text-xl font-bold">{useCase.title}</h3>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    {/* Before */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="text-sm font-semibold text-muted-foreground">Before</span>
                      </div>
                      <p className="text-base">{useCase.before}</p>
                    </div>
                    
                    {/* After */}
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="text-sm font-semibold text-muted-foreground">After</span>
                      </div>
                      <p className="text-base">{useCase.after}</p>
                    </div>
                    
                    {/* Impact */}
                    <div className="pt-4 border-t">
                      <Badge className="bg-primary text-white">
                        {useCase.delta}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Start Free — Upgrade Anytime
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple plans designed for your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary/40 relative animate-fade-in">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Most popular start</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Free</CardTitle>
                <div className="text-4xl font-bold mt-4">$0</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Access to classes and community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Basic AI feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Standard progress dashboard</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" asChild>
                  <a href="/signup?plan=free">Start Free</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/40 transition-all animate-fade-in">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="outline">For faster growth</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Premium</CardTitle>
                <div className="text-4xl font-bold mt-4">Monthly plan</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Advanced AI analysis & detailed reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Priority booking and exclusive events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>Personalized reminders and study suggestions</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full" size="lg" asChild>
                  <a href="/signup?plan=premium">Go Premium</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-8 animate-fade-in">
            You can learn effectively on Free. Premium unlocks deeper insights and priority access.
          </p>
        </div>
      </section>

      {/* Testimonials Section - Simple Cards */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              What Learners Say
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fade-in">
                <div className="bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/40 transition-all">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-base italic text-foreground mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  
                  {/* Profile */}
                  <div className="pt-6 border-t">
                    <div className="font-bold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="live-demo" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Try the Live Demo
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore the learner dashboard instantly
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto animate-fade-in">
            <div className="flex justify-center gap-4 mb-8">
              <Button 
                variant={activeDemoTab === "learner" ? "default" : "outline"}
                onClick={() => setActiveDemoTab("learner")}
              >
                Learner Dashboard
              </Button>
              <Button 
                variant={activeDemoTab === "educator" ? "default" : "outline"}
                onClick={() => setActiveDemoTab("educator")}
              >
                Educator Dashboard
              </Button>
            </div>
            
            <Card className="border-2">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src={activeDemoTab === "learner" 
                      ? "https://dev2.ubitto.com/dashboard/learner-dashboard/"
                      : "https://dev2.ubitto.com/dashboard/educator-dashboard/"
                    }
                    className="w-full h-full"
                    title={`${activeDemoTab} Dashboard Demo`}
                  />
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-muted-foreground text-center mt-4">
              Demo access uses secure temporary tokens. No credentials are exposed.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="animate-fade-in">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Educator Connection Band */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Want to teach too?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            If you're a bilingual learner or advanced speaker, consider becoming an educator on Ubitto.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="/for-educators" className="gap-2">
                <GraduationCap className="w-5 h-5" />
                Teach on Ubitto
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/for-educators#value-props" className="gap-2">
                <Users className="w-5 h-5" />
                See Educator Tools
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/for-educators#membership" className="gap-2">
                <Rocket className="w-5 h-5" />
                Join as Educator
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA />
      
      <Footer />
    </div>
  );
};

export default ForLearners;
