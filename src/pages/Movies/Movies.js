import Loading from 'components/Loading';
import MoviesList from 'components/MovieList/MoviesList';
import { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import getSearchMovie from 'services/getSearchMovie';
import { Form, Input, Search } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    if (!query) return;

    setLoader(true);
    setError('');
    getSearchMovie(query)
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
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.query.value.trim().toLowerCase();
    if (!query) {
      return toast('Please write name of movie');
    }
    setSearchParams({ query });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input type="text" defaultValue={query} name="query" />
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
