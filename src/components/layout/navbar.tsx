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

  return (
    <nav className="container bg-white sm:rounded-navbar sticky sm:top-12 top-6 z-50">
      <div className="flex justify-between items-center p-3 lg:px-10 md:px-7 px-5">
        {/* Logo */}
        <a href="#home">
          <LogoIcon className="md:!w-36 w-28 md:h-6 h-6 min-h-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-4 hidden">
          {navItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                className={`font-medium default-text
                ${
                  isActiveSection(item.href)
                    ? "bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent relative"
                    : "text-text-main hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition-colors"
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
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <X className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="block h-6 w-6" aria-hidden="true" />
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
                      ? "bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent relative"
                      : "text-text-main hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition-colors"
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
