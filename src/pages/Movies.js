import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/getSearchMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieValue, setMovieValue] = useState('');
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  console.log(error);

  useEffect(() => {
    if (!movieValue) return;
    setLoader(true);
    setError('');
    getSearchMovie(movieValue)
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [movieValue]);

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setMovieValue(query);
  };

  return (
    <div>
      <form>
        <input type="text" value={query} onChange={updateQueryString} />
        <button type="submit" onClick={handleSubmit}>
          Search movie
        </button>
      </form>
      <div>
        {loader && <Loading />}
        <ul>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                  state={{ from: location }}
                >
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
