import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  CircularProgress,
} from "@mui/material";
import { useGetCategories } from "../../hooks/useGetCategories";
import { useState } from "react";
import { HOME_FILTERS } from "@pages/Home/constants";

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
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <FormControl fullWidth variant="outlined" sx={{ maxWidth: 300 }}>
          <InputLabel id="category-label">Catégorie</InputLabel>
          <Select
            labelId="category-label"
            value={selectedCategory}
            label="Catégorie"
            onChange={handleCategoryChange}
          >
            <MenuItem value="">
              <em>Toutes</em>
            </MenuItem>
            {categories?.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};

export default CategorySelect;
