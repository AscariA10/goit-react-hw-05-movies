import { element } from 'prop-types';
import { useState, useEffect } from 'react';

import { getTrendMovies } from '../utils/fetchFunctions';

export const Home = () => {
   const [filmList, setFilmList] = useState([]);

   useEffect(() => {
      getTrendMovies()
         .then(response => response.json())
         .then(data => {
            console.log(data.results);
            setFilmList(data.results);
         });
   }, []);
   console.log('filmList', filmList);
   return (
      <>
         <h1>Trend movies</h1>
         <ul>
            {filmList.map(element => {
               return <li key={element.id}>{element.title}</li>;
            })}
         </ul>
      </>
   );
};
