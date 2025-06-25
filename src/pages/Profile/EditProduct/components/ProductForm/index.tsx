import { Box, Checkbox, FormControlLabel, Grid, MenuItem } from "@mui/material";
import { JSX } from "react";
import { Field, Form } from "react-final-form";

import SubmitButton from "@components/Form/SubmitButton";
import TextFieldComponent from "@components/Form/TextField";
import { PageTitle } from "@components/Typography/PageTitle";
import { PRODUCT } from "@constants/models";
import { useGetCategories } from "@hooks/useGetCategories";
import { useGetSubcategoriesByCategoryId } from "@pages/Home/hooks/useGetSubcategoriesByCategoryId";
import { zodValidator } from "@utils/validator";

import { useUpdateProduct } from "../../hooks/useUpdateProduct";

import { EditProductSchema } from "./validator";

type EditProductFormProps = {
  product: PRODUCT;
  setSelectedTab: () => void;
};

const EditProductForm = ({
  product,
  setSelectedTab,
}: EditProductFormProps): JSX.Element => {
  const { data: categories } = useGetCategories();

  const { mutate: updateProduct, isPending } = useUpdateProduct({
    productId: product.id,
    setSelectedTab,
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
      <PageTitle text="Modifier un produit" />

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
                    disabled={!updatedSubcategories?.length}
                    isSelect
                  >
                    {updatedSubcategories
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
                        control={<Checkbox {...input} checked={input.value} />}
                        label="Produit actif"
                      />
                    )}
                  </Field>
                </Grid>
                <Grid size={{ xs: 6 }}>
                  <SubmitButton
                    label="Mettre à jour"
                    pendingLabel="Mise à jour en cours..."
                    disabled={submitting || isPending}
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

export default EditProductForm;
