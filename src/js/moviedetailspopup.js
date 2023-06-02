import saveComment from './savecomment.js';
import getComments from './getcomments.js';
import countElements from './countelements.js';

const createCommentElement = (comment, commentsUl) => {
  const commentItem = document.createElement('li');
  commentItem.classList.add('comment-item');
  commentItem.innerHTML = `<span class="span-date">${comment.creation_date}</span>
  <span class="span-date"><strong>${comment.username}</strong>:</span>
  <span class="span-date">${comment.comment}</span>`;
  commentsUl.appendChild(commentItem);
};

const updateCommentTitleAccount = (count, commentsTitle) => {
  commentsTitle.textContent = `Comments (${count})`;
};

const validateAndSaveComment = (id, name, commentText, commentsUl, commentsTitle, spanError) => {
  if (!name.value || !commentText.value) {
    spanError.textContent = 'Please fill in all the fields';
    return;
  }

  const comment = {
    item_id: id,
    username: name.value,
    comment: commentText.value,
  };

  spanError.textContent = 'Saving comment...';

  saveComment(comment)
    .then(() => {
      // clear the input fields
      name.value = '';
      commentText.value = '';

      // add the actual date to the comment object
      comment.creation_date = new Date().toISOString().slice(0, 10);

      // Add the new comment to the comments list
      createCommentElement(comment, commentsUl);
      // update the count of comments in the title
      updateCommentTitleAccount(commentsUl.children.length, commentsTitle);
      spanError.textContent = '';
    })
    .catch(() => {
      spanError.textContent = 'An error occurred while saving the comment';
    });
};

const MovieDetailsPopup = async (movie) => {
  // Add class to body to prevent scrolling
  document.body.classList.add('popup-open');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Create a container element
  const container = document.createElement('div');
  container.classList.add('popup-container');

  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');

  // Create a close button
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = 'X';

  // Add event listener to close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    overlay.remove();
    document.body.classList.remove('popup-open');
  });

  // Create a popup element
  const popup = document.createElement('div');
  popup.classList.add('popup');

  // Create elements to display movie details
  const titleElement = document.createElement('h2');
  titleElement.textContent = movie.name;

  titleContainer.appendChild(titleElement);
  titleContainer.appendChild(closeButton);

  const imageSummaryContainer = document.createElement('div');
  imageSummaryContainer.classList.add('image-summary-container');

  const imageElement = document.createElement('img');
  imageElement.src = movie.image;

  const summaryElement = document.createElement('div');
  summaryElement.classList.add('summary');
  summaryElement.innerHTML = movie.summary;

  // Append the image and summary elements to the container
  imageSummaryContainer.appendChild(imageElement);
  imageSummaryContainer.appendChild(summaryElement);

  const detailsContainer = document.createElement('div');
  detailsContainer.classList.add('details-container');

  // Genres
  const genresElement = document.createElement('ul');
  genresElement.classList.add('genres-list');
  movie.genre.forEach((genre) => {
    const genreItem = document.createElement('li');
    genreItem.textContent = genre;
    genresElement.appendChild(genreItem);
  });

  // Language
  const detailsElement = document.createElement('p');
  detailsElement.classList.add('other-details-list');
  detailsElement.innerHTML = `<span class='span-languaje'><strong>Language</strong>: ${movie.language}</span>`
         + `<span class='span-premiered'><strong>Premiered</strong>: ${movie.premiered}</span>`
         + `<span class='span-runtime'><strong>Runtime</strong>: ${movie.runtime} min</span>`;

  // Append the elements to the details container
  detailsContainer.appendChild(genresElement);
  detailsContainer.appendChild(detailsElement);

  // Append the elements to the popup
  popup.appendChild(titleContainer);
  popup.appendChild(imageSummaryContainer);
  popup.appendChild(detailsContainer);

  // Append the popup to the container
  container.appendChild(popup);

  // Append the container to the overlay
  overlay.appendChild(container);

  // Add event listener to close the popup when clicked outside
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.remove();
    }
  });

  // Append the overlay to the document body
  document.body.appendChild(overlay);

  //* ***********  this section is for the comments interaction ******************

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const commentsTitle = document.createElement('h3');
  commentsTitle.classList.add('comments-title');
  commentsTitle.textContent = 'Comments';

  const commentsUl = document.createElement('ul');
  commentsUl.classList.add('comments-list');

  // read the data from the API
  getComments(movie.id)
    .then((commentsArr) => {
      commentsArr.forEach((comment) => {
        createCommentElement(comment, commentsUl);
      });

      // update the count of comments in the title
      updateCommentTitleAccount(countElements(commentsArr), commentsTitle);
    })
    .catch(() => {
      const commentItem = document.createElement('li');
      commentItem.classList.add('comment-item');
      // add a little comment to show error connection
      commentItem.innerHTML = '<span class="span-date"> >>  An error occurred while loading the comments  << </span>';
      commentsUl.appendChild(commentItem);
    });

  const newCommentContainer = document.createElement('div');
  newCommentContainer.classList.add('new-comment-container');

  const commentsTitle2 = document.createElement('h3');
  commentsTitle2.classList.add('add-your-comment-title');
  commentsTitle2.textContent = 'Add Your Comment';

  // Create yourname element
  const yourname = document.createElement('input');
  yourname.classList.add('comment-input');
  yourname.type = 'text';
  yourname.placeholder = 'Your Name';

  // Create your insights element
  const yourInsights = document.createElement('textarea');
  yourInsights.classList.add('comment-input');
  yourInsights.placeholder = 'Your Insights';

  // span for error message
  const spanError = document.createElement('span');
  spanError.classList.add('span-error');
  spanError.textContent = '';

  // Create Comment button
  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';

  // Add event listener to Comment button to call saveComments function
  commentButton.addEventListener('click', () => validateAndSaveComment(movie.id, yourname, yourInsights, commentsUl, commentsTitle, spanError));

  newCommentContainer.appendChild(commentsTitle2);
  newCommentContainer.appendChild(yourname);
  newCommentContainer.appendChild(yourInsights);
  newCommentContainer.appendChild(spanError);
  newCommentContainer.appendChild(commentButton);

  // Append the elements to the popup
  commentsContainer.appendChild(commentsTitle);
  commentsContainer.appendChild(commentsUl);
  commentsContainer.appendChild(newCommentContainer);
  popup.appendChild(commentsContainer);
};

export default MovieDetailsPopup;
