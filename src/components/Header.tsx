import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "For Learners", href: "/for-learners" },
  { label: "For Educators", href: "/for-educators" },
  { label: "For Institutes", href: "/for-institutes" },
  { label: "For Experience Makers", href: "/for-experience-makers" },
  { label: "Membership", href: "/membership" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();
  const pathname = location.pathname;

  const cta = pathname.startsWith("/for-learners")
    ? { label: "Start Learning", href: "/for-learners#membership" }
    : pathname.startsWith("/for-educators")
    ? { label: "Join as Educator", href: "/for-educators#membership" }
    : { label: "Start Learning", href: "/for-learners#membership" };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary">
          uBitto
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-foreground/80 hover:text-primary transition-colors ${pathname === item.href ? 'text-primary font-semibold' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="default" asChild>
            <a href={cta.href}>{cta.label}</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-foreground/80 hover:text-primary transition-colors ${pathname === item.href ? 'text-primary font-semibold' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="default" asChild className="w-full">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
