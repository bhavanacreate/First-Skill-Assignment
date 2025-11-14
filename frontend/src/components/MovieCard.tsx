import { Movie } from "../types/Movie";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img
        className="w-40 rounded-lg hover:scale-105 duration-200"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </Link>
  );
}
