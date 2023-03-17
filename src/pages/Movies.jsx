import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { getTrendMovies } from '../utils/fetchFunctions';

export const Movies = () => {
   const [filmList, setFilmList] = useState([]);

   const imagePath = 'https://image.tmdb.org/t/p/w500/';

   useEffect(() => {
      getTrendMovies()
         .then(response => response.json())
         .then(data => {
            setFilmList(data.results);
         });
   }, []);

   return (
      <>
         <h1>This is moviePage</h1>
         <ul>
            {filmList.map(element => {
               return (
                  <li key={element.id}>
                     <img src={imagePath + element.backdrop_path} alt={element.title} />
                     <p>{element.title}</p>
                     <NavLink to={`${element.id}`}>{element.id}</NavLink>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
