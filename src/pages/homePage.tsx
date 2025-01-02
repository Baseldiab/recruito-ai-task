// sections imports
import HeaderSections from "@/components/sections/header";
import StaticsSection from "@/components/sections/statics";
import FeaturesSection from "@/components/sections/features";
import OrganaizationSection from "@/components/sections/organaization";

export function HomePage() {
  return (
    <>
      <HeaderSections />
      <StaticsSection />
      <OrganaizationSection className="py-10" />
      <FeaturesSection />
    </>
  );
}
