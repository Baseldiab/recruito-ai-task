// lib
import { cn } from "@/lib/utils";

// assets
import headerBg from "@/assets/header/header-static-bg.webp";
import headerRightBg from "@/assets/header/header-right-square-bg.webp";
import headerLeftBg from "@/assets/header/header-left-square-bg.webp";
import StarIconSvg from "@/assets/starIcon-navbar.svg";

// icons
import StarIcon from "@/components/icons/starIcon";

// components
import MainButton from "@/components/buttons/mainButton";
import CustomButton from "@/components/buttons/customButton";

interface HeaderSectionsProps {
  className?: string;
}

export default function HeaderSections({ className }: HeaderSectionsProps) {
  return (
    <header
      id="home"
      className={cn("lg:h-[857px] sm:h-[600px] h-[500px] relative", className)}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0) 70%, rgba(255, 255, 255, 1) 100%), url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header content */}
      <div className="container lg:pt-[218px] sm:pt-[140px] pt-[90px]  lg:max-w-[65%] xl:w-[50%] md:max-w-[70%]  w-[90%] mx-auto text-center ">
        <h1 className=" lg:text-header lg:leading-header md:leading-title sm:text-title text-3xl font-semibold text-text-main ">
          Revolutionize Your Hiring Process with
          <span className="text-gradient relative ms-1">
            Recruito AI
            <StarIconSvg className="size-6 absolute top-3 -right-6" />
          </span>
        </h1>

        <p className="sm:text-base text-sm text-text-secondary mt-3 lg:w-[430px] sm:w-[70%] w-[70%] mx-auto">
          Your fully automated hiring assistant that sources, screens, and
          interviews candidates effortlessly
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center sm:mt-10 mt-5 gap-4">
          <CustomButton className="flex justify-center items-center gap-2 capitalize !py-2 sm:!px-6 !px-4 sm:!text-sm !text-xs font-semibold border border-border-primary !shadow-none  text-text-main">
            Start Your Free Trial
          </CustomButton>

          <MainButton className="flex justify-center items-center gap-2 capitalize !py-2 sm:!px-6 !px-4 sm:text-sm text-xs font-semibold">
            {" "}
            <StarIcon className="w-4 h-4 !text-white !fill-white" /> Request a
            demo
          </MainButton>
        </div>
      </div>

      {/* Background squares at top left and bottom right */}
      <figure className="z-10 absolute top-0 right-0">
        <img src={headerRightBg} alt="background square" />
      </figure>
      <figure className="z-10 absolute bottom-0 left-0">
        <img src={headerLeftBg} alt="background square" />
      </figure>
    </header>
  );
}
