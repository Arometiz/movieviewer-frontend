import { GET_MOVIES } from "../actions/getAllMoviesAction";

const movieListReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return { name: payload };
    default:
      return state;
  }
};

export default movieListReducer;
