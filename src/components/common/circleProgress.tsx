import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const CircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    // Update size and strokeWidth types to accept responsive values
    size?:
      | number
      | { default: number; sm?: number; md?: number; lg?: number; xl?: number };
    strokeWidth?:
      | number
      | { default: number; sm?: number; md?: number; lg?: number; xl?: number };
    textClassName?: string;
    bgColor?: string;
    progressClassName?: string;
  }
>(
  ({
    className,
    value = 0,
    size = 128,
    strokeWidth = 5,
    textClassName = "text-2xl text-current",
    bgColor = "text-theme-separating-separator dark:text-zinc-800",
    progressClassName = "text-theme-main-secondary dark:text-zinc-50",
  }) => {
    // Add responsive size and stroke width handling
    const [currentSize, setCurrentSize] = React.useState(
      typeof size === "number" ? size : size.default
    );
    const [currentStrokeWidth, setCurrentStrokeWidth] = React.useState(
      typeof strokeWidth === "number" ? strokeWidth : strokeWidth.default
    );

    React.useEffect(() => {
      const handleResize = () => {
        if (typeof size === "object") {
          const width = window.innerWidth;
          if (width >= 1280 && size.xl) setCurrentSize(size.xl);
          else if (width >= 1024 && size.lg) setCurrentSize(size.lg);
          else if (width >= 768 && size.md) setCurrentSize(size.md);
          else if (width >= 640 && size.sm) setCurrentSize(size.sm);
          else setCurrentSize(size.default);
        }

        if (typeof strokeWidth === "object") {
          const width = window.innerWidth;
          if (width >= 1280 && strokeWidth.xl)
            setCurrentStrokeWidth(strokeWidth.xl);
          else if (width >= 1024 && strokeWidth.lg)
            setCurrentStrokeWidth(strokeWidth.lg);
          else if (width >= 768 && strokeWidth.md)
            setCurrentStrokeWidth(strokeWidth.md);
          else if (width >= 640 && strokeWidth.sm)
            setCurrentStrokeWidth(strokeWidth.sm);
          else setCurrentStrokeWidth(strokeWidth.default);
        }
      };

      handleResize(); // Initial check
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [size, strokeWidth]);

    // Update radius calculation to use currentSize and currentStrokeWidth
    const radius = currentSize / 2 - currentStrokeWidth * 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset =
      circumference - ((value as number) / 100) * circumference;
    const center = currentSize / 2;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg
          className={cn("transform -rotate-90", className)}
          width={currentSize}
          height={currentSize}
        >
          {/* Background circle */}
          <circle
            className={bgColor}
            strokeWidth={currentStrokeWidth}
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
            strokeWidth={currentStrokeWidth}
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
