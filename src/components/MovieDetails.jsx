import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails } from 'utils/fetchFunctions';

export const MovieDetails = () => {
   const [movieDetails, setMovieDetails] = useState('');
   const { movieId } = useParams();

   const imagePath = 'https://image.tmdb.org/t/p/w500/';

   useEffect(() => {
      getMovieDetails(movieId)
         .then(response => response.json())
         .then(data => {
            setMovieDetails(data);
         });
   }, [movieId]);
   console.log(movieDetails);

   const { original_title, poster_path, overview, vote_average, genres, release_date } =
      movieDetails;

   return (
      <>
         <h2>
            {original_title}({release_date?.slice(0, 4)})
         </h2>
         <img src={imagePath + poster_path} alt="" />
         <p>Overview: {overview}</p>
         <p>User Score: {vote_average}</p>
         <p>Genres: {genres?.map(element => element.name).join(', ')}</p>
      </>
   );
};
