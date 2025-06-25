import { Box, Grid } from "@mui/material";
import { JSX } from "react";
import { Form } from "react-final-form";

import SubmitButton from "@components/Form/SubmitButton";
import TextFieldComponent from "@components/Form/TextField";
import { PageTitle } from "@components/Typography/PageTitle";
import { USER } from "@constants/models";
import { zodValidator } from "@utils/validator";

import { useUpdateUser } from "../../hooks/useUpdateUser";

import { EditUserSchema } from "./validator";

type EditUserFormProps = {
  user: USER;
  setSelectedTab: () => void;
};

const EditUserForm = ({
  user,
  setSelectedTab,
}: EditUserFormProps): JSX.Element => {
  const { mutate: updateUser, isPending } = useUpdateUser({
    userId: user.id,
    setSelectedTab,
  });

  const onSubmit = (values: any): void => {
    updateUser({
      id: user.id,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
    });
  };

  return (
    <Box>
      <PageTitle text="Modifier l'utilisateur" />

      <Form
        onSubmit={onSubmit}
        initialValues={user}
        validate={zodValidator(EditUserSchema)}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} mb={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent name="firstname" label="Prénom" />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextFieldComponent name="lastname" label="Nom" />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <TextFieldComponent name="email" label="Email" type="email" />
                </Grid>
              </Grid>
              <SubmitButton
                label="Mettre à jour"
                disabled={submitting || isPending}
                pendingLabel="Mise à jour en cours..."
              />
            </form>
          );
        }}
      />
    </Box>
  );
};

export default EditUserForm;
