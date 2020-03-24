import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCES,
  FETCH_MOVIES_ERROR
} from "../actions/getAllMoviesAction";

const initialState = {
  pending: false,
  movies: [],
  links: [],
  error: null
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_MOVIES_SUCCES:
      return {
        ...state,
        pending: false,
        movies: action.movies,
        links: action.links
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getMovies = state => state.movies;
export const getMoviesPending = state => state.pending;
export const getMoviesError = state => state.error;
export const getLinks = state => state.links;
