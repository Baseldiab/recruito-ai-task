// lib imports
import { cn } from "@/lib/utils";

// types
import { LeaderboardEntry } from "@/components/types/features";

// components
import FeaturesBasicCard from "./features-basicCard";
import { leaderboardEntries } from "@/components/constants";
import { CircleProgress } from "@/components/common/circleProgress";

// assets
import CardSquareBg from "@/assets/features/features-right-square.webp";
import CardSmallSquareBg from "@/assets/features/features-small-square.webp";

// ui
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

interface FeaturesFinalLineProps {
  className?: string;
}

export default function FeaturesFinalLine({
  className,
}: FeaturesFinalLineProps) {
  return (
    <article
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-center gap-6 relative",
        className
      )}
    >
      <figure className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 ">
        <img
          src={CardSquareBg}
          alt="automated line"
          className="w-full h-full object-cover"
        />
      </figure>

      <FeaturesBasicCard
        title="Final Shortlist for the Line Manager"
        description="Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision."
      />

      <div className="w-full mx-auto  border border-theme-text-third/20 rounded-2xl md:p-8 p-5 relative bg-white overflow-hidden ">
        <div className="flex flex-col justify-center items-center gap-10">
          {leaderboardEntries.map((item, index) => (
            <FinalCardItem key={item.name} entry={item} index={index} />
          ))}
        </div>

        <figure className="absolute top-0 right-0 translate-x-1/2">
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

const FinalCardItem = ({
  className,
  entry,
  index,
}: {
  className?: string;
  entry: LeaderboardEntry;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center bg-white sm:gap-3 gap-2 w-full rotate-1 hover:rotate-0 transition-transform duration-300 ease-in-out cursor-pointer h-fit my-2 max-h-[424px]",
        index === 0 && "-rotate-[2deg]",
        index === 1 && "rotate-[1deg]",
        index === 2 && "rotate-[2deg]",
        className
      )}
    >
      <Avatar className="sm:size-12 size-10">
        <AvatarImage src={entry.avatar} alt={`${entry.name}'s avatar`} />
        <AvatarFallback>{entry.name[0]}</AvatarFallback>
      </Avatar>
      <Card className={"px-2 py-0 flex-grow shadow-2xl"}>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="md:text-lg sm:text-base text-sm text-theme-text-third font-medium truncate">
              {entry.name}
            </p>
            <div className="flex items-center gap-4">
              <span className="md:text-lg sm:text-base text-sm text-theme-text-third font-medium">
                #{entry.rank}
              </span>
              <CircleProgress
                value={entry.progress}
                size={60}
                strokeWidth={4}
                textClassName=" text-xs text-black"
                progressClassName="text-[#5ED028]"
                bgColor="text-[#E1E4E8]"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
