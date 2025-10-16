"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MotionWrapper } from "@/lib/components/animations/motion-wrapper";
import { NAV_ITEMS } from "@/lib/constants/menu";
import { scrollToSection } from "@/lib/utils/scroll-to-section";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  const background = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0.8)", "rgba(255,255,255,1)"],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <MotionWrapper
      variant="fadeDown"
      className={`sticky top-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <motion.div
        style={{ background }}
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <button
          type="button"
          onClick={() => scrollToSection("top")}
          className="text-xl font-bold text-indigo-600"
        >
          Toko Satu
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          className="text-gray-700 md:hidden"
          onClick={toggleMenu}
        >
          {open ? <X /> : <Menu />}
        </button>

        <ul className="hidden space-x-8 font-medium text-gray-700 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.targetId}>
              <a href={`#${item.targetId}`} className="hover:text-indigo-600">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {open && (
        <MotionWrapper variant="fadeIn">
          <div className="border-t bg-white md:hidden">
            <ul className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
              {NAV_ITEMS.map((item) => (
                <li key={item.targetId}>
                  <button
                    type="button"
                    onClick={() =>
                      scrollToSection(item.targetId, () => setOpen(false))
                    }
                    className="text-left hover:text-indigo-600"
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
}
