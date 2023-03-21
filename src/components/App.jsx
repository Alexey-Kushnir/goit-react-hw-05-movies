import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route path="?query=movieQuery" element={<MovieDetails />} />
        </Route>
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetails />} />
          <Route path="reviews" element={<MovieDetails />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};