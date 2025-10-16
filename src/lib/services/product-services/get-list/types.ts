export type Product = {
  id: string;
  name: string | null;
  image?: string;
};

export type ImageMap = {
  id: Array<string>;
  image: string;
};

export type GetListProductResponse = Array<Product>;
export type GetListImageMapResponse = Array<ImageMap>;
