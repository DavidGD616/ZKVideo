import { Sections } from "../utils/Nodes";
import { createMovies } from "../utils/createMovies";
import { getPaginatedMoviesBySearch } from "../utils/getMovies";

const PaginatedMoviesBySearch = async (query) => {
  const pgSearchMovies = await getPaginatedMoviesBySearch(query);
  const movies = pgSearchMovies.results;
  console.log(pgSearchMovies)
  const genericSection = Sections().genericSection;

  createMovies(movies, genericSection, { lazyLoad: true, clean: false });
};

export default PaginatedMoviesBySearch;