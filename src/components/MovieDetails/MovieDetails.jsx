import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { AxiosApiService } from './../../services/services';

export const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const queryUrl = `movie/${movieId}?`;

    const getFilmInfo = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);

        setFilm(responseData);
      } catch (error) {
        // console.log(`IsError: ${error}`);
      }
    };
    getFilmInfo();

    return () => abortController.abort();
  }, [movieId]);

  const navigate = useNavigate();

  return (
    <>
      {Boolean(film) && (
        <div>
          <button type="button" onClick={() => navigate(-1)}>
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            alt={film.original_title}
            height="350px"
          />
          <h2>
            {film.original_title} ({film.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {(film.vote_average * 10).toFixed(0)}%</p>
          <h3>Overview</h3>
          <p>{film.overview}</p>
          <h3>Generes</h3>
          <p>
            {film.genres.map(g => {
              return `${g.name} `;
            })}
          </p>
          <h4>Additional information</h4>
          <Link>Cast</Link>
          <Link>Reviews</Link>
        </div>
      )}
    </>
  );
};
