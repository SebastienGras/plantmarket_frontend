import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { JSX } from "react";
import { Field, Form } from "react-final-form";

import { useGetCategories } from "@hooks/useGetCategories";
import { useGetSubcategoriesByCategoryId } from "@pages/Home/hooks/useGetSubcategoriesByCategoryId";
import { zodValidator } from "@utils/validator";

import { useAddProduct } from "./hooks/useAddProduct";
import { AddProductSchema } from "./validator";

const AddProduct = (): JSX.Element => {
  const { mutate: addProductMutation, isPending } = useAddProduct();

  const onSubmit = (values: any): void => {
    addProductMutation({
      title: values.title,
      price: parseFloat(values.price),
      description: values.description,
      categoryId: values.categoryId,
      subcategoryId: values.subcategoryId,
      stock: parseInt(values.stock, 10),
      actif: values.actif,
    });
  };
  const { data: categories } = useGetCategories();

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Ajouter un produit
      </Typography>

      <Form
        onSubmit={onSubmit}
        validate={zodValidator(AddProductSchema)}
        render={({ handleSubmit, submitting, values }) => {
          const { data: subcategories } =
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useGetSubcategoriesByCategoryId(values.categoryId);
          return (
            <form onSubmit={handleSubmit}>
              <Field name="title">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Titre"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="description">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    label="Description"
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              {categories?.length && (
                <Field name="categoryId">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      select
                      label="Catégorie"
                      fullWidth
                      margin="normal"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    >
                      {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                </Field>
              )}
              {subcategories?.length && (
                <Field name="subcategoryId">
                  {({ input, meta }) => (
                    <TextField
                      {...input}
                      select
                      label="Sous-catégorie"
                      fullWidth
                      margin="normal"
                      error={meta.touched && meta.error}
                      helperText={meta.touched && meta.error}
                    >
                      {subcategories
                        .filter((sub) => sub.categoryId === values.categoryId)
                        .map((sub) => (
                          <MenuItem key={sub.id} value={sub.id}>
                            {sub.name}
                          </MenuItem>
                        ))}
                    </TextField>
                  )}
                </Field>
              )}

              <Field name="price">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="number"
                    label="Prix"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="stock">
                {({ input, meta }) => (
                  <TextField
                    {...input}
                    type="number"
                    label="Stock"
                    fullWidth
                    margin="normal"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              </Field>

              <Field name="actif" type="checkbox">
                {({ input }) => (
                  <FormControlLabel
                    {...input}
                    control={<Checkbox {...input} checked={input.value} />}
                    label="Produit actif"
                  />
                )}
              </Field>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={submitting || isPending}
                sx={{ mt: 2 }}
              >
                {isPending ? "Ajout en cours..." : "Ajouter le produit"}
              </Button>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default AddProduct;
