import axios from 'axios';

const API_KEY = '4327815596da5129cea06268029b0666';
const BASE_URL = 'https://api.themoviedb.org/3';

const api = {
  findTrendingMovies,
  findByKeyword,
  findActors,
  findDetails,
  findReview,
};

const findTrendingMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};
const findByKeyword = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`,
    {
      params: {
        page: `${page}`,
      },
    }
  );
  return response.data;
};

const findDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

const findActors = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};
