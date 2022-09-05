export default function Image(item, w) {
  const gender = item.gender;
  const name = item.name;
  if (gender === 1 || gender === 0) {
    return <img src={`/image/woman.png`} alt={`${name}`} style={{ width: `${w}` + "px" }} />;
  } else {
    return <img src={`/image/man.png`} alt={`${name}`} style={{ width: `${w}` + "px" }} />;
  }
}
