import { Movie } from "../model/Movie";
import MoviesListItem from "./MoviesListItem";
import css from "../styles/MoviesList.module.css";
import { Pagination, Stack } from "@mui/material";

const MoviesList: React.FC<{
  movies: Movie[];
  currentPage: number;
  pageAmount: number;
  handlePaginationChange: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
}> = (props) => {
  return (
    <div>
      {props.movies.length > 0 ? (
        <>
          <div className={css.MoviesCardContainer}>
            {props.movies.map((movie) => (
              <MoviesListItem movie={movie} key={movie.id} />
            ))}
          </div>
          {props.pageAmount > 1 && (
            <Stack className={css.paginator} spacing={2}>
              <Pagination
                color="primary"
                count={props.pageAmount}
                page={props.currentPage}
                onChange={props.handlePaginationChange}
              />
            </Stack>
          )}
        </>
      ) : (
        <div className={css.error}>No movies found</div>
      )}
    </div>
  );
};

export default MoviesList;
