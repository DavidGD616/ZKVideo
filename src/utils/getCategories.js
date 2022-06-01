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

const getCategories = async () => {
  try {
    const { data } = await api("/genre/movie/list");
    return data;
  } catch (error) {
    console.log("Fetch Error", error);
  }
};

export default getCategories;
