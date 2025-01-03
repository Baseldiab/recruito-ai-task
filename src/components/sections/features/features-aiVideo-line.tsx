// lib imports
import { cn } from "@/lib/utils";

// types

// components
import FeaturesBasicCard from "./features-basicCard";
import { CircleProgress } from "@/components/common/circleProgress";

// assets
import CardSquareBg from "@/assets/features/features-right-square.webp";
import CardSmallSquareBg from "@/assets/features/features-small-square.webp";
import CardAiVideoBg from "@/assets/features/aiVideoImg.png";

// ui

interface FeaturesAiVideoLineProps {
  className?: string;
}

export default function FeaturesAiVideoLine({
  className,
}: FeaturesAiVideoLineProps) {
  return (
    <article
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-center gap-6",
        className
      )}
    >
      <figure className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 -z-10">
        <img
          src={CardSquareBg}
          alt="automated line"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="flex flex-col justify-center items-center gap-3 w-full mx-auto  border border-theme-text-third/20 rounded-2xl md:py-14 py-8 md:ps-5 md:pe-14 ps-3 pe-8 relative overflow-hidden bg-white">
        <figure className="rounded-xl relative max-w-[460px]">
          <img
            src={CardAiVideoBg}
            alt="automated line"
            className="w-full h-full object-cover rounded-xl [filter:drop-shadow(-4px_2px_10px_rgba(0,0,0,0.1))_drop-shadow(-16px_9px_18px_rgba(0,0,0,0.09))]"
          />
          <CardAiVideo className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 shadow-2xl" />
        </figure>

        <figure className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={CardSmallSquareBg}
            alt="automated line"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>

      <FeaturesBasicCard
        title="AI Video Interviews"
        description="An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free."
      />
    </article>
  );
}

const CardAiVideo = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "md:p-3 p-2 bg-white rounded-xl w-fit max-w-[160px] flex flex-col gap-2 justify-center",
        className
      )}
    >
      <h6 className="md:text-sm text-xs text-theme-text-main text-center">
        Interviews Score
      </h6>
      <CircleProgress
        value={90}
        size={{
          md: 95,
          lg: 117,
          default: 70,
        }}
        strokeWidth={{
          lg: 13,
          md: 8,
          default: 6,
        }}
        textClassName="sm:text-sm text-xs text-black"
        progressClassName="text-[#1BD1C2]"
        bgColor="text-[#E1E4E8]"
      />
    </div>
  );
};
