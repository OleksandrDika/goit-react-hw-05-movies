import { Link, useLocation } from 'react-router-dom';
import { Item, List } from './MovieList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => {
        return (
          <Item key={movie.id}>
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;
