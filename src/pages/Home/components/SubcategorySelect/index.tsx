import { SelectChangeEvent } from "@mui/material";
import { JSX } from "react";

import SelectComponent from "@components/Select";
import { HOME_FILTERS } from "@pages/Home/constants";

import { useGetSubcategoriesByCategoryId } from "../../hooks/useGetSubcategoriesByCategoryId";

const SubcategorySelect = ({
  categoryId,
  query,
  setQuery,
  disabled,
}: {
  categoryId?: string | undefined;
  query: HOME_FILTERS;
  disabled: boolean;
  setQuery: (query: HOME_FILTERS) => void;
}): JSX.Element => {
  const { data: subcategories, isLoading } =
    useGetSubcategoriesByCategoryId(categoryId);

  const handleSubcategoryChange = (event: SelectChangeEvent): void => {
    setQuery({ ...query, subcategoryId: event.target.value });
  };

  return (
    <SelectComponent
      label="Sous-catégorie"
      handleChange={handleSubcategoryChange}
      datas={subcategories}
      isLoading={isLoading}
      selected={query.subcategoryId || ""}
      disabled={disabled}
    />
  );
};

export default SubcategorySelect;
