import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { JSX } from "react";

const Footer = (): JSX.Element => {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", mt: 6 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              🌿 PlantMarket
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vente de plantes et accessoires écoresponsables.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Navigation
            </Typography>
            <Stack spacing={1}>
              <Link href="/products" underline="hover">
                Nos Plantes
              </Link>
              <Link href="/about" underline="hover">
                À propos
              </Link>
              <Link href="/contact" underline="hover">
                Contact
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Informations
            </Typography>
            <Stack spacing={1}>
              <Link href="/legal" underline="hover">
                Mentions légales
              </Link>
              <Link href="/privacy" underline="hover">
                Politique de confidentialité
              </Link>
              <Link href="/terms" underline="hover">
                CGV
              </Link>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Suivez-nous
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="https://facebook.com" target="_blank" rel="noopener">
                <Facebook />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener">
                <Instagram />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener">
                <Twitter />
              </Link>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} PlantMarket. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
