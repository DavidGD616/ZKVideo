import lazyLoader from "./lazyLoader";

function likedMoviesList() {
  const item = JSON.parse(localStorage.getItem('liked_movies'));
  let movies;
  
  if (item) {
    movies = item;
  } else {
    movies = {};
  }

  console.log(movies)
}

function likedMovie(movie) {
  // movie.id
  const likedMovies = likedMoviesList();

  if (likedMovies[movie.id]) {
    // Remove from LS
    likedMovie[movie.id] = undefined;
  } else {
    // Add to LS
    likedMovie[movie.id] = movie;
  }

  localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
}

function createMovies(movies, container,
  {
    lazyLoad = false,
    clean = true
  } = {},
  ) {
  if (clean) {
    container.innerHTML = "";
  }

  movies.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute(
      lazyLoad ? "data-img" : "src",
      "https://image.tmdb.org/t/p/w300" + movie.poster_path
    );
    movieImg.addEventListener("click", () => {
      location.hash = `#movie=${movie.id}`;
    });
    movieImg.addEventListener("error", () => {
      movieImg.setAttribute(
        "src",
        `https://via.placeholder.com/300x450/5c218a/ffffff?text=${movie.title}`
      );
    });

    const movieBtn = document.createElement('button');
    movieBtn.classList.add('movie-btn');
    movieBtn.addEventListener('click', () => {
      movieBtn.classList.toggle('movie-btn--liked');
      likedMovie(movie);
    })
    

    if (lazyLoad) {
      lazyLoader.observe(movieImg);
    }

    movieContainer.appendChild(movieImg);
    movieContainer.appendChild(movieBtn);
    container.appendChild(movieContainer);
  });
}

export {
  createMovies,
};
