import React from "react";

// lib
import { cn } from "@/lib/utils";

// constants
import { testimonialsItems } from "@/components/constants";

// ui imports
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from "@/components/ui/carousel";

// components
import SectionTitleBtn from "@/components/common/sectionTitleBtn";
import SectionTitle from "@/components/common/sectionTitle";
import TestimonialsCardItem from "@/components/sections/testimonials/testimonialsCardItem";

import Autoplay from "embla-carousel-autoplay";

interface TestimonialsSectionProps {
  className?: string;
}

export default function TestimonialsSection({
  className,
}: TestimonialsSectionProps) {
  return (
    <section className={cn("", className)}>
      <div className="container flex flex-col justify-center items-center gap-4 relative">
        <SectionTitleBtn title="Testimonials" className="mb-3" />
        <SectionTitle title="Don’t just take our word for it—see what our clients say about Recruito AI." />

        {/* Testimonials Cards */}
        <Cards />
      </div>
    </section>
  );
}

const Cards = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={() => plugin.current.play()}
        className="w-full sm:py-7 py-3 relative"
      >
        <CarouselContent className="mx-auto">
          {testimonialsItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-[35%] xl:basis-[582px] mx-auto"
            >
              <TestimonialsCardItem item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPagination selectedBgColor="bg-[#1F67E799]" />
      </Carousel>
    </>
  );
};
