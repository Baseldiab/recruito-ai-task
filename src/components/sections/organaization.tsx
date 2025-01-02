// lib
import { cn } from "@/lib/utils";

// assets
import IntysLogo from "@/assets/organisation/organisations-intys.png";
import LinkedinLogo from "@/assets/organisation/organisations-linkedin.png";
import OgilvyLogo from "@/assets/organisation/organisations-ogilvy.png";
import OrganisationsGsk from "@/assets/organisation/organisations-GSK.png";

interface OrganaizationSectionProps {
  className?: string;
}

export default function OrganaizationSection({
  className,
}: OrganaizationSectionProps) {
  const organisations = [
    {
      id: "0-Organisations-Gsk",
      name: "Organisations Gsk",
      logo: OrganisationsGsk,
    },
    {
      id: "1-Ogilvy",
      name: "Ogilvy",
      logo: OgilvyLogo,
    },
    {
      id: "3-Intys",
      name: "Intys",
      logo: IntysLogo,
    },
    {
      id: "2-Linkedin",
      name: "Linkedin",
      logo: LinkedinLogo,
    },
    {
      id: "4-Ogilvy",
      name: "Ogilvy",
      logo: OgilvyLogo,
    },
    {
      id: "5-Organisations-Gsk",
      name: "Organisations Gsk",
      logo: OrganisationsGsk,
    },
  ];

  return (
    <section
      id="organization"
      className={cn("container", "bg-white rounded-navbar", className)}
    >
      <h5 className="text-text-secondary text-sm text-center font-medium">
        Trusted by the world leading organisations
      </h5>

      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-1 my-6 items-center">
        {organisations.map((organisation, index) => (
          <figure
            key={organisation.id}
            className={cn(
              "h-[80px] flex items-center justify-center relative",
              index === 0 &&
                "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white before:to-white/0 before:z-20",
              index === organisations.length - 1 &&
                "after:absolute after:inset-0 after:bg-gradient-to-r after:from-white/0 after:to-white after:z-20"
            )}
          >
            <img
              className="max-w-full w-auto h-[40px] object-contain relative z-10"
              src={organisation.logo}
              alt={organisation.name}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
