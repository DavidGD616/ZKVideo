import { getPaginatedTrendingMovies } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";
import createMovies from "../utils/createMovies";
import trendingMoviesPage from "./TrendingMoviesPage";

const PaginatedTrendingMovies = async () => {
  const pgTrendingMovies = await getPaginatedTrendingMovies();
  const movies = pgTrendingMovies.results;
  console.log(pgTrendingMovies);
  const genericSection = Sections().genericSection;

  createMovies(movies, genericSection, { lazyLoad: true, clean: false });

//   const btnLoadMore = document.createElement("button");
//   btnLoadMore.innerText = "Load More";
//   btnLoadMore.addEventListener("click", PaginatedTrendingMovies);
//   genericSection.appendChild(btnLoadMore);
};

export default PaginatedTrendingMovies;
