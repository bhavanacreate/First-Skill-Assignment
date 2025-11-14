import { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies }: { title: string; movies: Movie[] }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3 text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll pb-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
