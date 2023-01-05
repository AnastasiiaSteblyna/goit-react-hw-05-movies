import { Link, useLocation } from 'react-router-dom';

const TrendingList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(f => (
        <li key={f.id}>
          <Link to={`/movies/${f.id}`} state={{ from: location }}>
            {f.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
