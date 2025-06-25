import { useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import { JSX, useState } from "react";

import EditProductPage from "@pages/Profile/EditProduct";

import AddProduct from "./AddProduct";
import EditProfile from "./EditProfile";
import Products from "./Products";
import TabPanel from "./TabPanel";

const a11yProps = (index: number): { id: string; "aria-controls": string } => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const Profil = (): JSX.Element => {
  const [tab, setTab] = useState(0);
  const [productId, setProductId] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleChangeTab = (_: React.SyntheticEvent, newTab: number): void => {
    setTab(newTab);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100%",
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        variant="scrollable"
        value={tab}
        onChange={handleChangeTab}
        aria-label="Profile Tabs"
        sx={{
          borderRight: isMobile ? "none" : 1,
          borderBottom: isMobile ? 1 : "none",
          borderColor: "divider",
        }}
      >
        <Tab label="Mes Produits" {...a11yProps(0)} />
        <Tab label="Ajouter un produit" {...a11yProps(1)} />
        <Tab label="Modifier mon profile" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tab} index={0}>
        <Products
          setProductId={setProductId}
          setSelectedTab={() => setTab(3)}
        />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AddProduct setSelectedTab={() => setTab(0)} />
      </TabPanel>
      <TabPanel value={tab} index={2}>
        <EditProfile setSelectedTab={() => setTab(0)} />
      </TabPanel>
      <TabPanel value={tab} index={3}>
        <EditProductPage
          setSelectedTab={() => setTab(0)}
          productId={productId}
        />
      </TabPanel>
    </Box>
  );
};

export default Profil;
