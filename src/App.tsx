import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import { Navigate, Route, Routes } from "react-router-dom";
import MoviesListPage from "./pages/movies/index";
import MovieDetailsPage from "./pages/movies/[movieId]";
import Error from "./pages/Error";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate replace to="movies" />} />
        <Route path="movies">
          <Route index element={<MoviesListPage />} />
          <Route path=":movieId" element={<MovieDetailsPage />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Layout>
  );
}

export default App;
