import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";
import css from "../styles/Header.module.css";

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            className={css.LogoButton}
            component={Link}
            to={"/"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <LocalMoviesIcon
              sx={{
                mr: 2,
                verticalAlign: "sub",
              }}
            />
            Movies
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
