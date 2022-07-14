import { getRelatedMoviesId } from "../utils/getMovies";
import { createMovies } from "../utils/createMovies";
import { ListContainers } from "../utils/Nodes";

const RelatedMoviesId = async (id) => {
    const movie = await getRelatedMoviesId(id)
    const relatedMovies = movie.results;
    
    const relatedMoviesContainer = ListContainers().relatedMoviesContainer;

    createMovies(relatedMovies, relatedMoviesContainer);
}

export default RelatedMoviesId;