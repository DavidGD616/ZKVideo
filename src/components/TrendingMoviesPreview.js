import { getTrendingMovies } from "../utils/getMovies";
import { ListContainers } from "../utils/Nodes";

const TrendingMoviesPreview = async () => {
  const trendingMovies = await getTrendingMovies();
  const movies = trendingMovies.results;

  const trendingMoviesPreviewList = ListContainers().trendingMoviesPreviewList;

  trendingMoviesPreviewList.innerHTML = "";

  movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt', movie.title);
    movieImg.setAttribute(
      'src',
      'https://image.tmdb.org/t/p/w300' + movie.poster_path,
    );

    movieContainer.appendChild(movieImg);
    trendingMoviesPreviewList.appendChild(movieContainer);
  });
};

export default TrendingMoviesPreview;
