import lazyLoader from './lazyLoader';

function createMovies(movies, container, lazyLoad = false) {
    container.innerHTML = "";

    movies.forEach((movie) => {
        const movieContainer = document.createElement("div");
        movieContainer.classList.add("movie-container");
        movieContainer.addEventListener('click', () =>  {
          location.hash = `#movie=${movie.id}`
        })
    
        const movieImg = document.createElement("img");
        movieImg.classList.add("movie-img");
        movieImg.setAttribute("alt", movie.title);
        movieImg.setAttribute(
          lazyLoad ? "data-img" : 'src',
          "https://image.tmdb.org/t/p/w300" + movie.poster_path
        );

        if (lazyLoad) {
          lazyLoader.observe(movieImg);
        }
    
        movieContainer.appendChild(movieImg);
        container.appendChild(movieContainer);
      });
}

export default createMovies;