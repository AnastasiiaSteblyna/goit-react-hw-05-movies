import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/api';
import css from '../../styles/Common.module.css';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});
  const queryMovie = searchParams.get('query');

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: event.target.elements.query.value.toLowerCase() });
  };

  useEffect(() => {
    if (queryMovie) {
      const onSearch = async () => {
        setLoading(true);
        try {
          const searchFilms = await api.findByKeyword(queryMovie);
          setSearchFilms(searchFilms.results);
          if (searchFilms.results.length === 0) {
            alert('Oh-no!');
          }
        } catch (err) {
          console.log(err);
        } finally {
          setLoading(false);
        }
      };
      onSearch();
    }
  }, [queryMovie]);

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          placeholder="Movie..."
          autoFocus
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      {loading && <Loader />}
      {searchFilms && <TrendingList films={searchFilms} />}
    </main>
  );
};

export default Movies;
