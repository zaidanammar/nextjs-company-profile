"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MotionWrapper } from "@/lib/shared/components/animations/motion-wrapper";

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  return (
    <motion.section
      style={{ y }}
      className="flex h-[85vh] flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-6 text-center text-white"
    >
      <section className="flex h-[85vh] flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-6 text-center text-white">
        <MotionWrapper variant="fadeInUp">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
            Everything You Need, All in One Place
          </h1>
        </MotionWrapper>

        <MotionWrapper variant="fadeInUp" delay={0.2}>
          <p className="mb-8 max-w-xl text-lg opacity-90">
            From electronics to daily essentials —{" "}
            <span className="font-semibold text-indigo-200">Toko Satu</span>{" "}
            brings you quality products at affordable prices.
          </p>
        </MotionWrapper>

        <MotionWrapper variant="scaleIn" delay={0.4}>
          <a
            href="#products"
            className="rounded-full bg-white px-6 py-3 font-semibold text-indigo-600 shadow-md transition hover:bg-indigo-50 hover:shadow-lg"
          >
            Browse Products
          </a>
        </MotionWrapper>
      </section>
    </motion.section>
  );
};
