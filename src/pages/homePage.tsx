// sections imports
import HeaderSections from "@/components/sections/header";
import StaticsSection from "@/components/sections/statics";
import FeaturesSection from "@/components/sections/features";
import OrganaizationSection from "@/components/sections/organaization";
import HiringSection from "@/components/sections/hiring";
import TestimonialsSection from "@/components/sections/testimonials/testimonials";

export function HomePage() {
  return (
    <>
      <HeaderSections />
      <StaticsSection />
      <OrganaizationSection className="sm:py-10 py-5" />
      <FeaturesSection />
      <TestimonialsSection className="sm:py-10 py-5" />
      <HiringSection />
    </>
  );
}
