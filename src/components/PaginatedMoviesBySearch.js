import { Sections } from "../utils/Nodes";
import createMovies from "../utils/createMovies";
import { getPaginatedMoviesBySearch } from "../utils/getMovies";

const PaginatedMoviesBySearch = async (query) => {
  const pgSearchMovies = await getPaginatedMoviesBySearch(query);
  const movies = pgSearchMovies.results;
  const genericSection = Sections().genericSection;

  createMovies(movies, genericSection, { lazyLoad: true, clean: false });
  //   const btnLoadMore = document.createElement("button");
  //   btnLoadMore.innerText = "Load More";
  //   btnLoadMore.addEventListener("click", PaginatedTrendingMovies);
  //   genericSection.appendChild(btnLoadMore);
};

export default PaginatedMoviesBySearch;