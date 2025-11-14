import { Movie } from "../types/Movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <div className="relative w-full h-[400px] mb-10">
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="absolute bottom-10 left-10 text-white max-w-lg">
        <h1 className="text-4xl font-bold">{movie.title}</h1>
        <p className="mt-2">{movie.overview}</p>
      </div>
    </div>
  );
}
