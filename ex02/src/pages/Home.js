// Home.js
import React, { useEffect, useState, useRef } from 'react';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Login from '../components/Login';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRef = useRef(null);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getMovies();
    // 모달이 열려있는 경우에만 전역 클릭 이벤트 리스너 등록
    if (isModalOpen) {
      window.addEventListener('click', handleCloseModal);
    }

    // 컴포넌트가 언마운트될 때 리스너 해제
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
  }, [isModalOpen]);

  return (
    <div>
      {loading ? null : (
        <Navigation onLoginClick={toggleModal} />
      )}
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
        <Footer />
      </div>
      {isModalOpen && (
        <div className={styles.modal} onClick={handleCloseModal}>
          {/* Ref 추가 */}
          <div ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button onClick={toggleModal}>닫기</button>
            <Login onCloseModal={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;