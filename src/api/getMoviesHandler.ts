import { Movie } from "../model/Movie";
import { MoviesData } from "../model/actionTypes";
import { FetchMoviesResponseData } from "../model/actionTypes";

const PAGE_ITEM_LIMIT = 12;

function searchParamCreation(searchQuery: string): URLSearchParams {
  //db searchquery creation:
  let params = new URLSearchParams(searchQuery);
  if (params.get("search") != null) {
    params.set("searchBy", "title");
  }
  if (params.get("sortOrder") != null && params.get("sortOrder") === "desc") {
    params.set("sortBy", "title");
  } else {
    params.set("sortOrder", "asc");
    params.set("sortBy", "title");
  }

  if (params.get("page") != null) {
    //parsing "page" search query param into an Integer and substracting "1" since pages start with 1 and not 0
    let offsetMultiplier = parseInt(params.get("page")!) - 1;
    if (isNaN(offsetMultiplier) || offsetMultiplier < 0) {
      offsetMultiplier = 0;
    }

    params.set("offset", (offsetMultiplier * PAGE_ITEM_LIMIT).toString());
  }
  params.set("limit", PAGE_ITEM_LIMIT.toString());

  return params;
}

export default function handler(searchQuery: string = ""): Promise<MoviesData> {
  const params: URLSearchParams = searchParamCreation(searchQuery);

  return fetch(`https://reactjs-cdp.herokuapp.com/movies?${params.toString()}`)
    .then((response) => response.json())
    .then((data: FetchMoviesResponseData) => {
      const movies: Movie[] = data.data;
      const pageAmount: number = Math.ceil(data.total / PAGE_ITEM_LIMIT);

      let currentPage: number = 1;
      const pageNumber = parseInt(params.get("page")!);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        currentPage = pageNumber;
      }

      return { movies, pageAmount, currentPage };
    })
    .catch((error) => {
      throw new Error(error.message || "Could not fetch movies.");
    });
}
