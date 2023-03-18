const API_KEY = '8ea73f499a52c9d06a5899ab37ef8d4c';

export async function getTrendMovies() {
   const queryData = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
   );
   return queryData;
}

export async function getMovie(movie) {
   const movieInfo = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&language=en-US&page=1&include_adult=false`
   );
   return movieInfo;
}

export async function getMovieDetails(movie) {
   const movieInfo = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}?api_key=${API_KEY}&language=en-US`
   );
   return movieInfo;
}

export async function getMovieCredits(movie) {
   const creditsInfo = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=${API_KEY}&language=en-US`
   );
   return creditsInfo;
}

export async function getMovieReviews(movie) {
   const reviews = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}/reviews?api_key=${API_KEY}&language=en-US&page=1`
   );
   return reviews;
}
