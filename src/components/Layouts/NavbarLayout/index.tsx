import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import { JSX } from "react";

type ListOption<T extends string> = {
  value: T;
  label: string;
};

type NavbarLayoutProps<T extends string> = {
  selectedTab: string;
  setSelectedTab: (tab: T) => void;
  tabs: ListOption<T>[];
  title: string;
};

const NavbarLayout = <T extends string>({
  selectedTab,
  setSelectedTab,
  tabs,
  title,
}: NavbarLayoutProps<T>): JSX.Element => {
  return (
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
        {title}
      </Typography>
      <Divider />
      <List component="nav">
        {tabs.map((tab) => (
          <ListItemButton
            key={tab.value}
            selected={selectedTab === tab.value}
            onClick={() => setSelectedTab(tab.value)}
          >
            <ListItemText primary={tab.label} />
          </ListItemButton>
        ))}
      </List>
    </Paper>
  );
};

export default NavbarLayout;
