import { call, fork, put, takeEvery, takeLatest } from "redux-saga/effects";

import { moviesActions } from "./moviesSlice";
import { movieDetailsActions } from "./movieDetailsSlice";
import getMovieDetailsHandler from "../api/getMovieDetailsHandler";
import getMoviesHandler from "../api/getMoviesHandler";
import { Movie } from "../model/Movie";
import { MoviesData } from "../model/actionTypes";
import { PayloadAction } from "@reduxjs/toolkit";

function* fetchMovies(action: PayloadAction<string>) {
  try {
    const moviesData: MoviesData = yield call(getMoviesHandler, action.payload);
    yield put(moviesActions.getMoviesSuccess(moviesData));
  } catch (error) {
    let errorMessage: string = "Unknown Error!";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    yield put(moviesActions.getMoviesFailure({ error: errorMessage }));
  }
}

function* getMoviesSaga() {
  yield takeLatest(moviesActions.getMoviesStarted.type, fetchMovies);
}

function* fetchMovieDetails(action: PayloadAction<string>) {
  try {
    const movieData: Movie = yield call(getMovieDetailsHandler, action.payload);
    yield put(movieDetailsActions.getMovieDetailsSuccess(movieData));
  } catch (error) {
    let errorMessage: string = "Unknown Error!";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    yield put(
      movieDetailsActions.getMovieDetailsFailure({ error: errorMessage })
    );
  }
}

function* getMovieDetailsSaga() {
  yield takeEvery(
    movieDetailsActions.getMovieDetailsStarted.type,
    fetchMovieDetails
  );
}

const movieSagas = [fork(getMoviesSaga), fork(getMovieDetailsSaga)];

export default movieSagas;
