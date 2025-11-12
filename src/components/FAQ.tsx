import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleDecoration } from "@/components/CircleDecoration";
import { WaveDivider } from "@/components/WaveDivider";

const faqs = [
  {
    question: "How does AI-powered learning work?",
    answer: "Our AI analyzes your pronunciation, grammar, and writing in real-time, providing instant feedback and personalized recommendations. It adapts to your learning style and tracks your progress across all language skills."
  },
  {
    question: "What's included in the platform?",
    answer: "You get access to AI pronunciation analysis, automated quiz grading, progress tracking, integrated booking & payment systems, program creation tools, and comprehensive analytics dashboards for both learners and educators."
  },
  {
    question: "Do I need teaching experience to be an educator?",
    answer: "While teaching experience is helpful, our platform is designed to support educators at all levels. We provide tools and resources to help you create engaging programs and manage your learners effectively."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing varies based on your needs. Learners can browse programs and pay per course or subscription. Educators can create free or paid programs with flexible pricing options. Contact us for detailed pricing information."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! Both learners and educators can sign up and explore the platform features. Learners can access free programs and educators can create their first program at no cost."
  },
  {
    question: "What languages are supported?",
    answer: "Currently, uBitto specializes in Korean language learning, with support for multiple interface languages including English, Korean, and more coming soon."
  },
  {
    question: "How do I get started?",
    answer: "Simply choose your path - Learner or Educator - and sign up. Learners can immediately browse programs and start learning, while educators can begin creating their first program right away."
  },
  {
    question: "Can I use uBitto on mobile devices?",
    answer: "Yes! uBitto is fully responsive and works seamlessly on desktop, tablet, and mobile devices, so you can learn or teach anywhere, anytime."
  }
];

export const FAQ = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <CircleDecoration className="top-20 -left-20" size="xl" opacity={5} />
      <CircleDecoration className="bottom-20 -right-20" size="lg" color="secondary" opacity={5} />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about uBitto
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 animate-fade-up">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center animate-fade-up">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@ubitto.com" 
            className="text-primary font-semibold hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>

      <WaveDivider className="absolute bottom-0 left-0 right-0" color="background" />
    </section>
  );
};
