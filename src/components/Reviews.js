import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMovieReview from 'services/getMovieReview';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    getMovieReview(movieId).then(data => {
      console.log(data);
      setReview(data.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {review.map(item => {
          return (
            <li>
              <div>
                <h3>Author:{item.author}</h3>
                <p>{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Reviews;
