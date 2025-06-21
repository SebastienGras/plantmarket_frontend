import { useParams } from "react-router-dom";
import ProductForm from "./components/ProductForm"; // formulaire réutilisable
import { useGetProductById } from "@hooks/useGetProductById";

const EditProductPage = () => {
  const { id } = useParams();
  console.log("EditProductPage id:", id);
  const { data: product, isLoading } = useGetProductById(id!);

  if (isLoading || !product) return <div>Chargement...</div>;

  return <ProductForm product={product} />;
};

export default EditProductPage;
