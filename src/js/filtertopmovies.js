import readAPI from './readapi.js';

const filterTopMovies = () => readAPI()
  .then((movies) => {
    // Create an array of movies from the movies object
    const movieArray = Object.values(movies);
    // Sort the movies in descending order based on their ratings
    const sortedMovies = movieArray.sort((a, b) => b.rating - a.rating);
    // Get the top 10 movies from the sorted array
    const top10Movies = sortedMovies.slice(0, 10);

    return top10Movies;
  })
  .catch((error) => {
    throw new Error(`An error occurred while filtering top movies: ${error}`);
  });

export default filterTopMovies;
