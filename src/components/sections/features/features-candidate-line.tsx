import { useState } from "react";

// lib imports
import { cn } from "@/lib/utils";

// types
import { TeamMember } from "@/components/types/features";

// components
import FeaturesBasicCard from "./features-basicCard";

// assets
import CheckCircle2 from "@/assets/features/checkedIcon.svg";
import CardSquareBg from "@/assets/features/features-right-square.webp";
import CardSmallSquareBg from "@/assets/features/features-small-square.webp";

// ui
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { teamMembers } from "@/components/constants";

interface FeaturesCandidateLineProps {
  className?: string;
}

export default function FeaturesCandidateLine({
  className,
}: FeaturesCandidateLineProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <article
      className={cn(
        "grid md:grid-cols-2 grid-cols-1 items-center gap-6 relative",
        className
      )}
    >
      <figure className="absolute top-0 right-0 translate-x-1/2 translate-y-1/2 -z-10">
        <img
          src={CardSquareBg}
          alt="automated line"
          className="w-full h-full object-cover"
        />
      </figure>
      <FeaturesBasicCard
        title="Candidate Sourcing & Job Posting"
        description="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
      />
      <div className="w-full mx-auto  border border-theme-text-third/20 rounded-2xl p-5 relative bg-white overflow-hidden">
        <figure className="absolute top-0 right-0 translate-x-1/2 ">
          <img
            src={CardSmallSquareBg}
            alt="automated line"
            className="w-full h-full object-cover"
          />
        </figure>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          breakpoints={{
            568: {
              slidesPerView: 2,
              coverflowEffect: {
                depth: 500,
              },
            },
          }}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow]}
          className="w-full  gap-5 p-8 flex justify-center items-center"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide
              key={member.id}
              className=""
              style={{ height: "290px" }}
            >
              <CardItem
                index={index}
                activeIndex={activeIndex}
                member={member}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  );
}

const CardItem = ({
  index,
  activeIndex,
  member,
}: {
  index: number;
  activeIndex: number;
  member: TeamMember;
}) => {
  return (
    <Card
      className={cn(
        "relative bg-white rounded-2xl p-6 flex flex-col items-center text-center sm:!w-[250px] w-full min-w-[200px] h-full transition-all duration-300 shadow-lg",
        activeIndex === index ? "mb-[28px]" : "mt-[28px]"
      )}
    >
      {activeIndex === index && (
        <div className="absolute top-4 left-4 bg-white rounded-full p-1.5">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
      )}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-white">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
      <p className="text-gray-600 text-sm mb-6">{member.role}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {member.skills.map((skill: string) => (
          <Badge
            key={skill}
            variant="secondary"
            className="rounded-full px-3 py-0.5 text-xs bg-gray-100 text-gray-700"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
