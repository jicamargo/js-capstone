import showCards from './showcards.js';
import addHeader from './addHeader.js';
import addFooter from './addFooter.js';


const pageLayout = () => {
  addHeader();
  const mainContainer = document.querySelector('.main-container');

  
  showCards(mainContainer);
  addFooter();
};

export default pageLayout;