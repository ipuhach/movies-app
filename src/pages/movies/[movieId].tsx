import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import css from "../../styles/MovieItem.module.css";
import { Box, Button, CircularProgress } from "@mui/material";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchMovieDetails } from "../../app/fetchActions";
import ErrorModal from "../../components/ErrorModal";

function Detail() {
  const movie = useAppSelector((state) => state.movieDetails.movieDetail);
  const isLoading = useAppSelector((state) => state.movieDetails.loading);
  const error = useAppSelector((state) => state.movieDetails.error);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId!));
  }, [dispatch, movieId]);

  function backButtonHandler(): void {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  function imageErrorHandler(
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ): void {
    event.currentTarget.src = "/random_poster.jpeg";
  }

  return (
    <>
      <Button
        variant="text"
        className={css.backButton}
        onClick={backButtonHandler}
      >
        Go Back
      </Button>

      {isLoading ? (
        <Box sx={{ width: 1 }}>
          <CircularProgress className={css.loader} />
        </Box>
      ) : movie?.id ? (
        <div className={css.movieContainer}>
          <div>
            <img
              src={movie.poster_path}
              alt="Movie poster"
              onError={imageErrorHandler}
            />
          </div>
          <div>
            <h1>{movie.title}</h1>
            <h4>{movie.tagline}</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      ) : (
        <div>No movie found</div>
      )}
      {error && <ErrorModal errorMessage={error} />}
    </>
  );
}

export default Detail;
