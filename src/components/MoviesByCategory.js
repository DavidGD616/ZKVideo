import { getMoviesByCategory } from "../utils/getMovies";
import { Sections } from "../utils/Nodes";

const MoviesByCategory = async () => {
  const movieCategory = await getMoviesByCategory();
  const movies = movieCategory.results;

  const genericSection = Sections().genericSection;

  genericSection.innerHTML = "";

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );

    movieContainer.appendChild(movieImg);
    genericSection.appendChild(movieContainer);
  });
};

export default MoviesByCategory;
