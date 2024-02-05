"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  poster_path: string;
  title: string;
  id: string;
}

export default function Movie({ poster_path, title, id }: IMovieProps) {
  const router = useRouter();

  const onClickImg = () => {
    router.push(`/movies/${id}`);
  };

  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClickImg} />
      <Link href={`/movies/${id}`} prefetch>
        {title}
      </Link>
    </div>
  );
}
