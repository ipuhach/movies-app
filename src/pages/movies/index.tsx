import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import css from "../../styles/Movies.module.css";
import MoviesList from "../../components/MoviesList";
import FilterTopBar from "../../components/FilterTopBar";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchMoviesData } from "../../app/fetchActions";

function MoviesListPage() {
  const movies = useAppSelector((state) => state.movies.movies);
  const loading = useAppSelector((state) => state.movies.loading);
  const pageAmount = useAppSelector((state) => state.movies.pageAmount);
  const currentPage = useAppSelector((state) => state.movies.currentPage);

  const dispatch = useAppDispatch();

  //topbar filter states
  const [searchTextFilter, setSearchTextFilter] = useState<string>("");
  //search params state
  let [searchParams, setSearchParams] = useSearchParams();
  const sortByFilter = searchParams.get("sortOrder") === "desc" ? false : true;

  useEffect(() => {
    //reinitiating text from searchparams on page enter;
    if (searchParams.get("search")) {
      setSearchTextFilter(searchParams.get("search")!);
    }

    dispatch(fetchMoviesData(searchParams.toString()));
  }, [dispatch, searchParams]);

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setSearchTextFilter(event.target.value);
  }

  function submitHandler(event: React.FormEvent): void {
    event.preventDefault();

    if (searchTextFilter) {
      searchParams.set("search", searchTextFilter);
    } else {
      searchParams.delete("search");
    }

    resetPaginator();
  }

  function sortByHandler(): void {
    searchParams.set("sortOrder", !sortByFilter ? "asc" : "desc");

    resetPaginator();
  }

  function resetPaginator(): void {
    searchParams.delete("page");

    setSearchParams(searchParams);
  }

  function handlePaginationChange(
    event: React.ChangeEvent<unknown>,
    value: number
  ): void {
    if (value > 1) {
      searchParams.set("page", value.toString());
    } else {
      searchParams.delete("page");
    }
    setSearchParams(searchParams);
  }

  return (
    <>
      <h1>Over 2999 Movies Site</h1>
      <p>
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris
        blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu
        erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit
        amet quam vehicula elementum sed sit amet dui. Donec sollicitudin
        molestie malesuada. Curabitur aliquet quam id dui posuere blandit. Nulla
        quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt.
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      </p>
      <div>
        <FilterTopBar
          searchTextFilter={searchTextFilter}
          handleTitleChange={handleTitleChange}
          sortByFilter={sortByFilter}
          sortByHandler={sortByHandler}
          submitHandler={submitHandler}
        />
      </div>
      {loading ? (
        <CircularProgress className={css.loader} />
      ) : (
        <MoviesList
          movies={movies}
          currentPage={currentPage}
          pageAmount={pageAmount}
          handlePaginationChange={handlePaginationChange}
        />
      )}
    </>
  );
}

export default MoviesListPage;
