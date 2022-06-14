import { getMovieById } from "../utils/getMovies";
import { Elements, ListContainers, Sections } from "../utils/Nodes";
import createCategories from "../utils/createCategories";

//Elements
const movieDetailTitle = Elements().movieDetailTitle;
const movieDetailDescription = Elements().movieDetailDescription;
const movieDetailScore = Elements().movieDetailScore;

//Lists & Containers
const movieDetailCategoriesList = ListContainers().movieDetailCategoriesList;

//Sections
const headerSection = Sections().headerSection;

const MovieById = async (id) => {
  const movie = await getMovieById(id);

  const movieImgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  console.log(movieImgUrl);

  headerSection.style.background = `
    linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%),
    url(${movieImgUrl})`;

  movieDetailTitle.textContent = movie.title;
  movieDetailDescription.textContent = movie.overview;
  movieDetailScore.textContent = movie.vote_average;

  createCategories(movie.genres, movieDetailCategoriesList);
};

export default MovieById;
