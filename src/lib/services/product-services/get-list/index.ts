import { apiClient } from "@/lib/services/api-client";
import type {
  GetListImageMapResponse,
  GetListProductResponse,
} from "@/lib/services/product-services/get-list/types";

export async function getProductList(): Promise<GetListProductResponse> {
  const [productData, imageData] = await Promise.all([
    apiClient<GetListProductResponse>("/product.json"),
    apiClient<GetListImageMapResponse>("/image.json"),
  ]);

  return productData.map((product) => {
    const imageItem = imageData.find((img) => img.id.includes(product.id));
    return { ...product, image: imageItem?.image ?? "" };
  });
}
