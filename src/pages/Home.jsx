import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AxiosApiService } from '../services/services';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const abortController = new AbortController();
    const queryUrl = `trending/movie/day?api_key=1f93214cb1bbadcc143eeb01d552ab8c`;

    const getItems = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl);

        setItems(responseData.results);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getItems();

    // return () => abortController.abort();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {items.map(({ id, title }) => {
          return (
            <li key={id} id={id}>
              <Link to={`movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
