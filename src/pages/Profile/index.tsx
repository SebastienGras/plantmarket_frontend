import React from "react";
import {
  Container,
  Box,
  Avatar,
  Typography,
  Paper,
  Button,
} from "@mui/material";

const user = {
  name: "Thomas Plant",
  email: "thomas@example.com",
  avatarUrl: "https://i.pravatar.cc/150?img=3",
};

const Profile: React.FC = () => (
  <Container maxWidth="sm" sx={{ mt: 8 }}>
    <Paper elevation={3} sx={{ p: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={user.avatarUrl}
          alt={user.name}
          sx={{ width: 96, height: 96, mb: 2 }}
        />
        <Typography variant="h5" gutterBottom>
          {user.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {user.email}
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          Edit Profile
        </Button>
      </Box>
    </Paper>
  </Container>
);

export default Profile;
