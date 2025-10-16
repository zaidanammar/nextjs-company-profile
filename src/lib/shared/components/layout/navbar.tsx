"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MotionWrapper } from "@/lib/shared/components/animations/motion-wrapper";
import { NAV_ITEMS } from "@/lib/shared/constants/menu";
import { scrollToSection } from "@/lib/shared/utils/scroll-to-section";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 100], [0.7, 1]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  const wrapperClass = scrolled
    ? "sticky top-0 z-50 transition-shadow bg-transparent backdrop-blur-sm"
    : "sticky top-0 z-50 transition-shadow shadow-sm bg-white/90 backdrop-blur-md";

  const logoClass = scrolled ? "text-white" : "text-indigo-600";
  const desktopLinkClass = scrolled
    ? "text-white/90 hover:text-white transition-colors duration-300"
    : "text-gray-700 hover:text-indigo-600 transition-colors duration-300";
  const hamburgerClass = scrolled ? "text-white" : "text-gray-700";

  return (
    <MotionWrapper variant="fadeDown" className={wrapperClass}>
      <motion.div
        style={{ opacity }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 transition-colors duration-300"
      >
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className={`text-xl font-bold transition-colors duration-300 ${logoClass}`}
        >
          Toko Satu
        </button>

        <button
          aria-label="Toggle menu"
          className={`md:hidden transition-colors duration-300 ${hamburgerClass}`}
          onClick={toggleMenu}
          type="button"
        >
          {open ? <X /> : <Menu />}
        </button>

        <ul className="hidden space-x-8 font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.targetId}>
              <a href={`#${item.targetId}`} className={desktopLinkClass}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {open && (
        <MotionWrapper variant="fadeIn">
          <div className="border-t bg-white/95 backdrop-blur-md md:hidden">
            <ul className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
              {NAV_ITEMS.map((item) => (
                <li key={item.targetId}>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(item.targetId, () => setOpen(false))
                    }
                    className="text-left text-gray-700 hover:text-indigo-600"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </MotionWrapper>
      )}
    </MotionWrapper>
  );
};
