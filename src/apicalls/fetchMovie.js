import {
  fetchMoviePending,
  fetchMovieSucces,
  fetchMovieError
} from "../actions/getMovieAction";
import { apiUrl, moviePath } from "../environment";


function fetchMovie(movie_id){
    return dispatch => {
        dispatch(fetchMoviePending());
        fetch(apiUrl + moviePath + "/single-movie-data?movie_id=" + movie_id)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchMovieSucces(res))
            return res;
        })
        .catch(error => {
            dispatch(fetchMovieError(error));
        })

    }
}

export default fetchMovie;