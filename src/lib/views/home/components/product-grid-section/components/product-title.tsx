"use client";

import { MotionWrapper } from "@/lib/shared/components/animations/motion-wrapper";

export const ProductTitle = () => {
  return (
    <MotionWrapper variant="fadeInUp" className="text-center mb-10">
      <h2 className="text-3xl font-bold text-indigo-600 md:text-4xl">
        Our Products
      </h2>
      <p className="mt-2 text-gray-600">
        Explore a wide range of products available at Toko Satu.
      </p>
    </MotionWrapper>
  );
};
