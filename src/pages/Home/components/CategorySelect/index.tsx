import { SelectChangeEvent } from "@mui/material";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useState } from "react";
import { HOME_FILTERS } from "@pages/Home/constants";
import SelectComponent from "@components/Select";

const CategorySelect = ({
  query,
  setQuery,
}: {
  query: HOME_FILTERS;
  setQuery: (query: HOME_FILTERS) => void;
}) => {
  const { data: categories, isLoading } = useGetCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (event: SelectChangeEvent) => {
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
