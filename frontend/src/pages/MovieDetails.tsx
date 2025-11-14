import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/movieApi";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getMovieDetails(id).then(res => setMovie(res.data));
    }
  }, [id]);

  if (!movie) return <div className="text-white pt-20 px-6">Loading...</div>;

  return (
    <div className="pt-20 text-white px-6 bg-black min-h-screen">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        className="w-full max-h-[400px] object-cover rounded"
        alt={movie.title}
      />

      <h1 className="text-4xl font-bold mt-6">{movie.title}</h1>
      <p className="mt-4">{movie.overview}</p>
      <p className="mt-2 text-gray-300">Release: {movie.release_date}</p>
      <p className="mt-2 text-gray-300">Rating: {movie.vote_average}</p>
    </div>
  );
}
