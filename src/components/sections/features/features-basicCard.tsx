// lib imports
import { cn } from "@/lib/utils";

interface FeaturesBasicCardProps {
  className?: string;
  title: string;
  description: string;
}

export default function FeaturesBasicCard({
  className,
  title,
  description,
}: FeaturesBasicCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 items-start justify-center h-full px-8 bg-white",
        className
      )}
    >
      <h3 className="text-title leading-title text-theme-text-main text-start font-semibold">
        {title}
      </h3>
      <p className="text-base  text-theme-text-secondary">{description}</p>
    </div>
  );
}
