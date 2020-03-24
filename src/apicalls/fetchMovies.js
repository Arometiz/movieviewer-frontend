import {fetchMoviesPending, fetchMoviesSucces, fetchMoviesError } from '../actions/getAllMoviesAction';
import { apiUrl, moviePath } from '../environment';

function fetchMovies(){
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch(apiUrl + moviePath + "/all-approved-movies")
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchMoviesSucces(res.movies, res.links));
            return res.movies;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}

export default fetchMovies;

