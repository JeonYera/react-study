import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Movie({ id, coverImg, title, summary, genres, rating, linkToDetail }) {
  return (
    <div className={styles.movie}>
      {/* linkToDetail이 true일 때만 Link를 렌더링 */}
      {linkToDetail ? (
        <h2>
          <Link to={`/movie/${id}`}>
            <img src={coverImg} alt={title} />
            {title}
          </Link>
        </h2>
      ) : (
        <h2>
          <img src={coverImg} alt={title} />
          <div>{title}</div>
        </h2>
      )}
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p className={styles.rating}>⭐{rating}</p>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  linkToDetail: PropTypes.bool,
};

Movie.defaultProps = {
  summary: "",
  genres: [],
  linkToDetail: true,
};


export default Movie;