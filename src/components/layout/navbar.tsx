import React from "react";

// icons
import LogoIcon from "@/assets/logo.svg";
import StarIcon from "@/assets/starIcon-navbar.svg";
import { Menu, X } from "lucide-react";

// types
import { NavbarItem } from "@/components/types/navbar.types";

// components
import MainButton from "@/components/buttons/mainButton";

export function Navbar() {
  // States
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home"); // Default to home

  // Add click handler for smooth scrolling
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  // Update useEffect for intersection observer
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Set initial active section to home
    setActiveSection("home");

    return () => observer.disconnect();
  }, []);

  // Update isActiveSection function
  const isActiveSection = (link: string) => {
    const targetPath = link.replace("#", "");
    return activeSection === targetPath;
  };

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
      className={`container bg-white fixed sm:top-8 top-5 left-1/2 -translate-x-1/2 z-50 
        transition-[border-radius] duration-300 ease-in-out border border-transparent
        ${isOpen ? "rounded-t-navbar" : "rounded-navbar"}
        before:absolute before:inset-0 before:-z-10 before:rounded-navbar before:p-[1px]
        before:bg-gradient-to-r before:from-[#FFFFFF]/90 before:via-[#FFFFFF]/30 before:to-[#FFFFFF]/90 shadow-lg`}
    >
      <div className="flex justify-between items-center p-3 md:px-4 px-3">
        {/* Logo */}
        <a
          href="#
        "
        >
          <LogoIcon className="md:!w-28 sm:w-28 w-20 md:h-6 h-6 min-h-full" />
        </a>

        {/* Desktop Navigation */}
        <ul className="md:flex gap-4 hidden">
          {navItems.map((item) => (
            <li key={item.text}>
              <a
                href={item.href}
                onClick={(e) => handleSectionClick(e, item.href)}
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
                  onClick={(e) => handleSectionClick(e, item.href)}
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
