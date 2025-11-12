import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2, ShieldCheck, Users2, Calendar, BarChart3, FolderKanban,
  Languages, Shield, UserCog, Radio, LineChart, Lock, CalendarClock,
  CreditCard, MessageSquare, CheckCircle2, GraduationCap, Users, Map
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ForInstitutes = () => {
  const valueProps = [
    { icon: Users2, title: "Multi-educator admin", desc: "Manage educator roles, permissions, and workloads in one place." },
    { icon: Calendar, title: "Integrated scheduling & payments", desc: "Streamline bookings, payments, and automated reminders across teams." },
    { icon: BarChart3, title: "Cohort & campus analytics", desc: "See progress by class, cohort, or site — spot trends quickly." },
    { icon: FolderKanban, title: "Program & content management", desc: "Organize live classes and self-paced modules with smart templates." },
    { icon: Languages, title: "Global-ready operations", desc: "Multi-language, multi-timezone, and multi-currency support." },
    { icon: Shield, title: "Governance & security", desc: "Encrypted payments, access control, and activity logging." }
  ];

  const steps = [
    { step: "1", title: "Onboard educators", desc: "Create roles and permissions, import programs, and set policies.", icon: UserCog },
    { step: "2", title: "Publish & operate", desc: "List programs, open enrollment, and automate bookings and reminders.", icon: Radio },
    { step: "3", title: "Measure & improve", desc: "Use dashboards to evaluate progress and optimize learning pathways.", icon: LineChart }
  ];

  const useCases = [
    { title: "Language academy", before: "Fragmented tools and scattered data", after: "Unified bookings, payments, and cohort analytics", delta: "Admin time −45%" },
    { title: "University program", before: "Limited visibility across classes and TAs", after: "Central dashboards with cohort comparisons", delta: "Reporting time −60%" },
    { title: "Corporate training", before: "Manual tracking and follow-ups", after: "Automated enrollment, reminders, and skill radar", delta: "Completion rate +22%" }
  ];

  const integrations = [
    { icon: CalendarClock, title: "Calendar & scheduling", desc: "Sync schedules and reminders with your existing workflows." },
    { icon: CreditCard, title: "Online payments & invoicing", desc: "Handle payments and refunds securely with multi-currency options." },
    { icon: MessageSquare, title: "Communication & community", desc: "Profiles, groups, and messaging for learners and educators." }
  ];

  const plans = [
    {
      name: "Starter",
      price: "Custom",
      badge: "For small teams",
      features: [
        "Up to 10 educators",
        "Program & content management",
        "Integrated scheduling & payments",
        "Basic cohort analytics"
      ]
    },
    {
      name: "Plus",
      price: "Custom",
      badge: "Most popular",
      features: [
        "Multi-campus support",
        "Advanced analytics & reports",
        "Role-based permissions & audit logs",
        "Priority support"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      badge: "For large orgs",
      features: [
        "Custom SLA & onboarding",
        "Dedicated success manager",
        "Security reviews & data governance",
        "Feature roadmap alignment"
      ]
    }
  ];

  const faqs = [
    { q: "Can we manage multiple campuses or departments?", a: "Yes. You can organize educators and cohorts by campus or program and compare performance across them." },
    { q: "Do we have to change our existing tools?", a: "No. Ubitto integrates with your current workflows for scheduling, payments, and communication." },
    { q: "How do you handle security and compliance?", a: "Encrypted payments, role-based permissions, audit logs, and data retention controls are built in." },
    { q: "Is onboarding supported?", a: "Yes. We provide guided onboarding, training resources, and optional dedicated success management." }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Dark */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto w-full py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">
                Institution Solutions
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Scale your academy with a unified teaching OS.
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Centralize multi-educator management, scheduling, payments, analytics, and cultural experiences — all in one ecosystem.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="py-2 px-4 bg-white/10 text-white border-white/20">
                  <Building2 className="h-4 w-4 mr-2" />
                  Multi-campus ready
                </Badge>
                <Badge variant="secondary" className="py-2 px-4 bg-white/10 text-white border-white/20">
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Admin controls & audit logs
                </Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="default" asChild>
                  <a href="#request-demo">Request a Demo</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
                  <a href="/for-educators">Explore Educator Tools</a>
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Building2 className="w-20 h-20 mx-auto mb-4 text-white/60" />
                    <p className="text-white/60 text-sm">Admin Console Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Built for real institutional operations</h2>
            <p className="text-xl text-muted-foreground">
              Unify programs, people, and performance — with less overhead.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((item, index) => (
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

      {/* How It Works */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground">From setup to outcomes in three steps</p>
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

      {/* Admin Deep Dive */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Admin Console · Roles & Permissions · Audit Logs</p>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-4">Administration</Badge>
              <h2 className="text-4xl font-bold mb-6">Control at scale without the clutter</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Role-based access for admins, educators, and assistants</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Bulk actions for educator onboarding and program updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Audit logs and policy notes for a clean paper trail</span>
                </li>
              </ul>
              <p className="text-muted-foreground italic mb-6">
                Compliance and clarity built into daily operations.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="#request-demo">See admin controls</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Deep Dive */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <Badge variant="outline" className="mb-4">Analytics</Badge>
              <h2 className="text-4xl font-bold mb-6">Cohort insight that turns into action</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Track Listening, Expression, Vocabulary, Speaking, Grammar, Reading, Writing across cohorts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Compare performance by class, educator, or campus</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-lg">Export sharable reports for stakeholders</span>
                </li>
              </ul>
              <p className="text-muted-foreground italic mb-6">
                Make interventions early — and prove outcomes clearly.
              </p>
              <Button variant="outline" size="lg" asChild>
                <a href="#request-demo">Preview reports</a>
              </Button>
            </div>
            
            <div className="animate-fade-in order-1 lg:order-2">
              <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Cohort Trends · 7-Skill Radar · Outcome Reports</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Institutional use cases</h2>
            <p className="text-xl text-muted-foreground">Results you can measure</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-xl border-2 hover:border-primary/40">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 px-6 py-5 border-b">
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                </div>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Before</p>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{useCase.before}</p>
                    </div>
                    
                    <div className="border-l-2 border-primary/30 pl-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <p className="text-xs font-bold uppercase tracking-wider text-primary">After</p>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed">{useCase.after}</p>
                    </div>
                  </div>

                  <div className="bg-accent/5 rounded-lg px-4 py-3 border border-accent/20">
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Impact</p>
                    <p className="text-lg font-bold text-accent">{useCase.delta}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Security */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4">Governance, privacy, and security by design</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Encrypted payments, role-based access, and activity logging keep your operations safe and compliant.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <span>Role-based access controls (RBAC)</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <span>Audit logs & exportable records</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <span>Data privacy controls and retention policies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Works with your existing setup</h2>
            <p className="text-xl text-muted-foreground">No lock-in. Keep what you love, upgrade what you need.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((item, index) => (
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

      {/* Pricing */}
      <section id="packages" className="py-20 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Institute packages</h2>
            <p className="text-xl text-muted-foreground">Tailored to your size and goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`hover-scale transition-all relative ${plan.highlighted ? 'border-2 border-primary shadow-lg' : ''}`}>
                {plan.badge && (
                  <Badge className={`absolute -top-3 left-1/2 -translate-x-1/2 ${plan.highlighted ? 'bg-primary' : ''}`}>
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-3xl mb-2">{plan.name}</CardTitle>
                  <p className="text-2xl font-bold text-primary mb-4">{plan.price}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" variant={plan.highlighted ? "default" : "outline"} asChild>
                    <a href="#request-demo">Request a Demo</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 animate-fade-in">
            We'll tailor the implementation and training to your workflows.
          </p>
        </div>
      </section>

      {/* Request Demo Form */}
      <section id="request-demo" className="py-20 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Request a live demo</h2>
            <p className="text-xl text-muted-foreground">See how Ubitto fits your programs</p>
          </div>
          
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full name *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Work email *</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Institution / Organization *</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Team size *</label>
                  <select 
                    required 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">Select team size</option>
                    <option value="1-5">1-5</option>
                    <option value="6-20">6-20</option>
                    <option value="21-50">21-50</option>
                    <option value="51-200">51-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">What are you looking to solve?</label>
                  <textarea 
                    rows={4}
                    placeholder="e.g., multi-educator scheduling, cohort analytics, governance…"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background resize-none"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Your information is kept private and used only to arrange your demo.
                </p>
                
                <Button type="submit" size="lg" className="w-full">
                  Book my demo
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Frequently asked questions</h2>
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

      {/* Ecosystem Band */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">One ecosystem. Multiple ways to grow.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Empower your educators, engage your learners, and extend learning through cultural experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Button variant="outline" size="lg" asChild className="h-auto py-6">
              <a href="/for-educators" className="flex flex-col items-center gap-2">
                <GraduationCap className="w-8 h-8" />
                <span>For Educators</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-auto py-6">
              <a href="/for-learners" className="flex flex-col items-center gap-2">
                <Users className="w-8 h-8" />
                <span>For Learners</span>
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="h-auto py-6">
              <a href="/for-experience-makers" className="flex flex-col items-center gap-2">
                <Map className="w-8 h-8" />
                <span>For Experience Makers</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Bring clarity and scale to your programs
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            See how Ubitto centralizes your operations and improves outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#request-demo">Request a Demo</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/for-educators">Explore Educator Tools</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForInstitutes;
