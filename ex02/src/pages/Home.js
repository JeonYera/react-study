import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "../styles/Home.module.css";
import Navigation from "../components/Navigation";


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  
  useEffect(() => {
    getMovies()
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div>
      {loading ? null : <Navigation />}
      <div className={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.movieList}>
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  rating={movie.rating}
                  linkToDetail={true}
                />
              ))
            ) : (
              <p>No movies found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;