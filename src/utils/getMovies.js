const axios = require('axios');

const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    'api_key': API_KEY, 
  },
});

const getTrendingMovies = async () => {
  try {
    const { data } = await api('/trending/movie/day');
    return data;
  } catch (error) {
      console.log('Fetch Error', error);
  }
};

const getMoviesByCategory = async (id) => {
  try {
    const { data } = await api('discover/movie', {
      params: {
        with_genres: id,
      },
    })
   return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

const getMoviesBySearch = async (query) => {
  try {
    const { data } = await api('search/movie', {
      params: {
        query,
      },
    })
   return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
}

export { getTrendingMovies, getMoviesByCategory, getMoviesBySearch };