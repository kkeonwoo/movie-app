import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Profile from "./Profile";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Detail() {
  const params = useParams();
  const movieID = params.id;
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      setDetail(res.data);
      setGenres(res.data.genres);
      console.log(res.data);
    });
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR&page=1`).then((res) => {
      setCast(res.data.cast);
      setCrew(res.data.crew);
      console.log(res.data);
    });
  }, []);

  return (
    <div id="detail" className="detail">
      <div className="container scroll">
        <div className="btns">
          <Link to="/">
            <div className="btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Link>
        </div>
        <h2 className="title">
          <strong>Detail</strong>
        </h2>
        <div className="detailBox">
          <div className="img">
            <img src={`https://image.tmdb.org/t/p/w200/${detail.poster_path}`} alt="" />
          </div>
          <div className="info">
            <div className="titleBox">
              <h3>{detail.title}</h3>
              <p className="originTitle">( {detail.original_title} )</p>
              <p className="release">{detail.release_date}</p>
            </div>
            <div className="summary">
              <dl>
                <dt>장르</dt>
                <dd className="genre">
                  {genres.map((item, idx) => {
                    return <span key={idx}>{item.name}</span>;
                  })}
                </dd>
              </dl>
              <dl>
                <dt>개봉일</dt>
                <dd>{detail.release_date}</dd>
              </dl>
              <dl>
                <dt>런타임</dt>
                <dd>{detail.runtime}분</dd>
              </dl>
              <dl>
                <dt>관객평점</dt>
                <dd>{detail.vote_average}</dd>
              </dl>
              <dl>
                <dt>관객투표</dt>
                <dd>{detail.vote_count}</dd>
              </dl>
              <dl>
                <dt>cast</dt>
                <dd>
                  <Swiper className="profileList">
                    {cast.map((item, idx) => {
                      return (
                        <SwiperSlide>
                          <Profile profileInfo={item} key={idx} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </dd>
              </dl>
              <dl>
                <dt>crew</dt>
                <dd>
                  <Swiper className="profileList">
                    {crew.map((item, idx) => {
                      return (
                        <SwiperSlide>
                          <Profile profileInfo={item} key={idx} />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </dd>
              </dl>
            </div>
            <div className="overview">
              <p className="desc">{detail.overview}</p>
              <p className="vote">
                투표수 : <strong>{detail.vote_count}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${detail.backdrop_path})` }}></div>
    </div>
  );
}
