import showCards from './showcards.js';
import addFooter from './addFooter.js';


const pageLayout = () => {
  const mainContainer = document.querySelector('.main-container');

  showCards(mainContainer);
  addFooter();
};

export default pageLayout;