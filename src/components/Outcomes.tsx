export const Outcomes = () => {
  const kpis = [
    { label: "Operational Efficiency", value: "+45%" },
    { label: "Booking Conversion", value: "+110%" },
    { label: "Student Retention & Return Rate", value: "4x" },
    { label: "Engagement Rate", value: "+500%" },
    { label: "Income Booked", value: "8x" },
  ];

  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
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
              <div className="text-4xl md:text-5xl font-bold mb-3">{kpi.value}</div>
              <div className="text-lg opacity-90">{kpi.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm opacity-80">* Based on beta partner data</p>
      </div>
    </section>
  );
};
