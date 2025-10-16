"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/services/product-services/get-list/types";
import Modal from "@/lib/shared/components/ui/modal";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition cursor-pointer"
        onClick={() => setOpen(true)}
        onKeyDown={() => setOpen(true)}
        role="alert"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-t-xl">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name ?? ""}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
              No Image
            </div>
          )}
        </div>
        <div className="p-4 text-center">
          <p className="font-semibold text-gray-800">{product.name}</p>
          <p className="text-sm text-gray-500">ID: {product.id}</p>
        </div>
      </div>

      {open && (
        <Modal image={product.image ?? ""} onClose={() => setOpen(false)} />
      )}
    </>
  );
};
