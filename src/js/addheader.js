import topMoviesLogo from '../images/top-movies-logo.png';

const addHeader = () => {
  const headerElement = document.querySelector('header');
  headerElement.classList.add('header');
  headerElement.innerHTML = `<img class="main-logo" src='${topMoviesLogo}' alt="top movies logo">
                              <div class="header-title">
                                <nav class="navlinks no-bullets">
                                  <li class ="home">Home</li>
                                  <li class="shows">Shows(<span class=total></span>)</li>
                                  <li class="about">About</li>
                                </nav>
                              </div>`;
};

export default addHeader;
