import { Link, useLocation } from 'react-router-dom';
import css from '../../styles/Common.module.css';

const TrendingList = ({ films }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {films.map(f => (
        <li key={f.id}>
          <Link
            className={css.item}
            to={`/movies/${f.id}`}
            state={{ from: location }}
          >
            {f.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
