import axios from "axios";

const API = "https://firstskillassignment.onrender.com/api";

export const getPopular = () => axios.get(`${API}/popular`);
export const getTopRated = () => axios.get(`${API}/top-rated`);
export const getNowPlaying = () => axios.get(`${API}/now-playing`);
export const getMovieDetails = (id: string) => axios.get(`${API}/movie/${id}`);
