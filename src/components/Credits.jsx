import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'utils/fetchFunctions';

export const Credits = () => {
   const [credits, setCredits] = useState({});
   const { movieId } = useParams();

   useEffect(() => {
      getMovieCredits(movieId)
         .then(response => response.json())
         .then(data => {
            setCredits(data);
         });
   }, [movieId]);

   return (
      <>
         <h2>Actors</h2>
         <ul>
            {credits.cast?.map(element => (
               <li key={element.id}>
                  {element.character}: {element.original_name}
               </li>
            ))}
         </ul>
      </>
   );
};
