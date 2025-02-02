import { cn } from "@/lib/utils";
import CustomButton from "../buttons/customButton";

interface SectionTitleBtnProps {
  title: string;
  className?: string;
}

export default function sectionTitleBtn({
  title,
  className,
}: SectionTitleBtnProps) {
  return (
    <CustomButton
      className={cn(
        "sm:w-32 w-28 sm:h-10 font-medium text-sm capitalize text-theme-text-btn border border-theme-border-btn",
        className
      )}
    >
      {title}
    </CustomButton>
  );
}
