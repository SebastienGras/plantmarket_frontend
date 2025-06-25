import { JSX } from "react";

import { useAuth } from "@hooks/useAuth";
import { useGetUserById } from "@hooks/useGetUserById";

import EditUserForm from "./components/EditUserForm";

type EditProfileProps = {
  setSelectedTab: () => void;
};

const EditProfile = ({ setSelectedTab }: EditProfileProps): JSX.Element => {
  const { user: auth } = useAuth();
  const { data: user, isLoading } = useGetUserById(auth?.id!);

  if (isLoading || !user) return <div>Chargement...</div>;

  return <EditUserForm user={user} setSelectedTab={setSelectedTab} />;
};

export default EditProfile;
