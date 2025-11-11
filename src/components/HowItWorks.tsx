const steps = [
  {
    number: 1,
    title: "Create Your Program",
    description: "Educators design programs easily with AI-guided templates and Amelia booking integration.",
  },
  {
    number: 2,
    title: "Connect & Teach",
    description: "Meet learners, message, and teach directly inside the BuddyBoss-powered community.",
  },
  {
    number: 3,
    title: "Measure Growth",
    description: "View real-time progress with AI-powered analytics dashboards.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How Ubitto Works
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-primary-foreground">
                    {step.number}
                  </span>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
