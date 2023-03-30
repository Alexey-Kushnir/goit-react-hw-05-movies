import { useEffect, useState } from 'react';
import { AxiosApiService } from '../../services/services';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Input, Button } from './Movies.styled';

export const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null || query === undefined || query === '') {
      return;
    }

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

    return () => abortController.abort();
  }, [query, setItems]);

  const updateQueryString = e => {
    e.preventDefault();
    const queryValue = e.target[0].value.trim();

    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={e => updateQueryString(e)}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="  Search movies"
        />
        <Button type="submit">Search</Button>
      </form>

      <>
        {Boolean(items.results) && items.results.length > 0 && (
          <ul>
            {items.results.map(({ title, id }) => {
              return (
                <li key={id}>
                  <Link to={`${id}`} state={{ from: location }}>
                    {title}
                  </Link>
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
