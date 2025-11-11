import { Mic, Radar, Calendar, BarChart3, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Mic,
    title: "AI Voice Analysis",
    description: "Real-time pronunciation, intonation, and fluency evaluation",
  },
  {
    icon: Radar,
    title: "Skill Radar",
    description: "Visualize Listening, Expression, Vocabulary, Grammar, Reading, Writing",
  },
  {
    icon: Calendar,
    title: "Integrated Booking, Payment & Alerts",
    description: "Automate schedule management, payments, and notifications",
  },
  {
    icon: BarChart3,
    title: "Learning Reports",
    description: "Track learning progress at a glance with AI analysis",
  },
  {
    icon: Zap,
    title: "Automated Assignments & Quizzes",
    description: "AI grades and provides feedback automatically",
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Connect with learners through groups, feeds, and messaging",
  },
];

const specs = [
  { item: "Voice Analysis", support: "Real-time STT and accuracy scoring" },
  { item: "Role Management", support: "Educator / Learner / Institute structure" },
  { item: "Booking & Payment", support: "Integrated booking and payment, multi-currency support" },
  { item: "Reports", support: "Web view, shareable links, PDF export" },
  { item: "Security", support: "Encrypted payments, access control, audit logs" },
  { item: "Internationalization", support: "Korean / English support (expandable)" },
];

export const AIFeatures = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50 animate-fade-up group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Specs Table */}
        <div className="bg-card rounded-xl p-8 shadow-lg animate-fade-up">
          <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Item</th>
                  <th className="text-left py-3 px-4 font-semibold">Support</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-3 px-4 font-medium">{spec.item}</td>
                    <td className="py-3 px-4 text-muted-foreground">{spec.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
