import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';

import { getMovie } from '../utils/fetchFunctions';

export const Movies = () => {
   const [query, setQuery] = useState('');
   const [searchedMovies, setSearchedMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const name = searchParams.get('name') ?? '';

   function onChangeHandler(event) {
      setQuery(event.target.value);
   }

   useEffect(() => {
      getMovie(name)
         .then(response => response.json())
         .then(data => {
            setSearchedMovies(data.results);
         });
   }, []);

   function onSubmitHandler(event) {
      event.preventDefault();
      setSearchParams({ name: query });
      getMovie(query)
         .then(response => response.json())
         .then(data => {
            setSearchedMovies(data.results);
         });
   }

   return (
      <>
         <h1>This is moviePage</h1>
         <form onSubmit={onSubmitHandler}>
            <input type="text" onChange={onChangeHandler} value={query} />
            <button type="submit">Get Movies!!!</button>
         </form>
         <ul>
            {searchedMovies.map(element => {
               return (
                  <li key={element.id}>
                     {' '}
                     <p>{element.original_title}</p>{' '}
                     <NavLink to={`/movies/${element.id}`}>{element.id}</NavLink>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
