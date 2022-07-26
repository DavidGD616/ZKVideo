const axios = require("axios");

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

// Liked Movie

function likedMoviesList() {
  const item = JSON.parse(localStorage.getItem('liked_movies'));
  let movies;
  
  if (item) {
    movies = item;
  } else {
    movies = {};
  }
  
  console.log(movies)
  return movies;
}

function likedMovie(movie) {
  // movie.id
  const likedMovies = likedMoviesList();

  if (likedMovies[movie.id]) {
    // Remove from LS
    likedMovies[movie.id] = undefined;
  } else {
    // Add to LS
    likedMovies[movie.id] = movie;
  }

  localStorage.setItem('liked_movies', JSON.stringify(likedMovies));
}

// Get Movies

const getTrendingMovies = async () => {
  try {
    const { data } = await api("/trending/movie/day");
    maxPage = data.total_pages;
    console.log(maxPage);
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

const getMoviesByCategory = async (id) => {
  try {
    const { data } = await api("discover/movie", {
      params: {
        with_genres: id,
      },
    });
    maxPage = data.total_pages;
    console.log(maxPage);
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

const getMoviesBySearch = async (query) => {
  try {
    const { data } = await api("search/movie", {
      params: {
        query,
      },
    });
    maxPage = data.total_pages;
    console.log(maxPage)
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

const getMovieById = async (id) => {
  try {
    const { data: movie } = await api(`movie/${id}`);
    return movie;
  } catch (error) {
    console.log("Fetch error", error);
  }
};

const getRelatedMoviesId = async (id) => {
  try {
    const { data } = await api(`movie/${id}/similar`);
    return data;
  } catch (error) {
    console.log("Fetch error", error);
  }
};


//PaginatedMovies


let page = 1;
let maxPage;

const getPaginatedTrendingMovies = async () => {
  try {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;

    
    const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
    const pageIsNotMax = page < maxPage;


    if (scrollIsBottom && pageIsNotMax) {
      page++
      const { data } = await api("/trending/movie/day", {
        params: {
          page,
        }
      });
      return data;
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }

};

const getPaginatedMoviesByCategory = async (id) => {
  try {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;

    
    const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
    const pageIsNotMax = page < maxPage;


    if (scrollIsBottom && pageIsNotMax) {
      page++
      const { data } = await api("discover/movie", {
        params: {
          with_genres: id,
          page,
        },
      });
      return data;
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }

};

const getPaginatedMoviesBySearch = async (query) => {
  try {
    const {
      scrollTop,
      scrollHeight,
      clientHeight
    } = document.documentElement;

    
    const scrollIsBottom = (scrollTop + clientHeight) >= (scrollHeight - 15);
    const pageIsNotMax = page < maxPage;


    if (scrollIsBottom && pageIsNotMax) {
      page++
      const { data } = await api("search/movie", {
        params: {
          query,
          page,
        },
      });
      return data;
    }
  } catch (error) {
    console.log("Fetch Error", error);
  }

};

export {
  getTrendingMovies,
  getMoviesByCategory,
  getMoviesBySearch,
  getMovieById,
  getRelatedMoviesId,
  getPaginatedTrendingMovies,
  getPaginatedMoviesBySearch,
  getPaginatedMoviesByCategory,
  likedMovie
};
