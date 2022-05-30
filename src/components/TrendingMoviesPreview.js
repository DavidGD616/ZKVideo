import getTrendingMovies from "../utils/getTrendingMovies";

const TrendingMoviesPreview = async () => {
  const trendingMovies = await getTrendingMovies();
  const movies = trendingMovies.results;

  movies.forEach((movie) => {
    const trendingPreviewMoviesContainer = document.querySelector(
      "#trendingPreview .trendingPreview-movieList"
    );
    trendingPreviewMoviesContainer.innerHTML += `
         <div class="movie-container">
             <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" class="movie-img"
             alt=${movie.title}/>
         </div>
         `;
  });
};

export default TrendingMoviesPreview;
