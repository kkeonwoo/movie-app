import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function List() {
  const [movies, setMoives] = useState([]);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      // console.log(res.data);
      setMoives(res.data.results); // usestate는 상태변화를 감지(코드를 다시 실행). 빈 배열에 데이터가 들어갔으니 또 코드를 실행 반복해서 무한루프
    });
  }, []); // 변수의 상태가 변하면 axios 코드를 실행
  return (
    <>
      <div className="container scroll">
        <h2 className="title">
          <strong>POPULAR</strong> MOVIE
        </h2>
        <ul className="movieList">
          {movies.map((item, idx) => {
            // return <Movie imgSrc={item.poster_path} point={item.vote_average} />;
            // console.log(item);
            return <Movie movieInfo={item} key={idx} />; // 객체로 한 번에 받기
          })}
        </ul>
      </div>
    </>
  );
}
