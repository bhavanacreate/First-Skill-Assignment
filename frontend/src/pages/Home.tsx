import { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "../components/MovieRow";
import { getPopular, getTopRated, getNowPlaying } from "../api/movieApi";

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    getPopular().then(res => setPopular(res.data.results));
    getTopRated().then(res => setTopRated(res.data.results));
    getNowPlaying().then(res => setNowPlaying(res.data.results));
  }, []);

  return (
    <div className="pt-20 px-6 bg-black min-h-screen">
      {popular.length > 0 && <HeroBanner movie={popular[0]} />}
      <MovieRow title="🔥 Popular" movies={popular} />
      <MovieRow title="⭐ Top Rated" movies={topRated} />
      <MovieRow title="🎬 Now Playing" movies={nowPlaying} />
    </div>
  );
}
