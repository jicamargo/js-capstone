import filterTopMovies from './filtertopmovies.js';
import MovieDetailsPopup from './moviedetailspopup.js';
import fetchLikes from './fetchlikes.js';
import updateLikes from './updatelikes.js';
import countElements from './countelements.js';

const showCards = async (mainContainer) => {
  const newSection = document.createElement('section');
  const ulElement = document.createElement('ul');

  try {
    const top10Movies = await filterTopMovies();
    const totalMovies = countElements(top10Movies);
    // update the DOM span element with id=totalMovie with the total of movies
    document.getElementById('totalMovies').innerHTML = totalMovies;
    document.querySelector('.total').innerHTML = totalMovies;

    const appId = 'lwgScw6o5MEbQLNCvzXw';

    // Fetch likes from the involvement API
    const likesData = await fetchLikes(appId);

    newSection.classList.add('movies-section');
    newSection.innerHTML = '';
    mainContainer.appendChild(newSection);

    ulElement.classList.add('ul-cards');
    newSection.appendChild(ulElement);

    top10Movies.forEach((movie) => {
      const liElement = document.createElement('li');
      liElement.classList.add('li-card');

      const imageElement = document.createElement('img');
      imageElement.src = movie.image;
      imageElement.addEventListener('click', () => { MovieDetailsPopup(movie); });

      const nameElement = document.createElement('h3');
      nameElement.textContent = movie.name;

      // Find the likes for this movie
      const movieLikesData = likesData.find((like) => like.item_id === movie.id.toString());
      const movieLikes = movieLikesData ? movieLikesData.likes : 0;

      const ratingLikesContainer = document.createElement('div');
      ratingLikesContainer.classList.add('rating-likes-container');

      const ratingElement = document.createElement('p');
      ratingElement.textContent = `Rating: ${movie.rating}`;

      const likesElement = document.createElement('div');
      likesElement.classList.add('likes-container');
      likesElement.innerHTML = `
        <span class="like-button">❤️</span>
        <span class="likes-count">${movieLikes}</span>
      `;

      // Add an event listener to the heart icon to update likes when clicked
      likesElement.querySelector('.like-button').addEventListener('click', () => {
        updateLikes(appId, movie.id.toString())
          .then(() => {
          // increase 1 like in the DOM
            const likesCount = likesElement.querySelector('.likes-count');
            likesCount.textContent = parseInt(likesCount.textContent, 10) + 1;
          });
      });

      const commentsButton = document.createElement('button');
      commentsButton.classList.add('comments-btn');
      commentsButton.textContent = 'Comments';
      commentsButton.addEventListener('click', () => { MovieDetailsPopup(movie); });

      liElement.appendChild(imageElement);
      liElement.appendChild(nameElement);
      liElement.appendChild(ratingLikesContainer);
      liElement.appendChild(commentsButton);

      ulElement.appendChild(liElement);
      // Append the rating and likes elements to the ratingLikesContainer
      ratingLikesContainer.appendChild(ratingElement);
      ratingLikesContainer.appendChild(likesElement);
    });
  } catch (error) {
    return null;
  }
  return null;
};

export default showCards;
