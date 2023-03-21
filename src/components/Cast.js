import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import getOneMovie from 'services/getOneMovie';
import Loading from './Loading';
import imagNotFound from 'images/imagNotFound.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cost, setCost] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast(error);
  }, [error]);

  useEffect(() => {
    setLoader(true);
    setError('');
    getOneMovie(movieId)
      .then(data => {
        setCost(data.credits.cast);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [movieId]);

  return (
    <div>
      {loader && <Loading />}
      <ul style={{ listStyle: 'none' }}>
        {cost.map(item => {
          const { id, profile_path, original_name, character } = item;
          const poster = profile_path
            ? `https://image.tmdb.org/t/p/original/${profile_path}`
            : imagNotFound;
          return (
            <li key={id}>
              <div>
                <img src={poster} alt="" style={{ width: 110 }} />
                <p>{original_name}</p>
                <p>{character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
