// import { useEffect } from 'react';
import Loading from 'components/Loading';
import MoviesList from 'components/MovieList/MoviesList';
// import MoviesList from 'components/MoviesList';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
// import { Link } from 'react-router-dom';
import getMovies from 'services/getPopularMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    setLoader(true);
    setError('');
    getMovies()
      .then(data => {
        if (data.results.length === 0) {
          alert('There are no images for your request.');
          return;
        }
        setMovies(data.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
      {loader && <Loading />}
    </div>
  );
};
export default Home;
