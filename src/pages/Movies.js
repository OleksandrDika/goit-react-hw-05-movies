import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/getSearchMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieValue, setMovieValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };
  useEffect(() => {
    if (movieValue) {
      getSearchMovie(movieValue).then(data => {
        setMovies(data.results);
      });
    }
  }, [movieValue]);

  return (
    <div>
      <input type="text" value={query} onChange={updateQueryString} />
      <button
        onClick={() => {
          setMovieValue(query);
        }}
      >
        Search movie
      </button>
      <div>
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link key={movie.id} to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Movies;
