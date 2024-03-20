import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AxiosApiService } from '../services/services';

const Home = () => {
  const [items, setItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const abortController = new AbortController();
    const queryUrl = `trending/movie/day?`;

    const getItems = async () => {
      try {
        const responseData = await AxiosApiService(queryUrl, abortController);
        setItems(responseData.results);
      } catch (error) {
        console.log(`IsError: ${error}`);
      }
    };
    getItems();

    return () => abortController.abort();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {items.map(({ id, title }) => (
          <li key={id} id={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
