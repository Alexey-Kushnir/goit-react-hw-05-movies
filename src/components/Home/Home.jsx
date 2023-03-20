import { useEffect, useState } from 'react';
import { AxiosApiService } from './../../services/services';

export const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // const abortController = new AbortController();

    const getItems = async () => {
      try {
        const responseData = await AxiosApiService();

        setItems(responseData);
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
              <a href="">{title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
