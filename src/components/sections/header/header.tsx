// assets
import headerBg from "@/assets/header/header-static-bg.webp";
import headerRightBg from "@/assets/header/header-right-square-bg.webp";
import headerLeftBg from "@/assets/header/header-left-square-bg.webp";

export default function HeaderSections() {
  return (
    <header
      className="lg:h-[857px] h-screen relative"
      style={{
        backgroundImage: `url(${headerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <figure className="z-10 absolute top-0 right-0">
        <img src={headerRightBg} alt="background square" />
      </figure>
      <figure className="z-10 absolute bottom-0 left-0">
        <img src={headerLeftBg} alt="background square" />
      </figure>
    </header>
  );
}
