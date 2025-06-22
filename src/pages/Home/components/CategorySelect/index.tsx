import { SelectChangeEvent } from "@mui/material";
import { JSX, useState } from "react";

import SelectComponent from "@components/Select";
import { HOME_FILTERS } from "@pages/Home/constants";

import { useGetCategories } from "../../hooks/useGetCategories";

const CategorySelect = ({
  query,
  setQuery,
}: {
  query: HOME_FILTERS;
  setQuery: (query: HOME_FILTERS) => void;
}): JSX.Element => {
  const { data: categories, isLoading } = useGetCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (event: SelectChangeEvent): void => {
    setSelectedCategory(event.target.value);
    setQuery({ ...query, categoryId: event.target.value, subcategoryId: "" });
  };

  return (
    <SelectComponent
      label="Catégorie"
      handleChange={handleCategoryChange}
      datas={categories}
      isLoading={isLoading}
      selected={selectedCategory}
    />
  );
};

export default CategorySelect;
