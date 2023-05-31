import showCards from './showcards.js';
import addFooter from './addfooter.js';
import addHeader from './addheader.js';

const pageLayout = () => {
  const mainContainer = document.querySelector('.main-container');

  addHeader();
  showCards(mainContainer);
  addFooter();
};

export default pageLayout;