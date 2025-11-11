import experienceImage from "@/assets/experience-learning.jpg";

export const ProductOverview = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ubitto란?</h2>
          <p className="text-xl text-muted-foreground">
            교사와 학습자가 함께 성장하는 AI 교육 운영 플랫폼
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                AI 진단과 피드백으로 수업 준비와 채점이 자동화됩니다.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                예약, 결제, 알림이 한 시스템에서 작동합니다.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2" />
              <p className="text-lg text-foreground">
                레이더 차트로 학습자의 강점과 약점을 시각화합니다.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img 
              src={experienceImage} 
              alt="Platform Overview"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
