import * as React from "react";
import { WaveDivider } from "./WaveDivider";
import { CircleDecoration } from "./CircleDecoration";

export const Companies = () => {
  const companies = [
    { name: "Seoul International School" },
    { name: "Korean Language Institute" },
    { name: "Global Learning Center" },
    { name: "Busan Language Academy" },
    { name: "Korea University" },
    { name: "Tech Korea Corp" },
    { name: "Language Bridge" },
    { name: "Seoul Arts School" },
    { name: "Incheon Business Academy" },
    { name: "Digital Skills Korea" },
  ];

  // Duplicate for seamless loop
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative py-16 px-6 bg-muted/30 overflow-hidden">
      {/* Decorative Elements */}
      <CircleDecoration className="top-10 right-20 blur-3xl" size="md" color="secondary" opacity={8} />
      <div className="absolute bottom-10 left-1/4 w-4 h-4 rounded-full bg-accent/30 animate-float" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trusted by Leading Organizations
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-16 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap text-center">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Wave Divider Bottom - transitions to next section */}
      <WaveDivider className="absolute bottom-0 left-0 right-0" color="background" flip />
    </section>
  );
};
