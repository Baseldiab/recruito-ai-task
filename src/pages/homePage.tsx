// sections imports
import HeaderSections from "@/components/sections/header";
import StaticsSection from "@/components/sections/statics";
import OrganaizationSection from "@/components/sections/organaization";
import FeaturesSection from "@/components/sections/features";
import FaqsSection from "@/components/sections/faqs";
import TestimonialsSection from "@/components/sections/testimonials/testimonials";
import HiringSection from "@/components/sections/hiring";

export function HomePage() {
  return (
    <>
      <HeaderSections />
      <StaticsSection />
      <OrganaizationSection className="sm:py-10 py-5" />
      <FeaturesSection />
      <FaqsSection className="sm:pb-10 sm:pt-20 py-5" />
      <TestimonialsSection className="sm:py-10 py-5" />
      <HiringSection className="max-md:py-5" />
    </>
  );
}
