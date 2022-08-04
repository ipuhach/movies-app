import React, { PropsWithChildren } from "react";
import Container from "@mui/material/Container";
import Header from "./Header";
import Footer from "./Footer";
import css from "../styles/Layout.module.css";
import { Box } from "@mui/material";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <Box className={css.LayoutContainer}>
      <Header />

      <Container className={css.Content} maxWidth="md">
        {props.children}
      </Container>

      <Footer />
    </Box>
  );
};
export default Layout;
