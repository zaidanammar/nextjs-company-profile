import { Facebook, InstagramIcon, Linkedin } from "lucide-react";

export const COMPANY_INFO = {
  name: "Toko Satu",
  description:
    "Simplifying your shopping experience with quality products and excellent service.",
  year: new Date().getFullYear(),
  author: {
    name: "Zaidan Ammar",
    url: "https://www.instagram.com/zaidanammar",
  },
};

export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/zaidan.ammar",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/zaidan.ammar",
    icon: Facebook,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muammar-zaidan/",
    icon: Linkedin,
  },
];
