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

import { PRODUCT } from "@constants/models";
import { useGetCategories } from "@hooks/useGetCategories";
import { useGetSubcategoriesByCategoryId } from "@pages/Home/hooks/useGetSubcategoriesByCategoryId";
import { zodValidator } from "@utils/validator";

import { useUpdateProduct } from "../../hooks/useUpdateProduct";

import { EditProductSchema } from "./validator";

type EditProductFormProps<T extends string> = {
  product: PRODUCT;
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

const EditProductForm = <T extends string>({
  product,
  setSelectedTab,
  productTab,
}: EditProductFormProps<T>): JSX.Element => {
  const { data: categories } = useGetCategories();

  const { mutate: updateProduct, isPending } = useUpdateProduct({
    productId: product.id,
    setSelectedTab,
    productTab,
  });

  const onSubmit = (values: any): void => {
    updateProduct({
      id: product.id,
      title: values.title,
      description: values.description,
      price: parseFloat(values.price),
      stock: parseInt(values.stock, 10),
      actif: values.actif,
      categoryId: values.categoryId,
      subcategoryId: values.subcategoryId,
    });
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Modifier le produit
      </Typography>

      <Form
        onSubmit={onSubmit}
        initialValues={{
          ...product,
          actif: Boolean(product.actif),
        }}
        validate={zodValidator(EditProductSchema)}
        render={({ handleSubmit, submitting, values }) => {
          const { data: updatedSubcategories } =
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
                    {categories?.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>

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
                    {updatedSubcategories?.map((sub) => (
                      <MenuItem key={sub.id} value={sub.id}>
                        {sub.name}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </Field>

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
                {isPending ? "Mise à jour en cours..." : "Mettre à jour"}
              </Button>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default EditProductForm;
