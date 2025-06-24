import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import { JSX } from "react";
import { Field, Form } from "react-final-form";

import TextFieldComponent from "@components/Form/TextField";
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
              <TextFieldComponent name="title" label="Titre" />

              <TextFieldComponent
                name="description"
                label="Description"
                multiline
              />

              {categories?.length && (
                <TextFieldComponent
                  name="categoryId"
                  label="Catégorie"
                  isSelect
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </MenuItem>
                  ))}
                </TextFieldComponent>
              )}
              {subcategories?.length && (
                <TextFieldComponent
                  name="subcategoryId"
                  label="Sous-catégorie"
                  isSelect
                >
                  {subcategories
                    .filter((sub) => sub.categoryId === values.categoryId)
                    .map((sub) => (
                      <MenuItem key={sub.id} value={sub.id}>
                        {sub.name}
                      </MenuItem>
                    ))}
                </TextFieldComponent>
              )}

              <TextFieldComponent name="price" label="Prix" type="number" />
              <TextFieldComponent name="stock" label="Stock" type="number" />

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
