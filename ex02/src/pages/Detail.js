import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";
import Navigation from "../components/Navigation";
import Movie from "../components/Movie";
import Footer from "../components/Footer";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

  setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navigation />
      <div className={styles.container}>
        <div className={styles.movieList}>
          <Movie
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            rating={movie.rating}
            linkToDetail={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Detail;
