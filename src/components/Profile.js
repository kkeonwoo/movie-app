import { Link } from "react-router-dom";
import Image from "./Image";
export default function Profile({ profileInfo }) {
  return (
    <>
      <Link to={`/profile/${profileInfo.id}`}>
        {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} alt={profileInfo.name} /> : Image(profileInfo, 120)}
        <span>{profileInfo.name}</span>
      </Link>
    </>
  );
}
