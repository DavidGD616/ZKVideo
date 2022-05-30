const URl = process.env.URL;
const API = process.env.API_KEY;

const getTrendingMovies = async () => {
  const apiURl = `${URl}/trending/movie/day?api_key=${API}`;
  try {
    const res = await fetch(apiURl);
    const data = await res.json();
    return data;
  } catch (error) {
      console.log('Fetch Error', error);
  }
};

export default getTrendingMovies;