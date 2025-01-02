import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function CustomButton({
  className,
  children = "Contact Us",
  ...props
}: CustomButtonProps) {
  return (
    <button
      className={cn(
        "w-fit h-[fit] md:px-6 sm:px-4 px-2 py-1 default-text rounded-full text-white text-xl font-medium",
        "transition-transform hover:scale-105",

        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
