// lib imports
import { cn } from "@/lib/utils";
import FeaturesBasicCard from "./features-basicCard";

interface FeaturesCandidateLineProps {
  className?: string;
}

export default function FeaturesCandidateLine({
  className,
}: FeaturesCandidateLineProps) {
  return (
    <article
      className={cn("grid md:grid-cols-2 grid-cols-1 items-center", className)}
    >
      <FeaturesBasicCard
        title="Candidate Sourcing & Job Posting"
        description="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
      />
    </article>
  );
}
