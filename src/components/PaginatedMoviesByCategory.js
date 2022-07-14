import { Sections } from "../utils/Nodes";
import { createMovies } from "../utils/createMovies";
import { getPaginatedMoviesByCategory } from "../utils/getMovies";

const PaginatedMoviesByCategory = async (id) => {
    const pgCategoryMovies = await getPaginatedMoviesByCategory(id);
    const movies = pgCategoryMovies.results;
    console.log(pgCategoryMovies);
    const genericSection = Sections().genericSection;

    createMovies(movies, genericSection, { lazyLoad: true, clean: false });
};

export default PaginatedMoviesByCategory;
