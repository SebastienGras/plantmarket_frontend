import { Box, Button, Typography } from "@mui/material";
import { JSX } from "react";
import { Form } from "react-final-form";

import TextFieldComponent from "@components/Form/TextField";
import { USER } from "@constants/models";
import { zodValidator } from "@utils/validator";

import { useUpdateUser } from "../../hooks/useUpdateUser";

import { EditUserSchema } from "./validator";

type EditUserFormProps<T extends string> = {
  user: USER;
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

const EditUserForm = <T extends string>({
  user,
  setSelectedTab,
  productTab,
}: EditUserFormProps<T>): JSX.Element => {
  const { mutate: updateUser, isPending } = useUpdateUser({
    userId: user.id,
    setSelectedTab,
    productTab,
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
      <Typography variant="h5" gutterBottom>
        Modifier utilisateur
      </Typography>

      <Form
        onSubmit={onSubmit}
        initialValues={user}
        validate={zodValidator(EditUserSchema)}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <TextFieldComponent name="firstname" label="Prénom" />
              <TextFieldComponent name="lastname" label="Nom" />
              <TextFieldComponent name="email" label="Email" type="email" />
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

export default EditUserForm;
