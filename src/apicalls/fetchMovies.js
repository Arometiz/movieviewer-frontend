import {fetchMoviesPending, fetchMoviesSucces, fetchMoviesError } from '../actions/getAllMoviesAction';
import { apiUrl, moviePath } from '../environment';

function fetchMovies(page){
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch(apiUrl + moviePath + "/all-approved-movies?page=" + page)
        .then(res => res.json())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchMoviesSucces(res.movies, res.links, res.totalMovieCount));
            return res.movies;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}

export default fetchMovies;

