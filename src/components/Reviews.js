import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import getMovieReview from 'services/getMovieReview';
import Loading from './Loading';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  useEffect(() => {
    setLoader(true);
    setError('');
    getMovieReview(movieId)
      .then(data => {
        setReview(data.results);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [movieId]);

  // useEffect(() => {
  //   getMovieReview(movieId).then(data => {
  //     setReview(data.results);
  //   });
  // }, [movieId]);

  return (
    <div>
      {loader && <Loading />}
      <ul>
        {review.length > 0 ? (
          review.map(item => {
            return (
              <li key={item.id}>
                <div>
                  <h3>Author:{item.author}</h3>
                  <p>{item.content}</p>
                </div>
              </li>
            );
          })
        ) : (
          <p>No reviews about this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
