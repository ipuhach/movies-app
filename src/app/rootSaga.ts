import movieSagas from "./sagaActions";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...movieSagas]);
}
