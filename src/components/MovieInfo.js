import imagNotFound from 'images/imagNotFound.png';

const MovieInfo = ({ movieInfo }) => {
  const { title, poster_path, vote_average, overview, genres } = movieInfo;
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/original/${poster_path}`
    : imagNotFound;
  const normalizedGenres = genres
    ? genres.map(item => item.name).join(', ')
    : 'No information';
  return (
    <div style={{ display: 'flex' }}>
      <img src={poster} alt="" style={{ width: 300 }} />
      <ul style={{ listStyle: 'none' }}>
        <li>
          <h2>{title}</h2>
        </li>
        <li>
          <p>User Score {vote_average}</p>
        </li>
        <li>
          <h3>Overwiev</h3>
        </li>
        <li>
          <p>{overview}</p>
        </li>
        <li>
          <h4>Genres</h4>
        </li>
        <li>{normalizedGenres}</li>
      </ul>
    </div>
  );
};

export default MovieInfo;
