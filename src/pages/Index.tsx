import { Hero } from "@/components/Hero";
import { ProductOverview } from "@/components/ProductOverview";
import { AIFeatures } from "@/components/AIFeatures";
import { CoreValue } from "@/components/CoreValue";
import { UseCases } from "@/components/UseCases";
import { Outcomes } from "@/components/Outcomes";
import { SocialProof } from "@/components/SocialProof";
import { LearnerConnection } from "@/components/LearnerConnection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductOverview />
      <AIFeatures />
      <CoreValue />
      <UseCases />
      <Outcomes />
      <SocialProof />
      <LearnerConnection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
