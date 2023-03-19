import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReview from 'services/getMovieReview';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    getMovieReview(movieId).then(data => {
      setReview(data.results);
    });
  }, [movieId]);

  return (
    <div>
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
