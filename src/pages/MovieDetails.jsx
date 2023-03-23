import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, Outlet } from 'react-router-dom';
import { AxiosApiService } from '../services/services';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}?`;

    const getMovieInfoInfo = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);

        setMovieInfo(responseData);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getMovieInfoInfo();

    return () => abortController.abort();
  }, [movieId]);

  const navigate = useNavigate();

  return (
    <>
      {Boolean(movieInfo) && (
        <div>
          <button type="button" onClick={() => navigate('/')}>
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`}
            alt={movieInfo.original_title}
            height="350px"
          />
          <h2>
            {movieInfo.original_title} ({movieInfo.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {(movieInfo.vote_average * 10).toFixed(0)}%</p>
          <h3>Overview</h3>
          <p>{movieInfo.overview}</p>
          <h3>Generes</h3>
          <p>
            {movieInfo.genres.map(g => {
              return `${g.name} `;
            })}
          </p>
          <h4>Additional information</h4>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetails;
