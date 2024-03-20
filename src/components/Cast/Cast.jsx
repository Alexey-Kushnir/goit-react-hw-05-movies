import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

const Cast = () => {
  const [castInfo, setCastInfo] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `movie/${movieId}/credits?`;

    const getCastInfo = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setCastInfo(responseData.cast);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getCastInfo();

    return () => abortController.abort();
  }, [movieId]);

  return (
    <>
      {Boolean(castInfo) && (
        <ul>
          {castInfo.map(({ cast_id, character, name, profile_path }) => {
            const photo = profile_path => {
              if (!profile_path) {
                return 'https://developersushant.files.wordpress.com/2015/02/no-image-available.png';
              }
              return `https://image.tmdb.org/t/p/original/${profile_path}`;
            };

            return (
              <li key={cast_id}>
                <img src={photo(profile_path)} alt="" height="150px" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
