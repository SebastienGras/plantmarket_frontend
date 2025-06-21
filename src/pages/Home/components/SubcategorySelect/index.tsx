import { SelectChangeEvent } from "@mui/material";
import { useGetSubcategoriesByCategoryId } from "../../hooks/useGetSubcategoriesByCategoryId";
import { HOME_FILTERS } from "@pages/Home/constants";
import SelectComponent from "@components/Select";

const SubcategorySelect = ({
  categoryId,
  query,
  setQuery,
}: {
  categoryId: string;
  query: HOME_FILTERS;
  setQuery: (query: HOME_FILTERS) => void;
}) => {
  const { data: subcategories, isLoading } =
    useGetSubcategoriesByCategoryId(categoryId);

  const handleSubcategoryChange = (event: SelectChangeEvent) => {
    setQuery({ ...query, subcategoryId: event.target.value });
  };

  return (
    <SelectComponent
      label="Sous-catégorie"
      handleChange={handleSubcategoryChange}
      datas={subcategories}
      isLoading={isLoading}
      selected={query.subcategoryId || ""}
    />
  );
};

export default SubcategorySelect;
