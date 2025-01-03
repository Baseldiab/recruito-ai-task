import React from "react";

// icons
import LogoIcon from "@/assets/logo.svg";
import StarIcon from "@/assets/starIcon-navbar.svg";
import { Menu, X } from "lucide-react";

// types
import { NavbarItem } from "@/components/types/navbar.types";

// components
import MainButton from "@/components/buttons/mainButton";
import MobileNav from "../navbar/mobileNav";

export function Navbar() {
  // States
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home"); // Default to home

  // Add click handler for smooth scrolling
  const handleSectionClick = React.useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(targetId);
        setIsOpen(false);
      }
    },
    []
  );

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const mostVisible = visibleEntries.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio
            ? prev
            : current;
        });
        setActiveSection(mostVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollTop < 100) {
        setActiveSection("home");
        return;
      }

      if (
        scrollTop + windowHeight >=
        document.documentElement.scrollHeight - 100
      ) {
        const lastSection = Array.from(sections).pop();
        if (lastSection) {
          setActiveSection(lastSection.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveSection = React.useCallback(
    (link: string) => {
      const targetPath = link.replace("#", "");
      return activeSection === targetPath;
    },
    [activeSection]
  );

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
    <nav
      className={`container bg-white fixed sm:top-8 top-5 left-1/2 -translate-x-1/2 z-50 
        transition-[border-radius] duration-300 ease-in-out border border-transparent
        ${isOpen ? "rounded-t-navbar" : "rounded-navbar"}
        before:absolute before:inset-0 before:-z-10 before:rounded-navbar before:p-[1px]
        before:bg-gradient-to-r before:from-[#FFFFFF]/90 before:via-[#FFFFFF]/30 before:to-[#FFFFFF]/90 shadow-lg`}
    >
      <div className="flex justify-between items-center p-3 md:px-4 px-3">
        {/* Logo */}
        <a href="#">
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
                    : "text-theme-text-main hover:bg-gradient-to-r  hover:from-blue-600 hover:to-teal-400 hover:bg-clip-text hover:text-transparent transition-colors"
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
      <MobileNav
        navItems={navItems}
        isActive={isActiveSection}
        isOpen={isOpen}
        handleSectionClick={handleSectionClick}
      />
    </nav>
  );
}
