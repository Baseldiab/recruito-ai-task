// lib
import { cn } from "@/lib/utils";

// assets
import hiringImageLeft from "@/assets/hiring/hiring-left-bg.webp";
import hiringImageRight from "@/assets/hiring/hiring-right-bg.webp";
// icons
import { StarIcon } from "lucide-react";

// components
import MainButton from "@/components/buttons/mainButton";

interface HiringProps {
  className?: string;
}
export default function HiringSection({ className }: HiringProps) {
  return (
    <section className={cn(" relative h-fit ", className)}>
      <div className="flex justify-center items-center lg:w-1/3 sm:w-1/2 w-[80%] mx-auto sm:h-[300px] h-[150px]">
        <div className="flex justify-center items-center flex-col gap-4 text-center ">
          <h2 className=" font-semibold md:text-[40px] md:leading-title text-2xl text-theme-text-subTitle">
            Ready to enhance your hiring process ?
          </h2>
          <MainButton className="flex justify-center items-center gap-2 capitalize !py-2 sm:!px-6 !px-4 sm:text-sm text-xs font-semibold">
            {" "}
            <StarIcon className="w-4 h-4 !text-white !fill-white" /> Request a
            demo
          </MainButton>
        </div>
      </div>

      <figure className="absolute top-0 right-0 h-full bottom-0">
        <img className="h-full" src={hiringImageLeft} alt="background image" />
      </figure>

      <figure className="absolute top-0 left-0 bottom-0 h-full">
        <img className="h-full" src={hiringImageRight} alt="background image" />
      </figure>
    </section>
  );
}
