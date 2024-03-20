import { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { AxiosApiService } from '../../services/services';
import { Container, GoBackLink, InfLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState();
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

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

  return (
    <>
      {Boolean(movieInfo) && (
        <Container>
          <GoBackLink to={backLinkHref}>Go back</GoBackLink>
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
          <h3>Genres</h3>
          <p>
            {movieInfo.genres
              .map(g => `${g.name}, `)
              .join('')
              .slice(0, -2)}
          </p>
          <h4>Additional information</h4>
          <InfLink to="cast">Cast</InfLink>
          <InfLink to="reviews">Reviews</InfLink>
        </Container>
      )}
      <Suspense fallback={<div> Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
