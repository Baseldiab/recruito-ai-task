// lib imports
import { cn } from "@/lib/utils";

// types
import { TeamMember } from "@/components/types/features";

// components
import FeaturesBasicCard from "./features-basicCard";

// icons
import { CheckCircle2 } from "lucide-react";

// ui
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { teamMembers } from "@/components/constants";

interface FeaturesCandidateLineProps {
  className?: string;
}

export default function FeaturesCandidateLine({
  className,
}: FeaturesCandidateLineProps) {
  return (
    <article
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-centergap-3",
        className
      )}
    >
      <FeaturesBasicCard
        title="Candidate Sourcing & Job Posting"
        description="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
      />
      <div className="grid grid-cols-3 gap-3">
        {teamMembers.map((member, index) => (
          <CardItem
            key={member.id}
            index={index}
            activeIndex={0}
            member={member}
          />
        ))}
      </div>
    </article>
  );
}

const CardItem = ({
  index,
  activeIndex,
  member,
}: {
  index: number;
  activeIndex: number;
  member: TeamMember;
}) => {
  return (
    <Card
      className={`relative p-6 transition-all duration-300 ${
        index === activeIndex
          ? "scale-100 opacity-100 shadow-xl bg-white"
          : "scale-90 opacity-70"
      }`}
    >
      {index === activeIndex && (
        <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-[#00C853]" />
        </div>
      )}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-24 h-24">
          <img
            src={member.image}
            alt={`${member.name}'s profile`}
            className="rounded-full object-cover border-4 border-gray-100"
            width={96}
            height={96}
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
          <p className="text-gray-600 text-sm">{member.role}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="rounded-full px-4 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};
