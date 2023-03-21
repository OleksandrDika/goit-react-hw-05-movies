import Loading from 'components/Loading';
import MoviesList from 'components/MovieList/MoviesList';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/getSearchMovie';
import { Form, Input, Search } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieValue, setMovieValue] = useState('');
  // const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  // useEffect(() => {
  //   if (movieValue) return;
  //   ;
  // }, []);

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
    evt.preventDefault();
    if (!query) {
      return toast('Not found this movie');
    }

    setMovieValue(query);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={query} onChange={updateQueryString} />
        <Search type="submit">Search movie</Search>
      </Form>
      <div>
        {movies && <MoviesList movies={movies} />}
        {loader && <Loading />}
      </div>
      <Toaster />
    </div>
  );
};
export default Movies;
