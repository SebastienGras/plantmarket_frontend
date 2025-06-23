import { JSX } from "react";

import { useAuth } from "@hooks/useAuth";
import { useGetUserById } from "@hooks/useGetUserById";

import EditUserForm from "./components/EditUserForm";

type EditProfileProps<T extends string> = {
  setSelectedTab: (tab: T) => void;
  productTab: T;
};

const EditProfile = <T extends string>({
  setSelectedTab,
  productTab,
}: EditProfileProps<T>): JSX.Element => {
  const { user: auth } = useAuth();
  const { data: user, isLoading } = useGetUserById(auth?.id!);

  if (isLoading || !user) return <div>Chargement...</div>;

  return (
    <EditUserForm
      user={user}
      setSelectedTab={setSelectedTab}
      productTab={productTab}
    />
  );
};

export default EditProfile;
