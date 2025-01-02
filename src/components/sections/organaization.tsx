// lib
import { cn } from "@/lib/utils";

interface OrganaizationSectionProps {
  className?: string;
}

export default function OrganaizationSection({
  className,
}: OrganaizationSectionProps) {
  return (
    <section
      id="organization"
      className={cn("container", "bg-white rounded-navbar", className)}
    >
      <h5 className="text-text-secondary text-sm text-center font-medium">
        Trusted by the world leading organisations
      </h5>
    </section>
  );
}
