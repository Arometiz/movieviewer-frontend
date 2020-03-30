export const EMPTY_MOVIE= "EMPTY_MOVIE";

export default function emptyMovie(){
    return{
        type: EMPTY_MOVIE,
        movie: null,
    }
}