import {
  FETCH_MOVIE_PENDING,
  FETCH_MOVIE_SUCCES,
  FETCH_MOVIE_ERROR
} from "../actions/getMovieAction";

import {
  EMPTY_MOVIE,
} from "../actions/emptyMovieAction";

const initialState = {
  pending: false,
  movie: null,
  error: null
};

export default function movieReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOVIE_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_MOVIE_SUCCES:
      return {
        ...state,
        pending: false,
        movie: action.movie
      };
    case FETCH_MOVIE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    case EMPTY_MOVIE:
      return {
        ...state,
        pending: false,
        movie: action.movie
      };
    default:
      return state;
  }
}

export const getMovie = state => state.movie.movie;
export const getMoviePending = state => state.movie.pending;
export const getMovieError = state => state.movie.error;
