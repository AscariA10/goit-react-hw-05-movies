import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Credits = lazy(() => import('./Credits'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
   return (
      <Routes>
         <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
               <Route path="credits" element={<Credits />} />
               <Route path="reviews" element={<Reviews />} />
            </Route>
         </Route>
      </Routes>
   );
};
