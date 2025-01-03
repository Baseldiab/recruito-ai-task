import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const CircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    // Add custom props
    size?: number;
    strokeWidth?: number;
    textClassName?: string;
    bgColor?: string;
    progressClassName?: string;
  }
>(
  ({
    className,
    value = 0,
    size = 128, // default 128px (w-32)
    strokeWidth = 5,
    textClassName = "text-2xl text-current",
    bgColor = "text-theme-separating-separator dark:text-zinc-800",
    progressClassName = "text-theme-main-secondary dark:text-zinc-50",
  }) => {
    // Calculate the circle properties
    const radius = size / 2 - strokeWidth * 2; // Adjust radius based on size
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - ((value as number) / 100) * circumference;

    const center = size / 2;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          className={cn("transform -rotate-90", className)}
          width={size}
          height={size}
        >
          {/* Background circle */}
          <circle
            className={bgColor}
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          {/* Progress circle */}
          <circle
            className={cn(
              progressClassName,
              "transition-all duration-300 ease-in-out"
            )}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
        </svg>
        {/* Percentage text in the middle */}
        <div
          className={cn("absolute font-semibold !text-theme-xs", textClassName)}
        >
          {value ? value.toFixed(1) : 0}%
        </div>
      </div>
    );
  }
);
CircleProgress.displayName = "CircleProgress";

export { CircleProgress };
