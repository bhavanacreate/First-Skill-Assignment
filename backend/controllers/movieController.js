const axios = require("axios");

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

exports.getPopularMovies = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    res.json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching popular movies" });
  }
};

exports.getTopRatedMovies = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
    res.json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching top rated movies" });
  }
};

exports.getNowPlayingMovies = async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
    res.json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching now playing movies" });
  }
};

exports.getMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    res.json(response.data);
  } catch {
    res.status(500).json({ error: "Error fetching movie details" });
  }
};
