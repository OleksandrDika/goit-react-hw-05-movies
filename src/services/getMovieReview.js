const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const KEY = 'f8560092a6f6e40fc22fba47f695da5a';

const getMovieReview = async query => {
  return await fetch(
    `${BASE_URL}${query}/reviews?api_key=${KEY}&language=en-US&append_to_response=credits`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something went wrong'));
  });
};

export default getMovieReview;
