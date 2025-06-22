import { JSX } from "react";

import { useGetProductById } from "@hooks/useGetProductById";

import ProductForm from "./components/ProductForm";

type EditProductProps<T extends string> = {
  productId: string | null;
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

const EditProduct = <T extends string>({
  productId,
  setSelectedTab,
  productTab,
}: EditProductProps<T>): JSX.Element => {
  const { data: product, isLoading } = useGetProductById(productId!);

  if (isLoading || !product) return <div>Chargement...</div>;

  return (
    <ProductForm
      product={product}
      setSelectedTab={setSelectedTab}
      productTab={productTab}
    />
  );
};

export default EditProduct;
