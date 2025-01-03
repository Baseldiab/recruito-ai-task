// lib
import { cn } from "@/lib/utils";

// assets
import NeedsLeftBg from "@/assets/needs/needs-left.webp";
import NeedsRightBg from "@/assets/needs/needs-right.webp";
import MakeData from "@/assets/needs/MakeData-DrivenDecisions.svg";
import StreameCloud from "@/assets/needs/streamlineAi-cloud-spark.svg";
import StreameEditSpark from "@/assets/needs/streamlineAi-edit-spark.svg";

// components
import SectionTitleBtn from "@/components/common/sectionTitleBtn";
import SectionTitle from "@/components/common/sectionTitle";

// ui imports
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// types
import { NeedsItem } from "@/components/types/needs.type";

interface NeedsSectionParams {
  className?: string;
}
export default function NeedsSection({ className }: NeedsSectionParams) {
  const needsArray = [
    {
      title: "Enhance Candidate Experience",
      icon: <StreameEditSpark className="sm:size-8 size-6" />,
      content:
        "Create a seamless and professional interaction with candidates through AI-powered communication and feedback.",
    },
    {
      title: "Streamline AI-Powered Hiring",
      icon: <StreameCloud className="sm:size-8 size-6" />,
      content:
        "Automate candidate screening, scheduling, and follow-ups, saving time and improving consistency.",
    },
    {
      title: "Make Data-Driven Decisions",
      icon: <MakeData className="sm:size-8 size-6" />,
      content:
        "Utilize analytics to rank candidates based on key metrics, providing unbiased recommendations for your hiring team.",
    },
  ];
  return (
    <section className={cn("bg-theme-background-needs relative", className)}>
      <div className="container flex flex-col justify-center items-center gap-4">
        <SectionTitleBtn
          title="Benefits "
          className="mb-3 border-theme-border-dark text-theme-text-success"
        />
        <SectionTitle
          title="Unlock the advantages of using Recruito AI for your hiring needs."
          className="text-white max-w-[748px] lg:w-[60%] md:w-[70%] sm:w-[80%] w-[90%] py-4"
        />

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 !items-center lg:gap-4 gap-3">
          {needsArray.map((item, index) => (
            <NeedsCardItem key={`${item.title}-${index}`} {...item} />
          ))}
        </div>
      </div>

      <figure className="absolute top-0 right-0 h-fit">
        <img src={NeedsLeftBg} alt="background image" />
      </figure>

      <figure className="absolute top-0 left-0 h-fit">
        <img src={NeedsRightBg} alt="background image" />
      </figure>
    </section>
  );
}

const NeedsCardItem = ({ title, icon, content }: NeedsItem) => {
  return (
    <Card className="border-theme-border-dark bg-theme-background-needs h-full">
      <CardHeader className=" items-center justify-center gap-2 !pb-2">
        <div className="border-theme-border-dark border p-3 size-fit rounded-xl">
          {icon}
        </div>
        <CardTitle className="text-white text-center font-medium text-xl">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-theme-text-dark text-center text-base">
          {content}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
