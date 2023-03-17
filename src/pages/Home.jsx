// import { element } from 'prop-types';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { getTrendMovies } from '../utils/fetchFunctions';

export const Home = () => {
   const [filmList, setFilmList] = useState([]);

   const imagePath = 'https://image.tmdb.org/t/p/w500/';

   useEffect(() => {
      getTrendMovies()
         .then(response => response.json())
         .then(data => {
            setFilmList(data.results);
         });
   }, []);
   console.log(filmList);
   return (
      <>
         <h1>Trend movies</h1>
         <ul>
            {filmList.map(element => {
               return (
                  <li key={element.id}>
                     <img src={imagePath + element.backdrop_path} alt={element.title} />
                     <p>{element.title}</p>
                     <NavLink to={`/movies/${element.id}`}>{element.id}</NavLink>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
