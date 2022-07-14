import { getPaginatedTrendingMovies, getTrendingMovies } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";
import { createMovies } from "../utils/createMovies";
import PaginatedTrendingMovies from "./PaginatedTrendingMovies";

const trendingMoviesPage = async () => {
  const trendingMovies = await getTrendingMovies();
  const movies = trendingMovies.results;
  const genericSection = Sections().genericSection;
  const page = trendingMovies.page
  
  createMovies(movies, genericSection, { lazyLoad: true, clean: page == 1 });
  
  // const btnLoadMore = document.createElement("button");
  // btnLoadMore.innerText = "Load More";
  // btnLoadMore.addEventListener("click", PaginatedTrendingMovies);
  // genericSection.appendChild(btnLoadMore);
};

export default trendingMoviesPage;
