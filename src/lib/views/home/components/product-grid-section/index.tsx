import { getProductList } from "@/lib/services/product-services/get-list";
import { ProductCard } from "@/lib/views/home/components/product-grid-section/components/product-card";
import { ProductTitle } from "@/lib/views/home/components/product-grid-section/components/product-title";

export const ProductGridSection = async () => {
  const products = await getProductList();

  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-20">
      <ProductTitle />

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {(products ?? []).map(
          (product) =>
            product.name && <ProductCard key={product.id} product={product} />,
        )}
      </div>
    </section>
  );
};
