// lib imports
import { cn } from "@/lib/utils";

// types

// components
import FeaturesBasicCard from "./features-basicCard";

// assets
import CardSquareBg from "@/assets/features/features-right-square.webp";
import CardSmallSquareBg from "@/assets/features/features-small-square.webp";

// ui
import { Checkbox } from "@/components/ui/checkbox";
import { ChecklistItem } from "@/components/types/features";
import { ChecklistItemArray } from "@/components/constants";
import { useState } from "react";

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
      <figure className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 ">
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

      <div className="w-full mx-auto  border border-theme-text-third/20 rounded-2xl md:p-8 p-5 relative bg-white overflow-hidden ">
        <div className="p-3 bg-white flex flex-col gap-3 items-start justify-center border border-theme-text-third/20 rounded-[10px]">
          {ChecklistItemArray.map((item) => (
            <CheckListItem key={item.id} item={item} />
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

const CheckListItem = ({ item }: { item: ChecklistItem }) => {
  const [isChecked, setIsChecked] = useState<boolean>(item.completed);

  return (
    <div className="flex items-center gap-4 w-full bg-white z-10">
      <Checkbox
        id={`item-${item.id}`}
        checked={isChecked}
        className={`h-6 w-6 ${
          isChecked ? "!bg-[#5ED028] !border-none !text-white" : ""
        }`}
        onCheckedChange={(e) => setIsChecked(e as boolean)}
      />
      <label
        htmlFor={`item-${item.id}`}
        className={`w-full flex-grow md:text-lg sm:text-base text-xs border border-[#E6E8EC] md:p-3 p-2 !m-0 rounded-[10px] ${
          isChecked ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {`${item.id}- ${item.label}`}
      </label>
    </div>
  );
};
