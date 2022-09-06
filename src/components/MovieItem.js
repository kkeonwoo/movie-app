import { Link } from "react-router-dom";
export default function MovieItem({ movieInfo }) {
  return (
    <>
      <Link to={`/movie/${movieInfo.id}`}>
        <img src={`https://image.tmdb.org/t/p/w300/${movieInfo.poster_path}`} alt={movieInfo.name} />
        <span>{movieInfo.title}</span>
      </Link>
    </>
  );
}
