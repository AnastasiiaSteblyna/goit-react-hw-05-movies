import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import css from '../../styles/Common.module.css';

const Cast = () => {
  const { movieId } = useParams(null);
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onReview = async () => {
      setLoading(true);
      try {
        const review = await api.findReview(movieId);
        console.log(review);
        setReview(review);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    onReview();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {review && (
        <div>
          <ul className={css.list}>
            {review.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {review.length === 0 && (
        <h3 className={css.container}>
          We don't have any reviews for this movie
        </h3>
      )}
    </>
  );
};

export default Cast;
