import { getMoviesBySearch } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";
import createMovies from "../utils/createMovies";

const MoviesBySearch = async (query) => {
    const movieSearch = await getMoviesBySearch(query);
    const movies = movieSearch.results;
    const genericSection = Sections().genericSection;
    
    createMovies(movies, genericSection);
}

export default MoviesBySearch;