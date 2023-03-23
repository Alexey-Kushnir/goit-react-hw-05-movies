import { useEffect, useState, useRef } from 'react';
import { AxiosApiService } from '../services/services';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [items, setItems] = useState({});
  const [query, setQuery] = useState('');
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      const abortController = new AbortController();
      const queryUrl = `search/movie?`;
      const wordSearchQuery = `&query=${query}&page=1`;

      const getItems = async () => {
        try {
          const responseData = await AxiosApiService(
            queryUrl,
            abortController,
            wordSearchQuery
          );

          setItems(responseData);
        } catch (error) {
          console.log(`IsError: ${error}`);
        }
      };
      getItems();

      console.log(initialRender);

      return () => abortController.abort();
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const inputValue = e.target[0].value.trim();

    setQuery(inputValue);
  };

  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      <>
        {Boolean(items.results) && items.results.length > 0 && (
          <ul>
            {items.results.map(({ title, id }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`}>{title}</Link>
                </li>
              );
            })}
          </ul>
        )}
        {Boolean(items.results) &&
        items.results.length === 0 &&
        items.page === 1 &&
        query !== '' ? (
          <p>No movies found, please change your query.</p>
        ) : null}
      </>
    </div>
  );
};

export default Movies;
