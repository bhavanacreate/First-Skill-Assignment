const express = require("express");
const {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getMovieDetails
} = require("../controllers/movieController");

const router = express.Router();

router.get("/popular", getPopularMovies);
router.get("/top-rated", getTopRatedMovies);
router.get("/now-playing", getNowPlayingMovies);
router.get("/movie/:id", getMovieDetails);

module.exports = router;
