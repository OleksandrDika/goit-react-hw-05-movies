const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const KEY = 'f8560092a6f6e40fc22fba47f695da5a';

const getMovies = async () => {
  return await fetch(`${BASE_URL}?api_key=${KEY}&language=en-US&page=1`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    }
  );
};

export default getMovies;

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
