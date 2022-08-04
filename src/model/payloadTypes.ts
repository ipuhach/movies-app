import { Movie } from "./Movie";

export interface MoviesPayload {
  movies: Movie[];
  pageAmount: number;
  currentPage: number;
}

export interface ErrorPayload {
  message: string;
}
