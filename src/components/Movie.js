// export default function Movie(props) {
//   return (
//     <li className="item">
//       <div className="img">
//         <img src={`https://image.tmdb.org/t/p/w200/${props.imgSrc}`} alt="" />
//         <span className="point">{props.point}</span>
//       </div>
//     </li>
//   );
// }

import { Link } from "react-router-dom";

// item을 객체로 통채로 넘기기
export default function Movie({ movieInfo }) {
  return (
    <li className="item">
      <Link to={`/detail/${movieInfo.id}`}>
        <div className="img">
          <img src={`https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`} alt="" />
          <span className="point">{movieInfo.vote_average}</span>
          <div className="info">
            <div className="titleBox">
              <h3 className="title">{movieInfo.title}</h3>
              {/* <h3 className="originTitle">{movieInfo.original_title}</h3> */}
              <p className="release">{movieInfo.release_date}</p>
            </div>
            {/* <div className="overview">
              <p className="desc">{movieInfo.overview}</p>
              <p className="vote">{movieInfo.vote_count}</p>
            </div> */}
          </div>
        </div>
      </Link>
    </li>
  );
}
