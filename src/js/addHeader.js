const addHeader = () => {
  const pageBody = document.querySelector('body');
  const headerElement = document.createElement('header');
  headerElement.classList.add('header');
  headerElement.innerhtml = `<img src="./images/top-movies-logo.png" alt="top movies logo">`;

  pageBody.appendChild(headerElement);
};

export default addHeader;