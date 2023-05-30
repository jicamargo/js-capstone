import showCards from './showcard.js';

const pageLayout = () => {
  const mainContainer = document.querySelector('.main-container');

  showCards(mainContainer);
};

export default pageLayout;