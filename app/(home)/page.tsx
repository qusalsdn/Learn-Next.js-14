import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  return fetch(URL).then((res) => res.json());
}

export default async function Home() {
  const movies: any[] = await getMovies();
  console.log(movies.length);
  return <div>{JSON.stringify(movies)}</div>;
}
