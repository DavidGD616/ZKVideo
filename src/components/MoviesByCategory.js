import createMovies from "../utils/createMovies";
import { getMoviesByCategory } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";


const MoviesByCategory = async (id) => {
  const movieCategory = await getMoviesByCategory(id);
  const movies = movieCategory.results;
  const genericSection = Sections().genericSection;

  createMovies(movies, genericSection);
};

export default MoviesByCategory;
