import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  CircularProgress,
} from "@mui/material";
import { useGetSubcategoriesByCategoryId } from "../../hooks/useGetSubcategoriesByCategoryId";
import { HOME_FILTERS } from "@pages/Home/constants";

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
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <FormControl fullWidth variant="outlined" sx={{ maxWidth: 300 }}>
          <InputLabel id="category-label">Sous Catégorie</InputLabel>
          <Select
            labelId="category-label"
            value={query.subcategoryId || ""}
            label="Sous Catégorie"
            onChange={handleSubcategoryChange}
          >
            <MenuItem value="">
              <em>Toutes</em>
            </MenuItem>
            {subcategories?.map((subcategory) => (
              <MenuItem key={subcategory.id} value={subcategory.id}>
                {subcategory.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default SubcategorySelect;
