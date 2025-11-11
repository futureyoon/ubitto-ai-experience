import * as React from "react";

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
    <section className="py-16 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trusted by Leading Organizations
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-12 animate-scroll">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-lg whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
