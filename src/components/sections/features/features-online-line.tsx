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

      <div className="w-full mx-auto  border border-theme-text-third/20 rounded-2xl md:p-8 p-5 relative bg-white overflow-hidden ">
        <div className="p-3 bg-white flex flex-col gap-3 items-start justify-center border border-theme-text-third/20 rounded-[10px] !z-20">
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
  return (
    <div className="flex items-center gap-4">
      <Checkbox
        id={`item-${item.id}`}
        checked={item.completed}
        className={`h-6 w-6 ${
          item.completed ? "!bg-[#5ED028] !border-none !text-white" : ""
        }`}
      />
      <label
        htmlFor={`item-${item.id}`}
        className={`text-lg border border-[#E6E8EC] p-3 !m-0 rounded-[10px] ${
          item.completed ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {`${item.id}- ${item.label}`}
      </label>
    </div>
  );
};
