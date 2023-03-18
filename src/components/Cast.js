import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getOneMovie from 'services/getOneMovie';

const Cast = () => {
  const { movieId } = useParams();
  const [cost, setCost] = useState([]);

  useEffect(() => {
    getOneMovie(movieId).then(data => {
      console.log(data.credits.cast);
      setCost(data.credits.cast);
    });
  }, []);

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        {cost.map(item => {
          return (
            <li>
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
