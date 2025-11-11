import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { AIFeatures } from "@/components/AIFeatures";
import { CoreValue } from "@/components/CoreValue";
import { UseCases } from "@/components/UseCases";
import { Outcomes } from "@/components/Outcomes";
import { SocialProof } from "@/components/SocialProof";
import { Companies } from "@/components/Companies";
import { LearnerConnection } from "@/components/LearnerConnection";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <CoreValue />
      <UseCases />
      <Outcomes />
      <AIFeatures />
      <SocialProof />
      <Companies />
      <LearnerConnection />
      <CTA />
    </div>
  );
};

export default Index;
