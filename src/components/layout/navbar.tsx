// icons
import LogoIcon from "@/assets/logo.svg";

export function Navbar() {
  return (
    <nav className="container bg-white rounded-navbar">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        <LogoIcon className="w-8 h-8" />
      </div>
    </nav>
  );
}
