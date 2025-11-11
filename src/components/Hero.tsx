import { Button } from "@/components/ui/button";
import { Users, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import learnerDashboard from "@/assets/learner-dashboard.png";
import educatorDashboard from "@/assets/educator-dashboard.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-accent/40" />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Korean Text */}
        <div className="animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI로 더 똑똑하게<br />가르치고, 더 깊게 배우다
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            발음·표현·문법·읽기·쓰기까지 — AI가 진단하고, 연결하고, 성장으로 이어집니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" variant="hero" asChild>
              <a href="/for-educators">선생님으로 시작</a>
            </Button>
            <Button size="lg" variant="heroOutline" asChild>
              <a href="/for-learners">학습자로 시작</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-5 h-5" />
              <span className="font-semibold">2만+ 학습자</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">AI Speaking / Quiz / Analytics</span>
            </div>
          </div>
        </div>

        {/* Right - Carousel */}
        <div className="animate-fade-up">
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={educatorDashboard} 
                    alt="프로그램 생성·예약·관리 통합"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">프로그램 생성·예약·관리 통합</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={learnerDashboard} 
                    alt="AI 발음 퀴즈 자동 채점"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">AI 발음 퀴즈 자동 채점</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={learnerDashboard} 
                    alt="학습 진행 및 성장 리포트"
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">학습 진행 및 성장 리포트</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
