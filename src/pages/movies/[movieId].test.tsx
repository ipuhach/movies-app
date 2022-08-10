import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieDetailsPage from "./[movieId]";

import { Provider } from "react-redux";
import store from "../../app/store";

describe("Movie Details Page", () => {
  test("renders 'No movie found' response message", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => {
        return null;
      },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieDetailsPage />
        </BrowserRouter>
      </Provider>
    );
    const noMoviesResponse = await screen.findByText(/No movie found/i);
    expect(noMoviesResponse).toBeInTheDocument();
  });
  test("renders movie detail correctly", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => {
        return {
          id: 8388,
          title: "¡Three Amigos!",
          tagline:
            "They're Down On Their Luck And Up To Their Necks In Senoritas, Margaritas, Banditos And Bullets!",
          poster_path:
            "https://image.tmdb.org/t/p/w500/zuTwahw966MoFwD7B2SFujaT5yp.jpg",
          overview:
            "Three unemployed actors accept an invitation to a Mexican village to replay their bandit fighter roles, unaware that it is the real thing.",
        };
      },
    });
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MovieDetailsPage />
        </BrowserRouter>
      </Provider>
    );
    const threeAmigosTitle = await screen.findByText(/¡Three Amigos!/i);
    expect(threeAmigosTitle).toBeInTheDocument();
  });
});
