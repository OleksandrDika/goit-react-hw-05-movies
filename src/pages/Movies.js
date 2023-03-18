import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };
  return (
    <div>
      <input type="text" value={query} onChange={updateQueryString} />
      <button
        onClick={() => {
          searchParams({});
        }}
      >
        Search movie
      </button>
      Search Movie
    </div>
  );
};
export default Movies;
