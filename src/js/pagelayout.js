import showCards from './showcards.js';
import addFooter from './addfooter.js';

const pageLayout = () => {
  const mainContainer = document.querySelector('.main-container');

  showCards(mainContainer);
  addFooter(mainContainer);
};

export default pageLayout;