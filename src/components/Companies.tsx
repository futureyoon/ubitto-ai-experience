export const Companies = () => {
  const companies = [
    { name: "Seoul International School", type: "Educational Institution" },
    { name: "Korean Language Institute", type: "Language Academy" },
    { name: "Global Learning Center", type: "Training Organization" },
    { name: "Busan Language Academy", type: "Private Institute" },
    { name: "Korea University", type: "University" },
    { name: "Tech Korea Corp", type: "Corporate Training" },
    { name: "Language Bridge", type: "Online Academy" },
    { name: "Seoul Arts School", type: "Arts & Culture" },
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            Schools, academies, and institutions worldwide rely on Ubitto
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-primary">
                  {company.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-semibold text-center mb-2">{company.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{company.type}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
