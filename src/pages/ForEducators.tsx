import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, Calendar, BarChart3, Users2, BookOpen, ShieldCheck, 
  LayoutDashboard, Link2, Activity, Users, Sparkles, Play,
  Search, Map, CalendarClock, CheckCircle2, Star
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CarouselDots } from "@/components/ui/carousel-dots";
import * as React from "react";
import { ArrowRight } from "lucide-react";
import educatorDashboard from "@/assets/educator-dashboard.png";

const ForEducators = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  
  const valuProps = [
    { icon: Mic, title: "AI Speaking & Expression Analysis", desc: "Get instant feedback on pronunciation, tone, and fluency." },
    { icon: Calendar, title: "Integrated Scheduling & Payments", desc: "Manage bookings, payments, and reminders effortlessly." },
    { icon: BarChart3, title: "Analytics & Growth Insights", desc: "Track progress with radar charts and learner reports." },
    { icon: Users2, title: "Profiles, Reviews & Discovery", desc: "Attract new learners through ratings and visibility." },
    { icon: BookOpen, title: "Automated Assignments & Quizzes", desc: "Save time with AI-generated feedback and instant grading." },
    { icon: ShieldCheck, title: "Secure Payments & Permissions", desc: "Enjoy encrypted payments and role-based access control." }
  ];

  const steps = [
    { step: "1", title: "Create Your Program", desc: "Design your course structure, pricing, and schedule in minutes with smart templates.", icon: LayoutDashboard },
    { step: "2", title: "Connect & Teach", desc: "Meet learners through your profile and community — bookings and notifications happen automatically.", icon: Link2 },
    { step: "3", title: "Measure Growth", desc: "Visualize progress with AI analytics and downloadable reports.", icon: Activity }
  ];

  const useCases = [
    { title: "Private Tutor", before: "Manual grading & time confusion", after: "AI scoring and automated scheduling", delta: "42% less admin time" },
    { title: "Small Academy", before: "Fragmented data and team reports", after: "Centralized analytics and cohort tracking", delta: "Retention rate +18%" },
    { title: "Experience Host", before: "Booking and feedback handled separately", after: "Bookings, exposure, and reviews in one place", delta: "2× more bookings" },
    { title: "Live Group Classes", before: "Challenging to manage multiple students simultaneously", after: "Real-time analytics and group performance dashboards", delta: "35% increase in engagement" },
    { title: "1-on-1 Tutoring", before: "Manual scheduling and payment processing", after: "Integrated booking and payment system", delta: "50% reduction in admin time" },
    { title: "Language Institute", before: "Complex multi-level class management", after: "Automated level assessment and class grouping", delta: "30% increase in satisfaction" },
    { title: "Corporate Training", before: "Difficulty tracking ROI and employee progress", after: "Comprehensive analytics and performance reporting", delta: "3× faster skill acquisition" },
    { title: "Self-Paced Programs", before: "Students miss out due to fixed schedule conflicts", after: "Learn at your own pace with on-demand support", delta: "60% better completion rates" },
    { title: "Korean Language Schools", before: "Limited resources for individualized feedback", after: "AI-powered personalized learning paths", delta: "45% improvement in test scores" }
  ];

  const testimonials = [
    { name: "Jane Kim", role: "Korean Tutor", quote: "AI reports cut my feedback time in half — and my students love the insights.", rating: 5 },
    { name: "Hana Studio", role: "Institute", quote: "Cohort analysis and central reporting made our operations so much smoother.", rating: 5 },
    { name: "Luis M.", role: "Tutor Team Lead", quote: "Automation boosted our re-enrollment rate by 30%.", rating: 5 }
  ];

  const faqs = [
    {
      q: "What's the difference between the Commission and Pro plans?",
      a: "The Commission Plan charges only per transaction. The Pro Plan adds advanced analytics, marketing tools, and enhanced exposure for faster growth."
    },
    {
      q: "Are payments secure?",
      a: "Yes. All payments are encrypted and protected by access control and activity logging."
    },
    {
      q: "Can I teach international students?",
      a: "Absolutely. Multi-language, multi-timezone, and multi-currency support ensures a seamless global teaching experience."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4">Educator-first Platform</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Teach smarter. <br />Manage easier.
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Ubitto brings everything together — AI feedback, scheduling, payments, analytics, and community — so you can focus on what truly matters: teaching.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="py-2 px-4">
                  <Users className="h-4 w-4 mr-2" />
                  20,000+ active learners
                </Badge>
                <Badge variant="secondary" className="py-2 px-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  AI speaking, quiz & analytics tools
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#membership">Start Free</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#live-demo">View Demo</a>
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
                <img 
                  src={educatorDashboard} 
                  alt="Educator dashboard showing teaching tools and analytics"
                  className="w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Everything You Need as an Educator</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Automate operations. Focus on teaching.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valuProps.map((item, index) => (
              <Card key={index} className="hover-scale border-border/50 hover:border-primary/50 transition-all">
                <CardHeader>
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground">Three simple steps to run your classes</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover-scale">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <step.icon className="h-8 w-8 text-primary mb-3" />
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <CardDescription className="text-base">{step.desc}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right">
              <img 
                src={educatorDashboard} 
                alt="Analytics dashboard showing radar charts and cohort analysis"
                className="rounded-xl shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center mt-4">
                Radar chart · Cohort analysis · Improvement insights
              </p>
            </div>
            
            <div className="animate-slide-in-left">
              <Badge variant="outline" className="mb-4">Analytics</Badge>
              <h2 className="text-4xl font-bold mb-6">See Every Learner's Growth Clearly</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Track 7 language skill areas (Listening, Expression, Vocabulary, Speaking, Grammar, Reading, Writing)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Monitor individual or class-level trends</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Share reports via link or export as PDF</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-6">
                Data-driven teaching becomes easier when insights are visual.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="#live-demo">View Analytics Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases / Before-After */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Real Results from Real Educators</h2>
            <p className="text-xl text-muted-foreground">Before and after using Ubitto</p>
          </div>
          
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: Math.ceil(useCases.length / 3) }).map((_, pageIndex) => (
                <CarouselItem key={pageIndex}>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.slice(pageIndex * 3, (pageIndex + 1) * 3).map((useCase, index) => (
                      <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/40">
                        {/* Header with subtle gradient */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 px-6 py-5 border-b">
                          <h3 className="text-xl font-bold text-foreground">
                            {useCase.title}
                          </h3>
                        </div>
                        
                        {/* Before/After Split */}
                        <div className="p-6">
                          <div className="grid grid-cols-2 gap-6 mb-6">
                            <div>
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-muted-foreground/40"></div>
                                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Before</p>
                              </div>
                              <p className="text-sm text-foreground/70 leading-relaxed">{useCase.before}</p>
                            </div>
                            
                            <div className="border-l-2 border-primary/30 pl-6">
                              <div className="flex items-center gap-2 mb-3">
                                <div className="w-2 h-2 rounded-full bg-primary"></div>
                                <p className="text-xs font-bold uppercase tracking-wider text-primary">After</p>
                              </div>
                              <p className="text-sm text-foreground leading-relaxed">{useCase.after}</p>
                            </div>
                          </div>

                          {/* Impact Badge */}
                          <div className="bg-accent/5 rounded-lg px-4 py-3 border border-accent/20">
                            <p className="text-xs font-semibold text-muted-foreground mb-1">Impact</p>
                            <p className="text-lg font-bold text-accent">{useCase.delta}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          
          <CarouselDots api={api} />
        </div>
      </section>

      {/* Membership / Pricing */}
      <section id="membership" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple Plans, Real Growth</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale border-2 hover:border-primary/50 transition-all relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Easiest start</Badge>
              <CardHeader>
                <CardTitle className="text-3xl mb-2">Commission Plan</CardTitle>
                <p className="text-2xl font-bold text-primary mb-4">No monthly fee</p>
                <CardDescription className="text-base">Pay only per transaction</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>All-in-one scheduling and payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Basic analytics reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Profile listing and reviews</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" asChild>
                  <a href="/signup?plan=commission">Start with Commission</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary/50 transition-all relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Best for growth</Badge>
              <CardHeader>
                <CardTitle className="text-3xl mb-2">Pro Plan</CardTitle>
                <p className="text-2xl font-bold text-primary mb-4">Monthly subscription</p>
                <CardDescription className="text-base">For educators ready to scale</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority exposure & custom profile layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics (cohorts, retention, trends)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Rich reports (PDF, share links, branding)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Marketing tools (coupons, referral codes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full" size="lg" variant="outline" asChild>
                  <a href="/signup?plan=pro">Upgrade to Pro</a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-center text-muted-foreground mt-8">
            All plans include secure online payment and role-based access control.
          </p>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">What Educators Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground mb-6">
                    "{testimonial.quote}"
                  </CardDescription>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="live-demo" className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-up mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Try the Live Demo</h2>
            <p className="text-xl text-muted-foreground">Explore both dashboards instantly</p>
          </div>
          
          <Card className="p-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" asChild>
                <a href="https://dev2.ubitto.com/dashboard/educator-dashboard/" target="_blank" rel="noopener noreferrer">
                  <Play className="h-5 w-5 mr-2" />
                  Educator Dashboard
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://dev2.ubitto.com/dashboard/learner-dashboard/" target="_blank" rel="noopener noreferrer">
                  <Play className="h-5 w-5 mr-2" />
                  Learner Dashboard
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Demo login is handled securely with temporary tokens — no credentials exposed.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
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

      {/* Learner Connection Band */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Expand Your Connection with Learners</h2>
            <p className="text-xl text-muted-foreground">
              Meet learners, academies, and experience hosts — all within the same ecosystem.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-scale text-center">
              <CardHeader>
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">How Learners Find You</CardTitle>
                <CardDescription>
                  <a href="/for-learners#find-teacher" className="text-primary hover:underline">
                    Learn more →
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover-scale text-center">
              <CardHeader>
                <Map className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Connect with Experience Programs</CardTitle>
                <CardDescription>
                  <a href="/for-experience-makers#browse" className="text-primary hover:underline">
                    Learn more →
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover-scale text-center">
              <CardHeader>
                <CalendarClock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Fast Booking Integration</CardTitle>
                <CardDescription>
                  <a href="/for-learners#booking" className="text-primary hover:underline">
                    Learn more →
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-up">
            Start Teaching Smarter Today
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let Ubitto handle the rest — you focus on teaching.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Button size="lg" variant="secondary" asChild>
              <a href="#membership">Start Free</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20" asChild>
              <a href="#live-demo">View Demo</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForEducators;
