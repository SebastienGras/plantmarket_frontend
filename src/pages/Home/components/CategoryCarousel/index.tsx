import { JSX } from "react";

import Carousel from "@components/Carousel";
import { PageTitle } from "@components/Typography/PageTitle";
import { useGetCategories } from "@hooks/useGetCategories";

import CategoryCarouselItem from "./CategoryCarouselItem";

const CategoryCarousel = (): JSX.Element => {
  const { data: categories } = useGetCategories();

  if (!categories || categories.length === 0) {
    return <></>;
  }

  return (
    <>
      <PageTitle text="Rechercher par catégorie" />
      <Carousel
        datas={categories}
        renderItem={(category) => <CategoryCarouselItem {...category} />}
      />
    </>
  );
};

export default CategoryCarousel;
