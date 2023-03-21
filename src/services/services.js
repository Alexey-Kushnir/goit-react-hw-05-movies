import axios from 'axios';

export const AxiosApiService = async queryUrl => {
  const BASE_URL = `https://api.themoviedb.org/3/`;
  //   const apiKey = `1f93214cb1bbadcc143eeb01d552ab8c`;

  const url = `${BASE_URL}${queryUrl}`;

  //   console.log(`${url}`);
  const response = await axios.get(url);

  console.log(response.data);
  return response.data;
};

// const response = await axios.get(url, { signal: abortController.signal });

// https://api.themoviedb.org/3/search/movie?api_key=1f93214cb1bbadcc143eeb01d552ab8c&language=en-US&query=123&page=1&include_adult=false

// https://api.themoviedb.org/3/trending/all/day?api_key=1f93214cb1bbadcc143eeb01d552ab8c

// https://api.themoviedb.org/3/search/movie?api_key=1f93214cb1bbadcc143eeb01d552ab8c&language=en-US&query=881164&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/12345?api_key=1f93214cb1bbadcc143eeb01d552ab8c
