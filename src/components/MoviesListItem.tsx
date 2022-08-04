import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Movie } from "../model/Movie";
import css from "../styles/MoviesListItem.module.css";

const MoviesListItem: React.FC<{ movie: Movie }> = (props) => {
  function imageErrorHandler(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ): void {
    event.currentTarget.src = "/random_poster.jpeg";
  }

  return (
    <>
      <Card
        component={Link}
        to={props.movie.id.toString()}
        className={css.MoviesCard}
      >
        <Typography>{props.movie.title}</Typography>
        <img
          alt="movie poster"
          src={props.movie.poster_path}
          onError={imageErrorHandler}
        />
      </Card>
    </>
  );
};

export default MoviesListItem;
