import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../model/Movie";
import { MoviesData, ErrorPayload } from "../model/actionTypes";

//import type { RootState } from './store';

// Define a type for the slice state
interface MovieState {
  movies: Movie[];
  pageAmount: number;
  currentPage: number;
  loading: boolean;
  error: string;
}

// Define the initial state using that type
const initialState: MovieState = {
  movies: [],
  pageAmount: 0,
  currentPage: 1,
  loading: false,
  error: "",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //getMoviesStarted(state) {
    getMoviesStarted(state, action: PayloadAction<string>) {
      state.loading = true;
      state.movies = [];
      state.pageAmount = 0;
      state.currentPage = 1;
      state.error = "";
    },
    getMoviesSuccess(state, action: PayloadAction<MoviesData>) {
      state.movies = action.payload.movies;
      state.pageAmount = action.payload.pageAmount;
      state.currentPage = action.payload.currentPage;
      state.loading = false;
    },
    getMoviesFailure(state, action: PayloadAction<ErrorPayload>) {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const moviesActions = moviesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.movies

export default moviesSlice;
