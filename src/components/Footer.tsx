import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <Container
        maxWidth="md"
        sx={{ textAlign: "center", color: "#444", py: 5 }}
      >
        <Typography>
          {new Date().getFullYear()} © Fake Copyright Thingy Corporation. No
          Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
