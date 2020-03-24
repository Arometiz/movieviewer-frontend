export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCES = "FETCH_MOVIES_SUCCES";
export const FETCH_MOVIES_ERROR= "GET_MOVIES_ERROR";

function fetchMoviesPending() {
    return{
        type: FETCH_MOVIES_PENDING
    }
}

function fetchMoviesSucces(movies){
    return{
        type: FETCH_MOVIES_SUCCES,
        movies: movies
    }
}

function fetchMoviesSucces(error){
    return{
        type: FETCH_MOVIES_SUCCES,
        error: error
    }
}