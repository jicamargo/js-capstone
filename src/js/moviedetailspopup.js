import saveComment from "./savecomment.js";
import getComments from "./getcomments.js";

const MovieDetailsPopup = async (movie) => {
  
 // Add class to body to prevent scrolling
 document.body.classList.add('popup-open');

  // Create overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  // Create a container element
  const container = document.createElement('div');
  container.classList.add('popup-container');

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
  const languageElement = document.createElement('p');
  languageElement.textContent = `Language: ${movie.language}`;

  // Premiered
  const premieredElement = document.createElement('p');
  premieredElement.textContent = `Premiered: ${movie.premiered}`;

  // Runtime
  const runtimeElement = document.createElement('p');
  runtimeElement.textContent = `Runtime: ${movie.runtime} min`;

  // Append the elements to the details container
  detailsContainer.appendChild(genresElement);
  detailsContainer.appendChild(languageElement);
  detailsContainer.appendChild(premieredElement);
  detailsContainer.appendChild(runtimeElement);

  // Append the elements to the popup
  popup.appendChild(closeButton);
  popup.appendChild(titleElement);
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

  //********************  this section is for the comments interaction *******************************

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-container');

  const commentstitle = document.createElement('h3');
  commentstitle.classList.add('comments-title');
  commentstitle.textContent = 'Comments';
  
  const commentsUl = document.createElement('ul');
  commentsUl.classList.add('comments-list');

  // read the data from the API
  getComments(movie.id)
  .then(commentsArr => {
      commentsArr.forEach((comment) => {
        const commentItem = document.createElement('li');
        commentItem.classList.add('comment-item');
        commentItem.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
        commentsUl.appendChild(commentItem);
      });

      // update the count of comments in the title
      commentstitle.textContent = `Comments (${commentsArr.length})`;

    })
  .catch(error => {
    // Handle error
    console.log("This movie has no comments");
  });

   
 
  const newCommentContainer = document.createElement('div');
  newCommentContainer.classList.add('new-comment-container');

  const commentstitle2 = document.createElement('h3');
  commentstitle2.classList.add('add-your-comment-title');
  commentstitle2.textContent = 'Add Your Comment';

  // Create yourname element
  const yourname = document.createElement('input');
  yourname.type = 'text';
  yourname.placeholder = 'Your Name';

  // Create your insights element
  const yourInsights = document.createElement('textarea');
  yourInsights.placeholder = 'Your Insights';

  // Create Comment button
  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';

  // Add event listener to Comment button to call saveComments function
  commentButton.addEventListener('click', () => {
    if (!yourname.value || !yourInsights.value) {
      return;
    }

    const comment = {
      item_id: movie.id,
      username: yourname.value,
      comment: yourInsights.value,
    };

    saveComment(comment)
      .then(data => {
        // Handle success
        console.log(data);
      })
      .catch(error => {
        // Handle error
        console.log(error);
    });

    // clear the input fields
    yourname.value = '';
    yourInsights.value = '';

    // Add the new comment to the comments list
    const commentItem = document.createElement('li');
    commentItem.classList.add('comment-item');
    commentItem.innerHTML = `<strong>${comment.username}</strong>: ${comment.comment}`;
    commentsUl.appendChild(commentItem);
  });

  newCommentContainer.appendChild(commentstitle2);
  newCommentContainer.appendChild(yourname);
  newCommentContainer.appendChild(yourInsights);
  newCommentContainer.appendChild(commentButton);
  
  // Append the elements to the popup
  commentsContainer.appendChild(commentstitle);
  commentsContainer.appendChild(commentsUl);
  commentsContainer.appendChild(newCommentContainer);
  popup.appendChild(commentsContainer);

};

export default MovieDetailsPopup;
