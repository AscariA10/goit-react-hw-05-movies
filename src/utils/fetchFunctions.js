const API_KEY = '8ea73f499a52c9d06a5899ab37ef8d4c';

export async function getTrendMovies() {
   const queryData = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
   );
   return queryData;
}

export async function getMovieDetails(movie) {
   const movieInfo = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`
   );
   return movieInfo;
}
