import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';

import { getMovie } from '../utils/fetchFunctions';

const Movies = () => {
   const [searchedMovies, setSearchedMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const movieId = searchParams.get('movieId') ?? '';

   const location = useLocation();

   const updateQueryString = event => {
      if (event.target.value === '') {
         return setSearchParams({});
      }
      setSearchParams({ movieId: event.target.value });
   };

   // function onChangeHandler(event) {
   //    setSearchParams({ movieId: event.target.value });
   // }

   useEffect(() => {
      getMovie(movieId)
         .then(response => response.json())
         .then(data => {
            setSearchedMovies(data.results);
         });
   }, []);

   function onSubmitHandler(event) {
      event.preventDefault();
      getMovie(movieId)
         .then(response => response.json())
         .then(data => {
            setSearchedMovies(data.results);
         });
   }

   return (
      <>
         <h1>This is moviePage</h1>
         <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={updateQueryString} value={movieId} />
            <button type="submit">Get Movies!!!</button>
         </form>
         <ul>
            {searchedMovies.map(element => {
               return (
                  <li key={element.id}>
                     {' '}
                     <p>{element.original_title}</p>{' '}
                     <NavLink to={`/movies/${element.id}`} state={{ from: location }}>
                        {element.id}
                     </NavLink>
                  </li>
               );
            })}
         </ul>
      </>
   );
};

export default Movies;
