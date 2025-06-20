import { Container, AppBar, Toolbar, Typography } from "@mui/material";
import { LayoutProps } from "../types";

const PublicLayout = ({ children }: LayoutProps) => (
  <>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">PlantSwap</Typography>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md" sx={{ mt: 4 }}>
      {children}
    </Container>
  </>
);

export default PublicLayout;
