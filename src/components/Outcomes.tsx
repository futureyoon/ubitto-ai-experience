export const Outcomes = () => {
  const kpis = [
    { label: "운영 효율 향상", value: "+45%" },
    { label: "재방문율", value: "+25%" },
    { label: "예약 전환율", value: "x2.1" },
    { label: "AI 퀴즈 활용률", value: "65% 월간 활성" },
  ];

  return (
    <section className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">성과와 데이터</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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

        <p className="text-center text-sm opacity-80">* 베타 파트너 데이터 기준</p>
      </div>
    </section>
  );
};
