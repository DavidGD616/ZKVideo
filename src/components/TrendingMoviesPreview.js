import { getTrendingMovies } from "../utils/getMovies";
import { ListContainers } from "../utils/Nodes";
import createMovies from "../utils/createMovies";

const TrendingMoviesPreview = async () => {
  const trendingMovies = await getTrendingMovies();
  const movies = trendingMovies.results;
  const trendingMoviesPreviewList = ListContainers().trendingMoviesPreviewList;

  createMovies(movies, trendingMoviesPreviewList);
};

export default TrendingMoviesPreview;
