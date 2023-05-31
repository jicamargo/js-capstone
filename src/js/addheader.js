import topMoviesLogo from '../images/top-movies-logo.png';

const addHeader = () => {
  const headerElement = document.querySelector('header');
  headerElement.classList.add('header');
  headerElement.innerHTML = `<img src='${topMoviesLogo}' alt="top movies logo">
                              <nav class="navlinks">
                              <li>Home</li>
                              <li>Shows</li>
                              <li>About</li>
                              </nav>`;
};

export default addHeader;
