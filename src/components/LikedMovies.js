import { getLikedMovies } from "../utils/getMovies";
import { ListContainers } from "../utils/Nodes";
import { createMovies } from "../utils/createMovies";

const gtLikedMovies = async () => {
    const likedMovies = await getLikedMovies();
    const moviesArray = Object.values(likedMovies);
    const likedMoviesList = ListContainers().likedMoviesList;

    createMovies(moviesArray, likedMoviesList, { lazyLoad: true, clean: true })
}

export default gtLikedMovies;