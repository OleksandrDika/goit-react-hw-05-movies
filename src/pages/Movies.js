import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
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

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    if (!movieValue) return;

    setLoader(true);
    setError('');
    getSearchMovie(movieValue)
      .then(data => {
        if (!data.results.length) {
          toast('Not found');
        }
        setMovies(data.results);
      })
      .catch(error => {
        toast('Not found');
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
    if (!query) {
      return toast('Not found this movie');
    }
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
      <Toaster />
    </div>
  );
};
export default Movies;
