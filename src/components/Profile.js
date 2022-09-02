export default function Profile({ profileInfo }) {
  return (
    <>
      {profileInfo.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profileInfo.profile_path}`} /> : <img src={`./image/profile.png`} />}
      <span>{profileInfo.name}</span>
    </>
  );
}
