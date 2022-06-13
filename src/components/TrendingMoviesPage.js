import { getTrendingMovies } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";
import createMovies from "../utils/createMovies";

const trendingMoviesPage = async () => {
  const trendingMovies = await getTrendingMovies();
  const movies = trendingMovies.results;
  const genericSection = Sections().genericSection;

  createMovies(movies, genericSection);
};

export default trendingMoviesPage;
