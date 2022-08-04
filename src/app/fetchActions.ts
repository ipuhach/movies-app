/*
import { moviesActions } from "./moviesSlice";
import { movieDetailsActions } from "./movieDetailsSlice";

import { Movie } from "../model/Movie";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import getMovieDetailsHandler from "../api/getMovieDetailsHandler";
import getMoviesHandler from "../api/getMoviesHandler";
import { MoviesData } from "../model/actionTypes";

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

export const fetchMoviesData = (searchQuery: string): AppThunk => {
  return (dispatch) => {
    dispatch(moviesActions.getMoviesStarted());

    getMoviesHandler(searchQuery)
      .then((data: MoviesData) => {
        dispatch(moviesActions.getMoviesSuccess(data));
      })
      .catch((error) => {
        dispatch(moviesActions.getMoviesFailure({ error: error.message }));
      });
  };
};

export const fetchMovieDetails = (movieId: string): AppThunk => {
  return (dispatch) => {
    dispatch(movieDetailsActions.getMovieDetailsStarted());

    getMovieDetailsHandler(movieId)
      .then((data: Movie) => {
        dispatch(movieDetailsActions.getMovieDetailsSuccess(data));
      })
      .catch((error) => {
        dispatch(
          movieDetailsActions.getMovieDetailsFailure({ error: error.message })
        );
      });
  };
};
*/
export {};
