import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <div id="search" className="search">
      <input
        type="text"
        placeholder="Search movie🎬"
        onChange={function (e) {
          // console.log(e);
          setSearch(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            navigate(`/search?movie=${search}`);
          }
        }}
      />
      <Link className="btnSearch" to={`/search?movie=${search}`}>
        🔍
      </Link>
    </div>
  );
}
