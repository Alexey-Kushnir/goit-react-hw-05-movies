import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}/reviews?`;

    (async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setReviews(responseData.results);
      } catch (error) {
        console.log(`IsError: ${error}`);
      } finally {
        setIsLoading(false);
      }
    })();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {Boolean(reviews) && reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : isLoading ? (
        <p> Loading results...</p>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
