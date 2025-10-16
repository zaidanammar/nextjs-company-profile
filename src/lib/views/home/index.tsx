import { CompanyDescriptionSection } from "@/lib/views/home/components/company-description-section";
import { HeroSection } from "@/lib/views/home/components/hero-section";
import { ProductGridSection } from "@/lib/views/home/components/product-grid-section";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CompanyDescriptionSection />
      <ProductGridSection />
    </>
  );
};
