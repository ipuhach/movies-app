import { Movie } from "./Movie";

export interface MoviesData {
  movies: Movie[];
  pageAmount: number;
  currentPage: number;
}
export interface FetchMoviesResponseData {
  data: Movie[];
  total: number;
}
