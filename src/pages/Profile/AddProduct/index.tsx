import { Box, Checkbox, FormControlLabel, Grid, MenuItem } from "@mui/material";
import { JSX } from "react";
import { Field, Form } from "react-final-form";

import SubmitButton from "@components/Form/SubmitButton";
import TextFieldComponent from "@components/Form/TextField";
import { PageTitle } from "@components/Typography/PageTitle";
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
      <PageTitle text="Ajouter un produit" />

      <Form
        onSubmit={onSubmit}
        validate={zodValidator(AddProductSchema)}
        render={({ handleSubmit, submitting, values }) => {
          const { data: subcategories } =
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useGetSubcategoriesByCategoryId(values.categoryId);
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} mb={4}>
                <Grid size={{ xs: 12 }}>
                  <TextFieldComponent name="title" label="Titre" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextFieldComponent
                    name="description"
                    label="Description"
                    multiline
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent
                    name="categoryId"
                    label="Catégorie"
                    isSelect
                  >
                    {categories?.map((cat) => (
                      <MenuItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </MenuItem>
                    ))}
                  </TextFieldComponent>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent
                    name="subcategoryId"
                    label="Sous-catégorie"
                    disabled={!subcategories?.length}
                    isSelect
                  >
                    {subcategories
                      ?.filter((sub) => sub.categoryId === values.categoryId)
                      .map((sub) => (
                        <MenuItem key={sub.id} value={sub.id}>
                          {sub.name}
                        </MenuItem>
                      ))}
                  </TextFieldComponent>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent name="price" label="Prix" type="number" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent
                    name="stock"
                    label="Stock"
                    type="number"
                  />
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <Field name="actif" type="checkbox">
                    {({ input }) => (
                      <FormControlLabel
                        {...input}
                        control={<Checkbox {...input} checked={input.value} />}
                        label="Produit actif"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <SubmitButton
                    disabled={submitting || isPending}
                    label="Ajouter le produit"
                    pendingLabel="Ajout en cours..."
                  />
                </Grid>
              </Grid>
            </form>
          );
        }}
      />
    </Box>
  );
};

export default AddProduct;
