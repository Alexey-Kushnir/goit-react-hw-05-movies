import axios from 'axios';

export const AxiosApiService = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=1f93214cb1bbadcc143eeb01d552ab8c`;

  const response = await axios.get(url);

  return response.data.results;
};

// const response = await axios.get(url, { signal: abortController.signal });
