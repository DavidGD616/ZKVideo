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
};
