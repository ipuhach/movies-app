import { Movie } from "../model/Movie";

export default function handler(movieId: string): Promise<Movie> {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies/${movieId}`)
    .then((response) => response.json())
    .then((data: Movie) => data)
    .catch((error) => {
      throw new Error(error.message || "Could not fetch movie.");
    });
}
