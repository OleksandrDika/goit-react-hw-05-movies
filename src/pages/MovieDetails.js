import Loading from 'components/Loading';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import getOneMovie from 'services/getOneMovie';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movieDet, setMovieDet] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  console.log(error);

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

  // useEffect(() => {
  //   getOneMovie(movieId).then(data => {
  //     setMovieDet(data);
  //   });
  // }, [movieId]);
  const goBackPath = location.state?.from ?? { pathname: '/' };
  return (
    <div>
      {loader && <Loading />}
      <Link to={goBackPath}>Go back</Link>
      <div style={{ display: 'flex' }}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDet.poster_path}`}
          alt=""
          style={{ width: 300 }}
        />
        <ul style={{ listStyle: 'none' }}>
          <li>
            <h2>{movieDet.title}</h2>
          </li>
          <li>
            <p>User Score {movieDet.vote_average}</p>
          </li>
          <li>
            <h3>Overwiev</h3>
          </li>
          <li>
            <p>{movieDet.overview}</p>
          </li>
          <li>
            <h4>Genres</h4>
          </li>
          {/* <li>{movieDet.genres.map(item => item.name)}</li> */}
        </ul>
      </div>
      <p>Additional information</p>
      <ul style={{ listStyle: 'none' }}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
