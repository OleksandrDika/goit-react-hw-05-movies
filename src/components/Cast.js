import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getOneMovie from 'services/getOneMovie';
import Loading from './Loading';

const Cast = () => {
  const { movieId } = useParams();
  const [cost, setCost] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');
  console.log(error);

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

  // useEffect(() => {
  //   getOneMovie(movieId).then(data => {
  //     setCost(data.credits.cast);
  //   });
  // }, [movieId]);

  return (
    <div>
      {loader && <Loading />}
      <ul style={{ listStyle: 'none' }}>
        {cost.map(item => {
          return (
            <li key={item.id}>
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                  alt=""
                  style={{ width: 110 }}
                />
                <p>{item.original_name}</p>
                <p>{item.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
