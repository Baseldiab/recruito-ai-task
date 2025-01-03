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
    <section
      className={cn(
        " md:grid grid-cols-3 flex justify-center items-center min-h-fit max-md:py-10 h-fit max-md:w-[70%] max-sm:w-[90%] mx-auto",
        className
      )}
    >
      <figure className="max-md:hidden ">
        <img src={hiringImageLeft} alt="hiring" />
      </figure>
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

      <figure className="max-md:hidden ">
        <img src={hiringImageRight} alt="hiring" />
      </figure>
    </section>
  );
}
