export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_SUCCES = "FETCH_MOVIES_SUCCES";
export const FETCH_MOVIES_ERROR = "GET_MOVIES_ERROR";

export function fetchMoviesPending() {
    return{
        type: FETCH_MOVIES_PENDING
    }
}

export function fetchMoviesSucces(movies, links){
    return{
        type: FETCH_MOVIES_SUCCES,
        movies: movies,
        links: links
    }
}

export function fetchMoviesError(error){
    return{
        type: FETCH_MOVIES_SUCCES,
        error: error
    }
}