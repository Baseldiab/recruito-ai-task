// lib  
import { cn } from "@/lib/utils";

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn("container h-[500px]", className)}
    >
      <h2 className="text-header text-center font-semibold">Features</h2>
    </section>
  );
}
