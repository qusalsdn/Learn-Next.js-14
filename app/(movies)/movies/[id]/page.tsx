import { API_URL } from "../../../(home)/page";

interface Movie {
  title: string;
}

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
}

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return fetch(`${API_URL}/${id}/videos`).then((res) => res.json());
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
  console.log("start fetching");
  // Promise.all을 이용하면 배열 안에 있는 모든 것들을 동시에 시작하게 된다. 즉, 병렬 요청을 하게 된다.
  const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  console.log("end fetching");

  return <h1>{movie.title}</h1>;
}
