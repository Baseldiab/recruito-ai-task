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

export default function HeaderSections() {
  return (
    <header
      id="home"
      className="lg:h-[857px] h-screen relative"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header content */}
      <div className="container sm:pt-[218px] pt-[140px]  lg:max-w-[65%] xl:w-[50%] md:max-w-[70%]  w-[90%] mx-auto text-center ">
        <h1 className=" lg:text-header lg:leading-header md:leading-title sm:text-title text-4xl font-semibold text-text-main ">
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
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center mt-10 gap-4">
        <CustomButton className="flex justify-center items-center gap-2 capitalize py-2 !px-6 !text-sm font-semibold border border-border-primary !shadow-none  text-text-main">
          Start Your Free Trial
        </CustomButton>

        <MainButton className="flex justify-center items-center gap-2 capitalize py-2 !px-6 !text-sm font-semibold">
          {" "}
          <StarIcon className="w-4 h-4 !text-white !fill-white" /> Request a
          demo
        </MainButton>
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
