import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

export const Reviews = () => {
  const [reviews, setReviews] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}/reviews?`;

    const getReviews = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);

        setReviews(responseData.results);
      } catch (error) {
        // console.log(`IsError: ${error}`);
      }
    };
    getReviews();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {Boolean(reviews) && (
        <ul>
          {reviews.map(({ author, content, id }) => {
            // const photo = profile_path => {
            //   if (!profile_path) {
            //     return '';
            //   }
            //   return `https://image.tmdb.org/t/p/original/${profile_path}`;
            // };

            return (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

// export const ReviewItem = () => {
//   return (
//     <li>
//       <h4>Author: {}</h4>
//       <p></p>
//     </li>
//   );
// };
