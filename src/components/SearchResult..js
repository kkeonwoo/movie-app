import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Movie from "./Movie";
import qs from "qs";

export default function SearchResult() {
  const query = "슈퍼맨";
  const [movies, setMoives] = useState([]);
  // console.log(useLocation());
  const location = useLocation();
  // useLocation()에 있는 search에 query string정보가 들어가 있음
  const searchMovie = qs.parse(location.search, { ignoreQueryPrefix: true }).movie; // ignoreQueryPrefix는 movie 앞에 ?를 무시
  console.log(searchMovie);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1&include_adult=false&query=${searchMovie}`).then((res) => {
      console.log(res.data.results);
      setMoives(res.data.results); // usestate는 상태변화를 감지(코드를 다시 실행). 빈 배열에 데이터가 들어갔으니 또 코드를 실행 반복해서 무한루프
    });
  }, []); // 변수의 상태가 변하면 axios 코드를 실행
  return (
    <>
      <div className="container scroll">
        <h2 className="title">
          <strong>{searchMovie} </strong>
          <span> 검색 결과...</span>
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            return <Movie movieInfo={item} key={idx} />; // 객체로 한 번에 받기
          })}
        </ul>
      </div>
    </>
  );
}
