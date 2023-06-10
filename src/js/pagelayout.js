import showCards from './showcards.js';
import addFooter from './addfooter.js';
import addHeader from './addheader.js';
import addOptionButtons from './addoptionsbuttons.js';

const pageLayout = () => {
  const mainContainer = document.getElementById('main-container');

  addHeader();
  addOptionButtons();
  showCards(mainContainer, 5);
  addFooter();
};

export default pageLayout;