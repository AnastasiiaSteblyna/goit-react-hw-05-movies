// https://api.themoviedb.org/3/movie/550?api_key=4327815596da5129cea06268029b0666
// const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';
import PropTypes from 'prop-types';
import axios from 'axios';

const API_KEY = '4327815596da5129cea06268029b0666';
const BASE_URL = 'https://api.themoviedb.org/3';

export default function fetchTrendingMovies(page) {
  return axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
    {
      params: {
        page: `${page}`,
      },
    }
  );
  
}



export default function findById(id) {
    return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`, {})
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }


export default function findByKeyword(searchQuery, page) {
    return axios
      .get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`,
        {
          params: {
            page: `${page}`,
          },
        }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
  }

  fetchTrendingMovies.propTypes = {
  page: PropTypes.number.isRequired,
};