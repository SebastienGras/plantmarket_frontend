export type PRODUCT = {
  id: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  subcategoryId: string;
  sellerId?: string;
  actif: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type PRODUCT_WITH_CATEGORY = PRODUCT & {
  categoryName: string;
  subcategoryName: string;
};

export type CATEGORY = {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl: string;
};

export type SUBCATEGORY = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  description: string;
};

export type USER = {
  id: string;
  token: string;
  email: string;
  firstname: string;
  lastname: string;
  phoneNumber?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  country?: string;
  createdAt?: Date;
  updatedAt?: Date;
  isSeller?: boolean;
};
