import { Link, useLocation } from 'react-router-dom';
import css from '../../styles/Common.module.css';
import PropTypes from 'prop-types';

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

TrendingList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default TrendingList;
