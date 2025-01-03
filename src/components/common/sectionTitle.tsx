// lib
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  className?: string;
}
export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-semibold md:text-[40px] md:leading-title text-2xl lg:w-[70%] sm:w-[80%] w-[90%] text-center text-theme-text-subTitle",
        className
      )}
    >
      {title}
    </h2>
  );
}
