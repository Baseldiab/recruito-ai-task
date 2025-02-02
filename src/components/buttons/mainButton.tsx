import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

export default function MainButton({
  className,
  children = "Contact Us",
  ...props
}: MainButtonProps) {
  return (
    <button
      className={cn(
        "w-fit h-[fit] md:px-7 px-4 py-2 rounded-full text-white text-sm font-medium",
        "bg-gradient-to-r from-teal-400 to-blue-500",
        "transition-transform hover:scale-105",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
