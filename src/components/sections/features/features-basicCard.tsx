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
      <h3 className="md:text-title text-2xl md:leading-title text-theme-text-main text-start font-semibold">
        {title}
      </h3>
      <p className="md:text-base text-sm text-theme-text-secondary">
        {description}
      </p>
    </div>
  );
}
