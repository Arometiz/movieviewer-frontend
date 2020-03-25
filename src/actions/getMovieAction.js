export const FETCH_MOVIE_PENDING = "FETCH_MOVIE_PENDING";
export const FETCH_MOVIE_SUCCES = "FETCH_MOVIE_SUCCES";
export const FETCH_MOVIE_ERROR = "FETCH_MOVIE_ERROR";

export function fetchMoviePending() {
    return{
        type: FETCH_MOVIE_PENDING
    }
}

export function fetchMovieSucces(movie, links){
    return{
        type: FETCH_MOVIE_SUCCES,
        movie: movie,
        links: links
    }
}

export function fetchMovieError(error){
    return{
        type: FETCH_MOVIE_ERROR,
        error: error
    }
}