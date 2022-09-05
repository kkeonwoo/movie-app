import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Image from "./Image";
export default function ProfileDetail() {
  const params = useParams();
  const person = params.id;
  const [profile, setProfile] = useState([]);
  // console.log(params);
  // console.log(person);
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${person}?api_key=${process.env.REACT_APP_MOVIE_KEY}&language=ko-KR`).then((res) => {
      console.log(res.data.results);
      console.log(res.data);
      setProfile(res.data);
    });
  }, []);

  return (
    <div id="profileDetail" className="detail">
      <div className="container">
        <h2 className="title">
          <strong>{profile.name}</strong>
        </h2>
        <div className="detailBox">
          <div className="img">{profile.profile_path !== null ? <img src={`https://image.tmdb.org/t/p/w185/${profile.profile_path}`} alt={profile.name} /> : Image(profile, 185)}</div>
          <div className="info">
            <div className="summary">
              <dl>
                <dt>직업</dt>
                <dd>{profile.known_for_department}</dd>
              </dl>
              <dl>
                <dt>성별</dt>
                <dd>{profile.gender === 1 || profile.gender === 0 ? "Female" : "Male"}</dd>
              </dl>
              <dl>
                <dt>생년월일</dt>
                <dd>{profile.birthday}</dd>
              </dl>
              <dl>
                <dt>출생</dt>
                <dd>{profile.place_of_birth}</dd>
              </dl>
              <dl>
                <dt>명성</dt>
                <dd>{profile.popularity}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
