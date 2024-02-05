import { Metadata } from "next";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../contants";

export const metadata: Metadata = {
  title: "Home",
};

interface Movies {
  id: string;
  title: string;
  poster_path: string;
}

async function getMovies() {
  return fetch(API_URL).then((res) => res.json());
}

export default async function Home() {
  const movies: Movies[] = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie key={movie.id} poster_path={movie.poster_path} title={movie.title} id={movie.id} />
      ))}
    </div>
  );
}
