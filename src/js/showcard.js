const showCards = (mainContainer) => {
  const newSection = document.createElement('section');

  newSection.classList.add('movies-section');
  newSection.innerHTML = `
    <h2>Movies</h2>
    <ul id="ul-cards" class="ul-cards">
      <li class="li-cards">example of card</li>
    </ul>
  `;
  mainContainer.appendChild(newSection);
};

export default showCards;