import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../model/Movie";
import { ErrorPayload } from "../model/actionTypes";

//import type { RootState } from './store';

// Define a type for the slice state
interface MovieDetailState {
  movieDetail: Movie | null;
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: MovieDetailState = {
  movieDetail: null,
  loading: false,
  error: "",
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {
    //getMovieDetailsStarted(state) {
    getMovieDetailsStarted(state, action: PayloadAction<string>) {
      state.movieDetail = null;
      state.loading = true;
      state.error = "";
    },
    getMovieDetailsSuccess(state, action: PayloadAction<Movie>) {
      state.movieDetail = action.payload;
      state.loading = false;
    },
    getMovieDetailsFailure(state, action: PayloadAction<ErrorPayload>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const movieDetailsActions = movieDetailsSlice.actions;

export default movieDetailsSlice;
