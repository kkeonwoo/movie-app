import { Link } from "react-router-dom";
import Search from "./Search";

export default function Header() {
  return (
    <>
      <header id="header" className="header">
        <h1>
          <Link to="/">MOVIE APP</Link>
        </h1>
        {/* <span className="searchBtn">🔍</span> */}
        <Search />
      </header>
    </>
  );
}
