import { useState } from 'react';
import PropTypes from 'prop-types';
import css from '../../styles/Common.module.css';

const SearchMovies = ({ onSubmit, searchParams }) => {
  const [searchQuery, setSearchQuery] = useState(() => {
    const query = searchParams.get('query');
    return query ? query : '';
  });

  const onInputChange = ({ target }) => setSearchQuery(target.value);

  const onFormSubmit = evt => {
    evt.preventDefault();

    onSubmit(searchQuery.trim().toLowerCase());
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className={css.input}
        type="text"
        name="query"
        value={searchQuery}
        onChange={onInputChange}
        placeholder="Movie..."
        autoFocus
      />
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  searchParams: PropTypes.object.isRequired,
};

export default SearchMovies;
