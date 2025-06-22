import { JSX } from "react";
import { useParams } from "react-router-dom";

import { useGetProductById } from "@hooks/useGetProductById";

import ProductForm from "./components/ProductForm";

const EditProductPage = (): JSX.Element => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductById(id!);

  if (isLoading || !product) return <div>Chargement...</div>;

  return <ProductForm product={product} />;
};

export default EditProductPage;
