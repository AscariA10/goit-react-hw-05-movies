import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'utils/fetchFunctions';

const Reviews = () => {
   const [reviews, setReviews] = useState([]);
   const { movieId } = useParams();

   useEffect(() => {
      getMovieReviews(movieId)
         .then(response => response.json())
         .then(data => {
            setReviews(data);
         });
   }, [movieId]);
   console.log(reviews.results);
   return (
      <>
         <h2>Reviews</h2>
         <ul>
            {reviews.results?.map(element => {
               return (
                  <li key={element.id}>
                     <p>{element.author}</p>
                     <p>{element.content}</p>
                  </li>
               );
            })}
         </ul>
      </>
   );
};
export default Reviews;
