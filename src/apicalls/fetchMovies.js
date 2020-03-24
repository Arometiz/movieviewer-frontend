import {fetchMoviesPending, fetchMoviesSucces, fetchMoviesError } from '../actions';

function fetchMovies(){
    return dispatch => {
        dispatch(fetchMoviesPending());
        fetch('http://localhost:3030/movie/all-approved-movies')
        .then(res => res.jsom())
        .then(res => {
            if(res.error){
                throw(res.error);
            }
            dispatch(fetchMoviesSucces(res.movies));
            return res.movies;
        })
        .catch(error => {
            dispatch(fetchMoviesError(error));
        })
    }
}

export default fetchMoviesError;

