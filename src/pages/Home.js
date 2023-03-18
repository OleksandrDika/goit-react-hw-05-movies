// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getMovies from 'services/getPopularMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then(data => {
      console.log(data);
      setMovies(data.results);
      setTimeout(() => {
        console.log(movies);
      }, 2000);
    });
  }, []);

  return (
    <div>
      <ul>
        {movies.map(movie => {
          return (
            <li>
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Home;
