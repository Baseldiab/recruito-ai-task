// lib imports
import { cn } from "@/lib/utils";

// types

// components
import FeaturesBasicCard from "./features-basicCard";

// assets
import CardSquareBg from "@/assets/features/features-right-square.webp";
import CardSmallSquareBg from "@/assets/features/features-small-square.webp";

// ui

interface FeaturesOnlineLineProps {
  className?: string;
}

export default function FeaturesOnlineLine({
  className,
}: FeaturesOnlineLineProps) {
  return (
    <article
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-center gap-6 relative",
        className
      )}
    >
      <figure className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 -z-10">
        <img
          src={CardSquareBg}
          alt="automated line"
          className="w-full h-full object-cover"
        />
      </figure>
      <FeaturesBasicCard
        title="Online Assessment"
        description="Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated."
      />
      <div className="w-full mx-auto  border border-theme-text-third/20 rounded-2xl p-5 relative bg-white overflow-hidden">
        <figure className="absolute top-0 right-0 translate-x-1/2 ">
          <img
            src={CardSmallSquareBg}
            alt="automated line"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </article>
  );
}
