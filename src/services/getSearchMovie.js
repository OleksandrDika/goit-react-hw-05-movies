const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const KEY = 'f8560092a6f6e40fc22fba47f695da5a';

const getSearchMovie = async query => {
  return await fetch(`${BASE_URL}?api_key=${KEY}&query=${query}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    }
  );
};

export default getSearchMovie;

// https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
