// icons
import LogoIcon from "@/assets/logo.svg";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import XIcon from "@/components/icons/xIcon";

export default function Footer() {
  const socialLinks = [
    {
      icon: <XIcon className="size-3" />,
      link: "https://www.twitter.com/",
    },
    {
      icon: <Instagram className="size-4" />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <Facebook className="size-4" />,
      link: "https://www.facebook.com/",
    },
    {
      icon: <Linkedin className="size-4" />,
      link: "https://www.linkedin.com/",
    },
  ];

  return (
    <footer className="bg-background-footer sm:py-5 py-5">
      <div className="container flex flex-col gap-3">
        <div className="flex justify-between items-center max-sm:flex-col gap-2">
          <LogoIcon className="w-[156px] h-9" />
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a href={link.link} key={link.link}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center  max-sm:flex-col-reverse gap-2">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} Recruito AI . All rights reserved.
          </p>

          <div className="flex justify-between items-center gap-2">
            <a href="#" className="text-text-secondary text-sm">
              Terms
            </a>
            <a href="#" className="text-text-secondary text-sm">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
