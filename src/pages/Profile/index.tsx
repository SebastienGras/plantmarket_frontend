import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { JSX, useState } from "react";

import AddProduct from "./AddProduct";
import EditProfile from "./EditProfile";
import Products from "./Products";

const ProfilePage = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState<
    "products" | "add" | "profile"
  >("products");

  return (
    <Box
      sx={{ display: "flex", height: "100vh", bgcolor: "background.default" }}
    >
      <Paper
        elevation={3}
        sx={{
          width: 240,
          display: "flex",
          flexDirection: "column",
          pt: 2,
          pb: 2,
          px: 2,
        }}
      >
        <Typography variant="h6" mb={2}>
          Mon espace
        </Typography>
        <Divider />
        <List component="nav">
          <ListItemButton
            selected={selectedTab === "products"}
            onClick={() => setSelectedTab("products")}
          >
            <ListItemText primary="Mes produits" />
          </ListItemButton>
          <ListItemButton
            selected={selectedTab === "add"}
            onClick={() => setSelectedTab("add")}
          >
            <ListItemText primary="Ajouter un produit" />
          </ListItemButton>
          <ListItemButton
            selected={selectedTab === "profile"}
            onClick={() => setSelectedTab("profile")}
          >
            <ListItemText primary="Modifier mon profil" />
          </ListItemButton>
        </List>
      </Paper>

      <Box
        sx={{
          flexGrow: 1,
          p: 4,
          overflowY: "auto",
        }}
      >
        {selectedTab === "products" && <Products />}
        {selectedTab === "add" && <AddProduct />}
        {selectedTab === "profile" && <EditProfile />}
      </Box>
    </Box>
  );
};

export default ProfilePage;
