"use client";

import Image from "next/image";
import { MotionWrapper } from "@/lib/shared/components/animations/motion-wrapper";

export const CompanyDescriptionSection = () => {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-16"
    >
      <MotionWrapper
        variant="fadeInUp"
        className="w-full md:w-1/2 flex justify-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80"
          alt="Toko Satu Company"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg object-cover"
        />
      </MotionWrapper>

      <MotionWrapper
        variant="fadeInUp"
        delay={0.2}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="mb-4 text-3xl font-bold text-indigo-600 md:text-4xl">
          About Toko Satu
        </h2>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Founded with a mission to make high-quality products accessible for
          everyone,{" "}
          <span className="font-semibold text-indigo-600">Toko Satu</span>{" "}
          brings together reliability and affordability. We believe in
          simplifying your shopping experience by connecting you directly to the
          things you need most — fast, secure, and hassle-free.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether it’s home essentials, electronics, or lifestyle items, we’re
          here to make every purchase effortless and enjoyable. Your trust is
          our top priority.
        </p>
      </MotionWrapper>
    </section>
  );
};
