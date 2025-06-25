import { JSX } from "react";

import { useGetProductById } from "@hooks/useGetProductById";

import ProductForm from "./components/ProductForm";

type EditProductProps = {
  productId: string | null;
  setSelectedTab: () => void;
};

const EditProduct = ({
  productId,
  setSelectedTab,
}: EditProductProps): JSX.Element => {
  const { data: product, isLoading } = useGetProductById(productId!);

  if (isLoading || !product) return <div>Chargement...</div>;

  return <ProductForm product={product} setSelectedTab={setSelectedTab} />;
};

export default EditProduct;
