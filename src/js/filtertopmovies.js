import readAPI from './readapi.js';

// Create an array of movies from the movies object
// Sort the movies in descending order based on their ratings
// Get the top 10 movies from the sorted array

const filterTopMovies = () => readAPI().then((movies) => {
  const movieArray = Object.values(movies);
  const sortedMovies = movieArray.sort((a, b) => b.rating - a.rating);
  const top10Movies = sortedMovies.slice(0, 10);

  return top10Movies;
})
  .catch((error) => {
    throw new Error(`An error occurred while filtering top movies: ${error}`);
  });

export default filterTopMovies;
