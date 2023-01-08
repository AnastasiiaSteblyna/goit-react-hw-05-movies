import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import css from '../../styles/Common.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();
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
    <div>
      {loading && <Loader />}
      {review && (
        <ul className={css.list}>
          {review.map(r => (
            <li className={css.list} key={r.id}>
              <h3>Author: {r.author}</h3>
              <p>{r.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
