import axios from 'axios';

export const AxiosApiService = async (
  queryUrl,
  abortController,
  wordSearchQuery = ''
) => {
  const BASE_URL = `https://api.themoviedb.org/3/`;
  const API_KEY = `1f93214cb1bbadcc143eeb01d552ab8c`;

  const url = `${BASE_URL}${queryUrl}api_key=${API_KEY}&language=en-US${wordSearchQuery}`;

  // console.log(url);

  // const response = await axios.get(url);
  const response = await axios.get(url, { signal: abortController.signal });

  console.log(response.data);

  return response.data;
};

// https://api.themoviedb.org/3/search/movie?api_key=1f93214cb1bbadcc143eeb01d552ab8c&language=en-US&query=111&page=1

// https://api.themoviedb.org/3/trending/all/day?api_key=1f93214cb1bbadcc143eeb01d552ab8c

// https://api.themoviedb.org/3/movie/12345?api_key=1f93214cb1bbadcc143eeb01d552ab8c
