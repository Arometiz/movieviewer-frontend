import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_SUCCES,
  FETCH_MOVIES_ERROR
} from "../actions/getAllMoviesAction";

const initialState = {
  pending: false,
  movies: [],
  links: [],
  totalMovieCount: 0,
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
        totalMovieCount : action.totalMovieCount,
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

export const getMovies = state => state.movies.movies;
export const getMoviesPending = state => state.movies.pending;
export const getMoviesError = state => state.movies.error;
export const getLinks = state => state.movies.links;
export const getTotalMovieCount = state => state.movies.totalMovieCount;
