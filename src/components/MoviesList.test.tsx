import React from "react";
import { queryByTestId, render, screen } from "@testing-library/react";
import MoviesList from "./MoviesList";
import { Movie } from "../model/Movie";
import { BrowserRouter } from "react-router-dom";

describe("MoviesList component with 12 movies, current page equal to 1 and 250 available pages", () => {
  let movies: Movie[] = [
    {
      id: 8388,
      title: "¡Three Amigos!",
      tagline:
        "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
      poster_path:
        "https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
      overview:
        "Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.",
    },
    {
      id: 252178,
      title: "'71",
      tagline: "",
      poster_path:
        "https://image.tmdb.org/t/p/w500/b8dmfG84peFdouN2N8wOsiI9WHt.jpg",
      overview:
        "A young British soldier must find his way back to safety after his unit accidentally abandons him during a riot in the streets of Belfast.",
    },
    {
      id: 19913,
      title: "(500) Days of Summer",
      tagline: "This is not a love story. This is a story about love.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/5SjtNPD1bb182vzQccvEUpXHFjN.jpg",
      overview:
        "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
    },
    {
      id: 8329,
      title: "[REC]",
      tagline: "One witness. One camera",
      poster_path:
        "https://image.tmdb.org/t/p/w500/lLSXs26iZe0aIzYrobr3FruUG36.jpg",
      overview:
        "A television reporter and cameraman follow emergency workers into a dark apartment building and are quickly locked inside with something terrifying.",
    },
    {
      id: 455656,
      title: "#realityhigh",
      tagline: "",
      poster_path:
        "https://image.tmdb.org/t/p/w500/wUXT3KEh6vjDzwYKiYWwdJNfZOW.jpg",
      overview:
        "When nerdy high schooler Dani finally attracts the interest of her longtime crush, she lands in the cross hairs of his ex, a social media celebrity.",
    },
    {
      id: 333371,
      title: "10 Cloverfield Lane",
      tagline: "Monsters come in many forms.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/aeiVxTSTeGJ2ICf1iSDXkF3ivZp.jpg",
      overview:
        "After getting in a car accident, a woman is held in a shelter with two men, who claim the outside world is affected by a widespread chemical attack.",
    },
    {
      id: 4951,
      title: "10 Things I Hate About You",
      tagline: "How do I loathe thee? Let me count the ways.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/paS5plbzKz3PYddxky6svYYz3hS.jpg",
      overview:
        "Bianca, a tenth grader, has never gone on a date, but she isn't allowed to go out with boys until her older sister Kat gets a boyfriend. The problem is, Kat rubs nearly everyone the wrong way. But Bianca and the guy she has her eye on, Joey, are eager, so Joey fixes Kat up with Patrick, a new kid in town just bitter enough for Kat.",
    },
    {
      id: 7840,
      title: "10,000 BC",
      tagline: "The legend. The battle. The first hero.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/hlt9xHt2gqF6qy2u0GD77Iii3yV.jpg",
      overview:
        "A prehistoric epic that follows a young mammoth hunter's journey through uncharted territory to secure the future of his tribe.",
    },
    {
      id: 11674,
      title: "101 Dalmatians",
      tagline: "So many dogs. So little time.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/pdVFUWxxDB5qt1RhcMp9A88IcGU.jpg",
      overview:
        "The Live action adaptation of a Disney Classic. When a litter of dalmatian puppies are abducted by the minions of Cruella De Vil, the parents must find them before she uses them for a diabolical fashion statement.",
    },
    {
      id: 13654,
      title: "101 Dalmatians II: Patch's London Adventure",
      tagline: "A New Hero Unleashed.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/ht4h6I7WwaZa1E8xzb1jE94mDvS.jpg",
      overview:
        "Being one of 101 takes its toll on Patch, who doesn't feel unique. When he's accidentally left behind on moving day, he meets his idol, Thunderbolt, who enlists him on a publicity campaign.",
    },
    {
      id: 505177,
      title: "10x10",
      tagline: "There are some secrets we cannot escape",
      poster_path:
        "https://image.tmdb.org/t/p/w500/egMETBYual2JtfFGigXTA0tGkME.jpg",
      overview:
        "Lewis is an outwardly ordinary guy, but in reality he is hiding an obsession - revenge - against Cathy. Lewis kidnaps Cathy in broad daylight and takes her to his home, where he locks her in a soundproof cell and attempt to extract a dark secret from her past.",
    },
    {
      id: 389,
      title: "12 Angry Men",
      tagline: "Life is in their hands. Death is on their minds.",
      poster_path:
        "https://image.tmdb.org/t/p/w500/3W0v956XxSG5xgm7LB6qu8ExYJ2.jpg",
      overview:
        "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    },
  ];
  let pageAmount: number = 250;
  let currentPage: number = 1;

  test("renders movies list of 12 movies", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    const imgTags = screen.getAllByTestId("movies-list-item");
    expect(imgTags.length).toBe(12);
  });
  test("renders pagination", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
  test("renders first page as active", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    const currentPageButton = screen.getByRole("button", { current: true });
    expect(currentPageButton.textContent).toBe("1");
  });
  test("renders page amount as 250", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    const pageAmountButton = screen
      .getAllByRole("button")
      .filter((x) => x.textContent === "250");
    expect(pageAmountButton[0]).toBeInTheDocument();
  });
});

describe("MoviesList component with EMPTY movies list, current page equal to 1 and 0 available pages", () => {
  let movies: Movie[] = [];
  let pageAmount: number = 0;
  let currentPage: number = 1;

  test("renders 'No movies found' response message", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    const noMoviesResponse = screen.getByText(/No movies found/i);
    expect(noMoviesResponse).toBeInTheDocument();
  });
  test("renders no pagination", () => {
    render(
      <MoviesList
        movies={movies}
        pageAmount={pageAmount}
        currentPage={currentPage}
        handlePaginationChange={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    expect(screen.queryByTestId("pagination")).not.toBeInTheDocument();
  });
});
