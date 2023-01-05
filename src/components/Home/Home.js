import React, { useState, useEffect } from 'react';
import api from 'services/api';
import Loader from '../Loader/Loader';
import TrendingList from '../TrendingList/TrendingList';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const trendingFilms = await api.findTrendingMovies();
        setFilms(trendingFilms);
        console.log(trendingFilms);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return (
    <main>
      <h1>Trending today:</h1>
      {loading && <Loader />}
      {films && <TrendingList films={films} />}
    </main>
  );
};

export default Home;
