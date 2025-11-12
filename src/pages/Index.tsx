import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { VideoDemo } from "@/components/VideoDemo";
import { AIFeatures } from "@/components/AIFeatures";
import { CoreValue } from "@/components/CoreValue";
import { UseCases } from "@/components/UseCases";
import { Outcomes } from "@/components/Outcomes";
import { SocialProof } from "@/components/SocialProof";
import { Companies } from "@/components/Companies";
import { LearnerConnection } from "@/components/LearnerConnection";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <VideoDemo />
      <CoreValue />
      <UseCases />
      <Outcomes />
      <AIFeatures />
      <SocialProof />
      <Companies />
      <LearnerConnection />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
