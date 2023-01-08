import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import css from '../../styles/Common.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onActors = async () => {
      setLoading(true);
      try {
        const actors = await api.findActors(movieId);
        console.log(actors);
        setActors(actors);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    onActors();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {actors && (
        <ul className={css.list}>
          {actors.map(actor => (
            <li className={css.cast} key={actor.id}>
              <img
                width="100px"
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                alt={actor.original_name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
