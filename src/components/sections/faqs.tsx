// lib
import { cn } from "@/lib/utils";

// assets
import FaqsBg from "@/assets/faqs/FaqsBg.png";

// common imports
import SectionTitleBtn from "@/components/common/sectionTitleBtn";

// ui imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqsSectionParams {
  className?: string;
}

export default function FaqsSection({ className }: FaqsSectionParams) {
  const faqsArray = [
    {
      value: "item-1",
      title: "What is an AI Agent?",
      content: `An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
    },
    {
      value: "item-2",
      title: "What are the Benefits of Using Recruito’s AI Agent?",
      content: `  Yes. It's animated by default, but you can disable it if you
              prefer.. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
    },
    {
      value: "item-3",
      title: "Next Steps?",
      content: `Yes. It comes with default styles that matches the other
              components&apos; aesthetic. Key capabilities include:
• Natural Language Processing to interpret resumes and candidate responses
• Adaptive Learning to improve accuracy and efficiency over time
• Task Automation to handle repetitive or time-consuming steps
• Data-Driven Insights for better predictions and decisions`,
    },
  ];

  return (
    <section className={cn("relative", className)}>
      <div className="container flex flex-col justify-center items-center gap-4 z-30">
        <SectionTitleBtn className="px-4 z-20" title="FAQs " />

        {/* Faqs Accordings */}
        <Accordion
          type="single"
          defaultValue={faqsArray[0].value}
          collapsible
          className="mx-auto max-w-[980px] md:w-[75%] sm:[85%] w-full bg-white border border-theme-border-main rounded-xl sm:my-9 my-3 z-20"
        >
          {faqsArray.map((e) => (
            <AccordionItem key={e.value} value={e.value} className="py-2 px-7">
              <AccordionTrigger className="font-semibold lg:text-xl md:text-lg text-base  text-theme-text-subTitle no-underline">
                {e.title}
              </AccordionTrigger>
              <AccordionContent>{e.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <figure className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-100/25 to-transparent h-[500px] ">
        <img src={FaqsBg} alt="background image" />
      </figure>
    </section>
  );
}
