import Loader from 'components/Loader/Loader';
import SearchMovies from 'components/SearchMovies/SearchMovies';
import TrendingList from 'components/TrendingList/TrendingList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from 'services/api';

const Movies = () => {
  const [searchFilms, setSearchFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (!searchQuery) {
      return;
    }
    if (searchQuery) {
      const onSearch = async () => {
        setLoading(true);
        try {
          const searchFilms = await api.findByKeyword(searchQuery);
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
  }, [searchParams]);

  const onSearchFormSubmit = searchValue => {
    setSearchParams(searchValue ? { query: searchValue } : {});
  };

  return (
    <main>
      {/* <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={queryMovie}
          onChange={onChange}
          placeholder="Movie..."
          autoFocus
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form> */}
      <SearchMovies onSubmit={onSearchFormSubmit} searchParams={searchParams} />
      {loading && <Loader />}
      {searchFilms && <TrendingList films={searchFilms} />}
    </main>
  );
};

export default Movies;
