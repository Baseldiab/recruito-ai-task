// lib
import { cn } from "@/lib/utils";

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
  return (
    <section className={cn("", className)}>
      <div className="container flex flex-col justify-center items-center gap-4 relative">
        <SectionTitleBtn title="Faqs" />

        {/* Faqs Accordings */}
        <Accordion
          type="single"
          collapsible
          className="mx-auto max-w-[980px] xl:w-[50%] lg:w-60% md:w-[75%] sm:[85%] w-full bg-white border border-theme-border-main"
        >
          <AccordionItem value="item-1" className="py-3 px-7">
            <AccordionTrigger className="font-semibold md:text-xl sm:text-lg text-base text-theme-text-subTitle">
              Is it accessible?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
