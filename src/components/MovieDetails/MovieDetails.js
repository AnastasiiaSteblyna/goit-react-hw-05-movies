import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'services/api';
import css from '../../styles/Common.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onMovieLoaded = async () => {
      setLoading(true);
      try {
        const movie = await api.findDetails(movieId);
        setMovieInfo(movie);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    onMovieLoaded();
  }, [movieId]);

  return (
    <>
      <Link to={location.state?.from ?? '/movies'}>
        <button className={css.btn_go} type="button">
          {'Go back'}
        </button>
      </Link>
      {loading && <Loader />}
      {movieInfo && (
        <div className={css.container}>
          <img
            width="300px"
            src={'https://image.tmdb.org/t/p/w500' + movieInfo.poster_path}
            alt={movieInfo.original_title}
          />
          <div>
            <h1>
              {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
            </h1>
            <p>User score: {movieInfo.popularity}</p>
            <h2>Overview</h2>
            <p>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={css.list}>
              {movieInfo.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className={css.container}>
        <h2>Additional information</h2>
        <ul className={css.list}>
          <li>
            <Link className={css.item} to="cast">
              Cast
            </Link>
          </li>
          <li>
            <Link className={css.item} to="review">
              Review
            </Link>
          </li>
        </ul>

        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
