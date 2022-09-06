import { Link } from "react-router-dom";
export default function Similar({ similarInfo }) {
  return (
    <>
      <Link to={`/similar/${similarInfo.id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${similarInfo.poster_path}`} alt={similarInfo.title} />
        <span>{similarInfo.title}</span>
      </Link>
    </>
  );
}
