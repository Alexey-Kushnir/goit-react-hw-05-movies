import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AxiosApiService } from './../../services/services';

export const MovieDetails = () => {
  const [film, setFilm] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    // const abortController = new AbortController();
    //   const queryUrl = `search/movie?api_key=1f93214cb1bbadcc143eeb01d552ab8c&language=en-US&query=${movieId}&page=1&include_adult=false`;

    const queryUrl = `movie/${movieId}?api_key=1f93214cb1bbadcc143eeb01d552ab8c`;

    const getItems = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl);

        setFilm(responseData);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getItems();

    // return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {Boolean(film) && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
            alt={film.original_title}
            height="350px"
          />
          <h2>
            {film.original_title} ({film.release_date.slice(0, 4)})
          </h2>
          <p>User Score: </p>
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
