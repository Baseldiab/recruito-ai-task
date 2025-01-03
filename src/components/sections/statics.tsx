// lib
import { cn } from "@/lib/utils";

// assets
import staticsImg from "@/assets/statics/statics-section-center.webp";
import staticsLeftCard from "@/assets/statics/statics-left.webp";
import staticsRightCard from "@/assets/statics/statics-right.webp";

// icons
import { Play } from "lucide-react";

interface StaticsSectionProps {
  className?: string;
}

export default function StaticsSection({ className }: StaticsSectionProps) {
  return (
    <section
      className={cn(
        "relative z-10 max-h-fit mt-[-35%] sm:mt-[-25%] md:mt-[-15%] lg:mt-[-22%]",
        className
      )}
    >
      <div className="container bg-theme-background-secondary rounded-section p-3 relative">
        <h4 className="sm:text-sm text-xs uppercase text-theme-text-secondary pb-3 text-center">
          See how we create an autonomous
          <span className="underline ms-1">ai agent</span>
        </h4>

        <figure className="relative">
          <img src={staticsImg} alt="statics" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FFFFFF] to-transparent"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-[#1F67E70D] size-fit rounded-full backdrop-blur-3xl">
            <div className="bg-[#0B192866] rounded-full sm:size-14 size-10 flex items-center justify-center backdrop-blur-3xl">
              <Play className="text-white sm:size-6 size-4 fill-white shadow-2xl" />
            </div>
          </div>
        </figure>
      </div>
      <figure className="max-md:hidden absolute lg:left-0 md:-left-0 lg:bottom-[10%] md:bottom-[3%]  w-fit h-fit">
        <img src={staticsLeftCard} alt="statics" />
      </figure>
      <figure className="max-md:hidden absolute right-0  lg:top-[15%] md:top-[10%] w-fit h-fit">
        <img src={staticsRightCard} alt="statics" />
      </figure>
    </section>
  );
}
