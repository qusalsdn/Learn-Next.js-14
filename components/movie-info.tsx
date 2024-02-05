import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";

interface Movie {
  poster_path: string;
  title: string;
  vote_average: number;
  overview: string;
  homepage: string;
  release_date: string;
  revenue: number;
  runtime: number;
}

export async function getMovie(id: string) {
  // console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie: Movie = await getMovie(id);

  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} className={styles.poster} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <h2 className={styles.h2}>Release Date</h2>
        <p>📅 {movie.release_date}</p>
        <h2 className={styles.h2}>Revenue</h2>
        <p>💸 {movie.revenue.toLocaleString()}</p>
        <h2 className={styles.h2}>Runtime</h2>
        <p>⏱ {movie.runtime}(M)</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
