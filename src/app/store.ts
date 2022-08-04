import { configureStore } from "@reduxjs/toolkit";

import moviesSlice from "./moviesSlice";
import movieDetailsSlice from "./movieDetailsSlice";

const store = configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    movieDetails: movieDetailsSlice.reducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
