import { Box } from "@mui/material";
import { JSX, useState } from "react";

import NavbarLayout from "@components/Layouts/NavbarLayout";
import EditProductPage from "@pages/Profile/EditProduct";

import AddProduct from "./AddProduct";
import EditProfile from "./EditProfile";
import Products from "./Products";

type ProfilePageTabs = "products" | "add" | "profile" | "edit";
const ProfilePage = (): JSX.Element => {
  const [productId, setProductId] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<ProfilePageTabs>("products");

  const TABS: { value: ProfilePageTabs; label: string }[] = [
    { value: "products", label: "Mes produits" },
    { value: "add", label: "Ajouter un produit" },
    { value: "profile", label: "Modifier mon profil" },
  ];

  return (
    <Box
      sx={{ display: "flex", height: "100vh", bgcolor: "background.default" }}
    >
      <NavbarLayout<ProfilePageTabs>
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tabs={TABS}
        title="Mon espace"
      />
      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          overflowY: "auto",
        }}
      >
        {selectedTab === "products" && (
          <Products
            setProductId={setProductId}
            setSelectedTab={setSelectedTab}
            editTab={"edit" as ProfilePageTabs}
          />
        )}
        {selectedTab === "add" && <AddProduct />}
        {selectedTab === "profile" && <EditProfile />}
        {selectedTab === "edit" && (
          <EditProductPage
            setSelectedTab={setSelectedTab}
            productId={productId}
            productTab={"products" as ProfilePageTabs}
          />
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
