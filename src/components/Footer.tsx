import { Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  ubitto: [
    { text: "For Educators", url: "/for-educators" },
    { text: "For Learners", url: "/for-learners" },
    { text: "For Institutes", url: "/for-institutes" },
  ],
  support: [
    { text: "Help Center", url: "/help" },
    { text: "Privacy Policy", url: "/privacy" },
  ],
  social: [
    { text: "Instagram", url: "https://instagram.com/ubitto", icon: Instagram },
    { text: "LinkedIn", url: "https://linkedin.com/company/ubitto", icon: Linkedin },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16 px-6 animate-fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ubitto</h3>
            <p className="text-accent-foreground/80">
              Empowering educators and inspiring learners through AI-powered Korean language education.
            </p>
          </div>

          {/* Ubitto Links */}
          <div>
            <h4 className="font-semibold mb-4">Ubitto</h4>
            <ul className="space-y-2">
              {footerLinks.ubitto.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => {
                const Icon = link.icon;
                return (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 pt-8 text-center text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ubitto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
