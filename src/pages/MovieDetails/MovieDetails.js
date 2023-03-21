import Loading from 'components/Loading';
import MovieInfo from 'components/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getOneMovie from 'services/getOneMovie';
import { BackLink, BoxInfo, Item, List } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieInfo, setMovieDet] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  const backLocationref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    setLoader(true);
    setError('');
    getOneMovie(movieId)
      .then(data => {
        setMovieDet(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [movieId]);

  return (
    <BoxInfo>
      {loader && <Loading />}
      <BackLink>
        <Link to={backLocationref.current}>Go back</Link>
      </BackLink>

      {movieInfo && <MovieInfo movieInfo={movieInfo} />}
      <h3>Additional information</h3>
      <List>
        <Item>
          <Link to="cast">Cast</Link>
        </Item>
        <Item>
          <Link to="reviews">Reviews</Link>
        </Item>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </BoxInfo>
  );
};

export default MovieDetails;
