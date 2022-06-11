function createMovies(movies, container) {
    container.innerHTML = "";

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
        container.appendChild(movieContainer);
      });
}

export default createMovies;