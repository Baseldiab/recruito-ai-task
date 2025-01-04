// lib imports
import { cn } from "@/lib/utils";

// components imports
import FeaturesBasicCard from "@/components/sections/features/features-basicCard";

// icons
import { FileText } from "lucide-react";

// assets
import CardSmallSquareBg from "@/assets/features/features-left-square.webp";
import GlassBg from "@/assets/features/GlassImg.png";
import CardSquareBg from "@/assets/features/features-right-square.webp";

// ui imports

interface FeaturesAutomatedLineProps {
  className?: string;
}

export default function FeaturesAutomatedLine({
  className,
}: FeaturesAutomatedLineProps) {
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

      <div className="flex flex-col justify-center items-center gap-3 w-full mx-auto  border border-theme-text-third/20 rounded-2xl  md:p-14 p-8 relative overflow-hidden bg-white">
        <AutomatedLineCard
          iconColor="text-blue-500"
          className="w-full mx-auto max-w-[470px]"
        />
        <AutomatedLineCard
          iconColor="text-green-500"
          className="md:w-[80%] w-[90%] mx-auto max-w-[424px]"
        />
        <AutomatedLineCard
          iconColor="text-red-500"
          className="md:w-[60%] w-[80%] mx-auto max-w-[380px]"
        />

        <figure className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={CardSmallSquareBg}
            alt="automated line"
            className="w-full h-full object-cover"
          />
        </figure>

        <figure className="absolute bottom-0 right-0 translate-x-0 translate-y-0">
          <img
            src={GlassBg}
            alt="automated line"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>

      <FeaturesBasicCard
        title="Automated Resume Screening & Filtering"
        description="Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants."
      />
    </article>
  );
}

interface AutomatedLineCardProps {
  className?: string;
  iconColor: string;
}
const AutomatedLineCard = ({
  className,
  iconColor,
}: AutomatedLineCardProps) => {
  return (
    <div
      className={cn(
        "p-2 flex items-start gap-3 border-2 ` shadow-sm hover:shadow-md transition-shadow rounded-xl",
        className
      )}
    >
      <div className="p-2 rounded border border-theme-text-third/20">
        <FileText className={cn("w-4 h-4", iconColor)} />
      </div>
      <div className="space-y-2 flex-1">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        <div className="h-3 bg-gray-50 rounded w-1/2" />
      </div>
    </div>
  );
};
