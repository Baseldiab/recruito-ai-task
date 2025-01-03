// lib
import { cn } from "@/lib/utils";

// assets
import StarsIcon from "@/assets/features/starsIcon.svg";

// components
import SectionTitleBtn from "@/components/common/sectionTitleBtn";
import SectionTitle from "@/components/common/sectionTitle";

// components-features
import FeaturesCandidateLine from "@/components/sections/features/features-candidate-line";
import FeaturesAutomatedLine from "@/components/sections/features/features-automated-line";
import FeaturesOnlineLine from "@/components/sections/features/features-online-line";
import FeaturesAiVideoLine from "@/components/sections/features/features-aiVideo-line";
import FeaturesFinalLine from "@/components/sections/features/features-final-line";

interface FeaturesSectionProps {
  className?: string;
}

export default function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section
      id="features"
      className={cn("relative overflow-hidden", className)}
    >
      <div className="container flex flex-col justify-center items-center gap-4 z-30">
        <SectionTitleBtn className="px-4 z-20" title="Features" />

        <div className="relative h-fit w-full mx-auto flex flex-col justify-center items-center gap-4">
          <SectionTitle title="Streamline your recruitment with our advanced features" />

          <StarsIcon className="size-10 absolute top-0 right-0" />
          <StarsIcon className="size-10 absolute bottom-0 left-0" />
        </div>

        <div className="flex flex-col items-center gap-2 my-7">
          <FeaturesCandidateLine />
          <FeaturesAutomatedLine />
          <FeaturesOnlineLine />
          <FeaturesAiVideoLine />
          <FeaturesFinalLine />
        </div>
      </div>
    </section>
  );
}
