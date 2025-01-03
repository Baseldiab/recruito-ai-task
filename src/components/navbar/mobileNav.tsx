// icons
import StarIcon from "@/assets/starIcon-navbar.svg";

// components
import MainButton from "@/components/buttons/mainButton";

// types
import { NavbarItem } from "@/components/types/navbar.types";

interface MobileNavigationProps {
  navItems: NavbarItem[];
  isOpen: boolean;
  isActive: (link: string) => boolean;
  handleSectionClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => void;
}
export default function MobileNav({
  navItems,
  isOpen,
  isActive,
  handleSectionClick,
}: MobileNavigationProps) {
  return (
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
              isActive(item.href)
                ? "text-gradient relative"
                : "text-theme-text-main hover:text-gradient transition-colors"
            }`}
              >
                <>
                  {item.text}
                  {isActive(item.href) && (
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
  );
}
