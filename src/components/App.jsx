import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="movies" element={<Movies />}>
          <Route path="?query=movieQurery" element={<MovieDetails />} />
          <Route path="/:movieId" element={<MovieDetails />}>
            <Route path="/cast" element={<MovieDetails />} />
            <Route path="/reviews" element={<MovieDetails />} />
          </Route>
        </Route> */}
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
