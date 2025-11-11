import { useEffect, useRef, useState } from "react";
import { WaveDivider } from "./WaveDivider";
import { CircleDecoration } from "./CircleDecoration";

export const Outcomes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const kpis = [
    { label: "Operational Efficiency", value: "+45%", target: 45, suffix: "%" },
    { label: "Booking Conversion", value: "+110%", target: 110, suffix: "%" },
    { label: "Student Retention & Return Rate", value: "4x", target: 4, suffix: "x" },
    { label: "Engagement Rate", value: "+500%", target: 500, suffix: "%" },
    { label: "Income Booked", value: "8x", target: 8, suffix: "x" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(kpis.map(kpi => Math.floor(kpi.target * progress)));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(kpis.map(kpi => kpi.target));
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative Elements */}
      <CircleDecoration className="top-20 left-10 blur-3xl opacity-20" size="xl" color="accent" opacity={20} />
      <CircleDecoration className="bottom-20 right-10 blur-3xl opacity-20" size="lg" color="secondary" opacity={15} />
      <div className="absolute top-1/3 right-1/4 w-5 h-5 rounded-full bg-accent/30 animate-float" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Outcomes & Data</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {kpis.map((kpi, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-3">
                {kpi.suffix === "%" ? "+" : ""}{counts[index]}{kpi.suffix}
              </div>
              <div className="text-lg opacity-90">{kpi.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm opacity-80">* Based on beta partner data</p>
      </div>
      
      {/* Wave Divider Bottom - transitions to next section */}
      <WaveDivider className="absolute bottom-0 left-0 right-0" color="muted" />
    </section>
  );
};
