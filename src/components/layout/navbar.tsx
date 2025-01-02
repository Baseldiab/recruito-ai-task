import React from "react";

// icons
import LogoIcon from "@/assets/logo.svg";
import StarIcon from "@/assets/starIcon-navbar.svg";
import { Menu, X } from "lucide-react";

// types
import { NavbarItem } from "@/components/types/navbar.types";

// hooks
import { useLocation } from "react-router-dom";

// components
import MainButton from "@/components/buttons/mainButton";

export function Navbar() {
  const location = useLocation();

  // StateS
  const [isOpen, setIsOpen] = React.useState(false);

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

  // hooks
  // const { scrollToSection } = useAnimatedScroll();

  return (
    <nav
      className={`container bg-white fixed sm:top-10 top-6 left-1/2 -translate-x-1/2 z-50 
        transition-[border-radius] duration-300 ease-in-out
        ${isOpen ? "rounded-t-navbar" : "rounded-navbar"}`}
    >
      <div className="flex justify-between items-center p-3 md:px-4 px-3">
        {/* Logo */}
        <a href="#home">
          <LogoIcon className="md:!w-28 sm:w-28 w-20 md:h-6 h-6 min-h-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-4 hidden">
          {navItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className={`font-medium default-text [&:target]:text-gradient
                ${
                  isActiveSection(item.href)
                    ? "text-gradient relative"
                    : "text-text-main hover:bg-gradient-to-r  hover:from-blue-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition-colors"
                }`}
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

        {/* Desktop Contact Button */}
        <MainButton className="default-text max-md:hidden">
          Contact Us
        </MainButton>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
        >
          {isOpen ? (
            <X className="block sm:size-6 size-5" aria-hidden="true" />
          ) : (
            <Menu className="block sm:size-6 size-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-t transform transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 flex flex-col gap-2">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.text}>
                <a
                  href={item.href}
                  className={`font-medium default-text
                  ${
                    isActiveSection(item.href)
                      ? "text-gradient relative"
                      : "text-text-main hover:text-gradient transition-colors"
                  }`}
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
          <div className="mt-4">
            <MainButton className="default-text w-full">Contact Us</MainButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
