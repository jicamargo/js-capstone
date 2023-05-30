const MovieDetailsPopup = (movie) => {
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
  });

  // Create a popup element
  const popup = document.createElement('div');
  popup.classList.add('popup');

  // Create elements to display movie details
  const titleElement = document.createElement('h2');
  titleElement.textContent = movie.name;

  const imageElement = document.createElement('img');
  imageElement.src = movie.image;

  const ratingElement = document.createElement('p');
  ratingElement.textContent = `Rating: ${movie.rating}`;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = movie.description;

  // Append the elements to the popup
  popup.appendChild(closeButton);
  popup.appendChild(titleElement);
  popup.appendChild(imageElement);
  popup.appendChild(ratingElement);
  popup.appendChild(descriptionElement);

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
};

export default MovieDetailsPopup;