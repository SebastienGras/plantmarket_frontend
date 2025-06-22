import { HOME_FILTERS } from "./constants";

export const buildProductSearchUrl = ({
  search,
  categoryId,
  subcategoryId,
}: HOME_FILTERS): string => {
  const params = new URLSearchParams();

  params.set("actif", "true");

  if (search) {
    params.set("search", search);
  }

  if (categoryId) {
    params.set("categoryId", categoryId);
  }

  if (subcategoryId) {
    params.set("subcategoryId", subcategoryId);
  }

  return `/products?${params.toString()}`;
};
