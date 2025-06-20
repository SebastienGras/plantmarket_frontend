export type PRODUCT = {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  subcategoryId: string;
  sellerId: string;
  actif: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PRODUCT_WITH_CATEGORY = PRODUCT & {
  categoryName: string;
  subcategoryName: string;
};
