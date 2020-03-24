import { createStore } from "redux";

const initialstate = {
  movies: [
    { name: "Terminator" },
    { name: "The Avengers" }
  ]
};

function reducer(state = initialstate) {
  return {
    movies: state.movies
  };
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
