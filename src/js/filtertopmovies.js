import readAPI from './readapi.js';

const filterTopMovies = () => {
  return new Promise((resolve, reject) => {
    readAPI()
      .then(movies => {
      // Create an array of movies from the movies object
      // Sort the movies in descending order based on their ratings
      // Get the top 10 movies from the sorted array
      const movieArray = Object.values(movies);
        const sortedMovies = movieArray.sort((a, b) => b.rating - a.rating);
        const top10Movies = sortedMovies.slice(0, 10);

        console.log(top10Movies);
        resolve(top10Movies);
      })
      .catch(error => {
        console.error('An error occurred reading API:', error);
        reject(error);
      });
  });
};

export default filterTopMovies;

