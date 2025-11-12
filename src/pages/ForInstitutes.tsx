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

      {/* Value Props - Enterprise Grid */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Core Capabilities</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">Built for real institutional operations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unify programs, people, and performance — with less overhead.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {valueProps.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-background p-8 rounded-3xl border-2 border-border hover:border-primary/30 transition-all animate-fade-in"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl -z-10 group-hover:scale-150 transition-transform opacity-0 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Timeline Style */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">How it works</h2>
            <p className="text-xl text-muted-foreground">From setup to outcomes in three steps</p>
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-fade-in">
                <div className="flex items-start gap-8">
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-muted/30 p-8 rounded-2xl border border-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admin Deep Dive - Side-by-Side Feature */}
      <section className="py-24 px-6 bg-gradient-to-br from-muted/40 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl flex items-center justify-center shadow-2xl border border-white/10">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-white/80" />
                    </div>
                    <p className="text-sm text-white/60">Admin Console · Roles & Permissions · Audit Logs</p>
                  </div>
                </div>
                {/* Floating accent */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
            
            <div className="lg:col-span-3 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-primary">Administration</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Control at scale without the clutter</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Role-based access control</h4>
                    <p className="text-muted-foreground">Manage permissions for admins, educators, and assistants</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Bulk operations</h4>
                    <p className="text-muted-foreground">Onboard educators and update programs at scale</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Complete audit trail</h4>
                    <p className="text-muted-foreground">Policy notes and activity logging for compliance</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="shadow-lg" asChild>
                <a href="#request-demo">See admin controls</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Deep Dive - Reversed Layout */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
                <span className="text-sm font-semibold text-accent">Analytics</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">Cohort insight that turns into action</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">7-dimension skill tracking</h4>
                    <p className="text-muted-foreground">Monitor Listening, Expression, Vocabulary, Speaking, Grammar, Reading, Writing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Multi-level comparison</h4>
                    <p className="text-muted-foreground">Compare by class, educator, or campus location</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-5 bg-muted/30 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Stakeholder reporting</h4>
                    <p className="text-muted-foreground">Export and share performance reports with leadership</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" variant="outline" className="shadow-lg" asChild>
                <a href="#request-demo">Preview reports</a>
              </Button>
            </div>
            
            <div className="lg:col-span-2 animate-fade-in">
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl flex items-center justify-center shadow-xl border-2 border-border">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-white/50 dark:bg-gray-800/50 flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-10 h-10 text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">Cohort Trends · 7-Skill Radar · Outcome Reports</p>
                  </div>
                </div>
                {/* Floating accent */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - Compact Stats Cards */}
      <section className="py-24 px-6 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Case Studies</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">Institutional use cases</h2>
            <p className="text-xl text-muted-foreground">Results you can measure</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index} 
                className="group relative bg-background p-8 rounded-3xl border-2 border-border hover:border-primary/50 transition-all animate-fade-in overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">{useCase.title}</h3>
                  
                  <div className="space-y-6 mb-6">
                    <div className="relative pl-6 border-l-2 border-red-500/30">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-red-500 -translate-x-[7px]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2">Before</p>
                      <p className="text-sm text-muted-foreground">{useCase.before}</p>
                    </div>
                    
                    <div className="relative pl-6 border-l-2 border-green-500/30">
                      <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-green-500 -translate-x-[7px]" />
                      <p className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 mb-2">After</p>
                      <p className="text-sm">{useCase.after}</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Impact</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {useCase.delta}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance & Security - Feature Band with Icons */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10 animate-fade-in">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border-2 border-white/20">
              <Lock className="w-12 h-12" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Governance, privacy, and security by design</h2>
            <p className="text-xl text-gray-300 max-w-3xl">
              Encrypted payments, role-based access, and activity logging keep your operations safe and compliant.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">RBAC Controls</h3>
              <p className="text-gray-300">Role-based access controls for admins, educators, and staff</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Audit Logs</h3>
              <p className="text-gray-300">Complete audit trails and exportable compliance records</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Privacy</h3>
              <p className="text-gray-300">Privacy controls and configurable retention policies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations - Horizontal Cards */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Works with your existing setup</h2>
            <p className="text-xl text-muted-foreground">No lock-in. Keep what you love, upgrade what you need.</p>
          </div>
          
          <div className="space-y-6">
            {integrations.map((item, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-8 p-8 bg-muted/30 rounded-2xl border-2 border-border hover:border-primary/50 transition-all animate-fade-in"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-base text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - Enterprise Tables */}
      <section id="packages" className="py-24 px-6 bg-gradient-to-br from-muted/40 via-background to-muted/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-sm font-semibold text-primary">Flexible Pricing</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">Institute packages</h2>
            <p className="text-xl text-muted-foreground">Tailored to your size and goals</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-background rounded-3xl p-8 border-2 transition-all ${
                  plan.highlighted 
                    ? 'border-primary shadow-2xl scale-105' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                {plan.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full text-sm font-bold ${
                    plan.highlighted 
                      ? 'bg-gradient-to-r from-primary to-accent text-white' 
                      : 'bg-muted text-foreground'
                  }`}>
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-8 mt-4">
                  <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">Contact us for pricing</p>
                </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg" 
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#request-demo">Get Started</a>
                </Button>
              </div>
            ))}
          </div>
          
          <p className="text-center text-lg text-muted-foreground animate-fade-in">
            💡 We'll tailor the implementation and training to your workflows.
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

      {/* Ecosystem Band - Icon Grid */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">One ecosystem. Multiple ways to grow.</h2>
          <p className="text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
            Empower your educators, engage your learners, and extend learning through cultural experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="/for-educators" 
              className="group bg-background p-10 rounded-3xl border-2 border-border hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Educators</h3>
              <p className="text-muted-foreground">Empower teachers with AI tools and analytics</p>
            </a>
            
            <a 
              href="/for-learners" 
              className="group bg-background p-10 rounded-3xl border-2 border-border hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Learners</h3>
              <p className="text-muted-foreground">Personalized learning paths and progress tracking</p>
            </a>
            
            <a 
              href="/for-experience-makers" 
              className="group bg-background p-10 rounded-3xl border-2 border-border hover:border-primary/50 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">For Experience Makers</h3>
              <p className="text-muted-foreground">Cultural experiences that enhance learning</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Bold and Centered */}
      <section className="py-32 px-6 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10 animate-fade-in">
          <div className="inline-block px-6 py-3 bg-primary/10 rounded-full mb-8">
            <span className="text-sm font-semibold text-primary">Ready to Transform Your Institution?</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
            Bring clarity and scale to your programs
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            See how Ubitto centralizes your operations and improves outcomes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="text-lg px-10 py-7 shadow-2xl" asChild>
              <a href="#request-demo">Request a Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2" asChild>
              <a href="/for-educators">Explore Educator Tools</a>
            </Button>
          </div>
          
          <div className="mt-16 pt-16 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Trusted by leading institutions</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-50">
              <div className="text-2xl font-bold">INST A</div>
              <div className="text-2xl font-bold">INST B</div>
              <div className="text-2xl font-bold">INST C</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForInstitutes;
