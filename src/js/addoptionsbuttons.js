import showCards from './showcards.js';

function assignClickEventToOptions(callback) {
  const optionButtons = document.querySelectorAll('.checkbox-budget');

  optionButtons.forEach((button) => {
    const number = parseInt(button.id.split('-')[1]);
    button.addEventListener('click', () => {
      callback(number);
    });
  });
}

function handleOptionButtonClick(number) {
  console.log(`Clicked option button with number: ${number}`);
  
  const mainContainer = document.querySelector('.main-container');

  let showMovies;

  // case to select number of movies to show
  switch (number) {
    case 1: 
      showMovies = 5;
      break;
    case 2: 
      showMovies = 10;
      break;
    case 3: 
      showMovies = 20;
      break;
    default:
      showMovies = 5;
  }
  
  showCards(mainContainer, showMovies);
}


const addOptionButtons = () => {
  const headerElement = document.querySelector('header');
  // add options buttons div to header  
  const optionsDiv = document.createElement('div');
  optionsDiv.classList.add('option-buttons');
  // add inner html to options buttons div
  optionsDiv.innerHTML = ` 
      <div class="section over-hide z-bigger">
      <input class="checkbox" type="checkbox" name="general" id="general">
      <label class="for-checkbox" for="general"></label>
      <div class="section over-hide z-bigger">
        <div class="container pb-5">
          <div class="row justify-content-center pb-5">
            
            <div class="col-xl-10 pb-5 optionButtons">
              <input class="checkbox-budget" type="radio" name="budget" id="budget-1" checked>
              <label class="for-checkbox-budget" for="budget-1">
                <span data-hover="Top 5">Top 5</span>
              </label><!--
              --><input class="checkbox-budget" type="radio" name="budget" id="budget-2">
              <label class="for-checkbox-budget" for="budget-2">							
                <span data-hover="Top 10">Top 10</span>
              </label><!--
              --><input class="checkbox-budget" type="radio" name="budget" id="budget-3">
              <label class="for-checkbox-budget" for="budget-3">							
                <span data-hover="Top 20">Top 20</span>
              </label>
              
            </div>
          </div>
        </div>	
      </div>
    </div>
  `;
  
  headerElement.appendChild(optionsDiv);

  assignClickEventToOptions(handleOptionButtonClick);

};

export default addOptionButtons;



