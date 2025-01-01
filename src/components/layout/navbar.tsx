// icons
import LogoIcon from "@/assets/logo.svg";
import StarIcon from "@/assets/starIcon-navbar.svg";

// types
import { NavbarItem } from "@/components/types/navbar.types";

// hooks
import { useLocation } from "react-router-dom";

// components
import MainButton from "../buttons/mainButton";

export function Navbar() {
  const location = useLocation();

  // check if the current hash is the same as the link
  const isActiveSection = (link: string) => location.hash === link;

  const navItems: NavbarItem[] = [
    {
      text: "Home",
      href: "#home",
      disabled: false,
    },
    {
      text: "Features",
      href: "#features",
      disabled: true,
    },
    {
      text: "Pricing",
      href: "#pricing",
      disabled: true,
    },
    {
      text: "Resources",
      href: "#resources",
      disabled: true,
    },
  ];

  return (
    <nav className="container bg-white rounded-navbar flex justify-between items-center p-5 lg:px-10 md:px-7 px-5 sticky sm:top-12 top-6 z-50">
      <a href="#home">
        <LogoIcon className="md:!w-36 w-28 md:h-6 h-6 min-h-full" />
      </a>

      <ul className="flex gap-4">
        {navItems.map((item) => (
          <li key={item.text}>
            <a
              href={item.href}
              className={`font-medium default-text
                 ${
                   isActiveSection(item.href)
                     ? " bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent relative"
                     : "text-text-main hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition-colors"
                 }
              `}
            >
              <>
                {item.text}
                {isActiveSection(item.href) && (
                  <StarIcon className="size-2.5 absolute top-0.5 -right-2" />
                )}
              </>
            </a>
          </li>
        ))}
      </ul>

      <MainButton className="default-text"> Contact Us</MainButton>
    </nav>
  );
}
