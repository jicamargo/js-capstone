const addFooter = () => {
  const pageBody = document.querySelector('body');
  const footerElement = document.createElement('footer');
  footerElement.classList.add('footer');
  footerElement.textContent = '© 2023 TOP 10 Movies - Created by Fortune and JIC Software for Microverse ';

  pageBody.appendChild(footerElement);
};

export default addFooter;
