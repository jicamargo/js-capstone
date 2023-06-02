/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/popup.css */ \"./src/css/popup.css\");\n/* harmony import */ var _js_pagelayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pagelayout.js */ \"./src/js/pagelayout.js\");\n\n\n\n\n// import dataStruc from './datastruc.js';  // consider renaming to dataStructure of the API\n\n(0,_js_pagelayout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/js/addfooter.js":
/*!*****************************!*\
  !*** ./src/js/addfooter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addFooter = () => {\n  const footerElement = document.querySelector('footer');\n  footerElement.classList.add('footer');\n  footerElement.textContent = '© 2023 TOP 10 Movies - Created by Fortune and JIC Software for Microverse ';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addFooter);\n\n//# sourceURL=webpack://js-capstone/./src/js/addfooter.js?");

/***/ }),

/***/ "./src/js/addheader.js":
/*!*****************************!*\
  !*** ./src/js/addheader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_top_movies_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/top-movies-logo.png */ \"./src/images/top-movies-logo.png\");\n\nconst addHeader = () => {\n  const headerElement = document.querySelector('header');\n  headerElement.classList.add('header');\n  headerElement.innerHTML = `<img class=\"main-logo\" src='${_images_top_movies_logo_png__WEBPACK_IMPORTED_MODULE_0__}' alt=\"top movies logo\">\n                              <div class=\"header-title\">\n                                <nav class=\"navlinks no-bullets\">\n                                  <li>Home</li>\n                                  <li>Shows</li>\n                                  <li>About</li>\n                                </nav>\n                              </div>`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addHeader);\n\n//# sourceURL=webpack://js-capstone/./src/js/addheader.js?");

/***/ }),

/***/ "./src/js/countelements.js":
/*!*********************************!*\
  !*** ./src/js/countelements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// this funtions is intended to implement a test with JEST\nconst countElements = array => array.length;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countElements);\n\n//# sourceURL=webpack://js-capstone/./src/js/countelements.js?");

/***/ }),

/***/ "./src/js/fetchlikes.js":
/*!******************************!*\
  !*** ./src/js/fetchlikes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst fetchLikes = async appId => {\n  const response = await fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch likes from the Involvement API');\n  }\n  const data = await response.text(); // read the response as text\n  return data ? JSON.parse(data) : [];\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack://js-capstone/./src/js/fetchlikes.js?");

/***/ }),

/***/ "./src/js/filtertopmovies.js":
/*!***********************************!*\
  !*** ./src/js/filtertopmovies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _readapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./readapi.js */ \"./src/js/readapi.js\");\n\nconst filterTopMovies = () => (0,_readapi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(movies => {\n  // Create an array of movies from the movies object\n  const movieArray = Object.values(movies);\n  // Sort the movies in descending order based on their ratings\n  const sortedMovies = movieArray.sort((a, b) => b.rating - a.rating);\n  // Get the top 10 movies from the sorted array\n  const top10Movies = sortedMovies.slice(0, 10);\n  return top10Movies;\n}).catch(error => {\n  throw new Error(`An error occurred while filtering top movies: ${error}`);\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterTopMovies);\n\n//# sourceURL=webpack://js-capstone/./src/js/filtertopmovies.js?");

/***/ }),

/***/ "./src/js/getcomments.js":
/*!*******************************!*\
  !*** ./src/js/getcomments.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getComments = movieId => new Promise((resolve, reject) => {\n  const API_APP_ID = 'lwgScw6o5MEbQLNCvzXw';\n  const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_APP_ID}/`;\n  const url = `${URL_API}comments?item_id=${movieId}`;\n  fetch(url).then(response => response.json()).then(commentsInfo => {\n    if (commentsInfo.length > 0) {\n      resolve(commentsInfo);\n    } else {\n      resolve([]);\n    }\n  }).catch(() => {\n    reject();\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getComments);\n\n//# sourceURL=webpack://js-capstone/./src/js/getcomments.js?");

/***/ }),

/***/ "./src/js/moviedetailspopup.js":
/*!*************************************!*\
  !*** ./src/js/moviedetailspopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _savecomment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savecomment.js */ \"./src/js/savecomment.js\");\n/* harmony import */ var _getcomments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getcomments.js */ \"./src/js/getcomments.js\");\n/* harmony import */ var _countelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countelements.js */ \"./src/js/countelements.js\");\n\n\n\nconst createCommentElement = (comment, commentsUl) => {\n  const commentItem = document.createElement('li');\n  commentItem.classList.add('comment-item');\n  commentItem.innerHTML = `<span class=\"span-date\">${comment.creation_date}</span>\n  <span class=\"span-date\"><strong>${comment.username}</strong>:</span>\n  <span class=\"span-date\">${comment.comment}</span>`;\n  commentsUl.appendChild(commentItem);\n};\nconst updateCommentTitleAccount = (count, commentsTitle) => {\n  commentsTitle.textContent = `Comments (${count})`;\n};\nconst validateAndSaveComment = (id, name, commentText, commentsUl, commentsTitle, spanError) => {\n  if (!name.value || !commentText.value) {\n    spanError.textContent = 'Please fill in all the fields';\n    return;\n  }\n  const comment = {\n    item_id: id,\n    username: name.value,\n    comment: commentText.value\n  };\n  spanError.textContent = 'Saving comment...';\n  (0,_savecomment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(comment).then(() => {\n    // clear the input fields\n    name.value = '';\n    commentText.value = '';\n\n    // add the actual date to the comment object\n    comment.creation_date = new Date().toISOString().slice(0, 10);\n\n    // Add the new comment to the comments list\n    createCommentElement(comment, commentsUl);\n    // update the count of comments in the title\n    updateCommentTitleAccount(commentsUl.children.length, commentsTitle);\n    spanError.textContent = '';\n  }).catch(() => {\n    spanError.textContent = 'An error occurred while saving the comment';\n  });\n};\nconst MovieDetailsPopup = async movie => {\n  // Add class to body to prevent scrolling\n  document.body.classList.add('popup-open');\n\n  // Create overlay element\n  const overlay = document.createElement('div');\n  overlay.classList.add('overlay');\n\n  // Create a container element\n  const container = document.createElement('div');\n  container.classList.add('popup-container');\n  const titleContainer = document.createElement('div');\n  titleContainer.classList.add('title-container');\n\n  // Create a close button\n  const closeButton = document.createElement('button');\n  closeButton.classList.add('close-button');\n  closeButton.innerHTML = 'X';\n\n  // Add event listener to close the popup when the close button is clicked\n  closeButton.addEventListener('click', () => {\n    overlay.remove();\n    document.body.classList.remove('popup-open');\n  });\n\n  // Create a popup element\n  const popup = document.createElement('div');\n  popup.classList.add('popup');\n\n  // Create elements to display movie details\n  const titleElement = document.createElement('h2');\n  titleElement.textContent = movie.name;\n  titleContainer.appendChild(titleElement);\n  titleContainer.appendChild(closeButton);\n  const imageSummaryContainer = document.createElement('div');\n  imageSummaryContainer.classList.add('image-summary-container');\n  const imageElement = document.createElement('img');\n  imageElement.src = movie.image;\n  const summaryElement = document.createElement('div');\n  summaryElement.classList.add('summary');\n  summaryElement.innerHTML = movie.summary;\n\n  // Append the image and summary elements to the container\n  imageSummaryContainer.appendChild(imageElement);\n  imageSummaryContainer.appendChild(summaryElement);\n  const detailsContainer = document.createElement('div');\n  detailsContainer.classList.add('details-container');\n\n  // Genres\n  const genresElement = document.createElement('ul');\n  genresElement.classList.add('genres-list');\n  movie.genre.forEach(genre => {\n    const genreItem = document.createElement('li');\n    genreItem.textContent = genre;\n    genresElement.appendChild(genreItem);\n  });\n\n  // Language\n  const detailsElement = document.createElement('p');\n  detailsElement.classList.add('other-details-list');\n  detailsElement.innerHTML = `<span class='span-languaje'><strong>Language</strong>: ${movie.language}</span>` + `<span class='span-premiered'><strong>Premiered</strong>: ${movie.premiered}</span>` + `<span class='span-runtime'><strong>Runtime</strong>: ${movie.runtime} min</span>`;\n\n  // Append the elements to the details container\n  detailsContainer.appendChild(genresElement);\n  detailsContainer.appendChild(detailsElement);\n\n  // Append the elements to the popup\n  popup.appendChild(titleContainer);\n  popup.appendChild(imageSummaryContainer);\n  popup.appendChild(detailsContainer);\n\n  // Append the popup to the container\n  container.appendChild(popup);\n\n  // Append the container to the overlay\n  overlay.appendChild(container);\n\n  // Add event listener to close the popup when clicked outside\n  overlay.addEventListener('click', event => {\n    if (event.target === overlay) {\n      overlay.remove();\n    }\n  });\n\n  // Append the overlay to the document body\n  document.body.appendChild(overlay);\n\n  //* ***********  this section is for the comments interaction ******************\n\n  const commentsContainer = document.createElement('div');\n  commentsContainer.classList.add('comments-container');\n  const commentsTitle = document.createElement('h3');\n  commentsTitle.classList.add('comments-title');\n  commentsTitle.textContent = 'Comments';\n  const commentsUl = document.createElement('ul');\n  commentsUl.classList.add('comments-list');\n\n  // read the data from the API\n  (0,_getcomments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie.id).then(commentsArr => {\n    commentsArr.forEach(comment => {\n      createCommentElement(comment, commentsUl);\n    });\n\n    // update the count of comments in the title\n    updateCommentTitleAccount((0,_countelements_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentsArr), commentsTitle);\n  }).catch(() => {\n    const commentItem = document.createElement('li');\n    commentItem.classList.add('comment-item');\n    // add a little comment to show error connection\n    commentItem.innerHTML = '<span class=\"span-date\"> >>  An error occurred while loading the comments  << </span>';\n    commentsUl.appendChild(commentItem);\n  });\n  const newCommentContainer = document.createElement('div');\n  newCommentContainer.classList.add('new-comment-container');\n  const commentsTitle2 = document.createElement('h3');\n  commentsTitle2.classList.add('add-your-comment-title');\n  commentsTitle2.textContent = 'Add Your Comment';\n\n  // Create yourname element\n  const yourname = document.createElement('input');\n  yourname.classList.add('comment-input');\n  yourname.type = 'text';\n  yourname.placeholder = 'Your Name';\n\n  // Create your insights element\n  const yourInsights = document.createElement('textarea');\n  yourInsights.classList.add('comment-input');\n  yourInsights.placeholder = 'Your Insights';\n\n  // span for error message\n  const spanError = document.createElement('span');\n  spanError.classList.add('span-error');\n  spanError.textContent = '';\n\n  // Create Comment button\n  const commentButton = document.createElement('button');\n  commentButton.textContent = 'Comment';\n\n  // Add event listener to Comment button to call saveComments function\n  commentButton.addEventListener('click', () => validateAndSaveComment(movie.id, yourname, yourInsights, commentsUl, commentsTitle, spanError));\n  newCommentContainer.appendChild(commentsTitle2);\n  newCommentContainer.appendChild(yourname);\n  newCommentContainer.appendChild(yourInsights);\n  newCommentContainer.appendChild(spanError);\n  newCommentContainer.appendChild(commentButton);\n\n  // Append the elements to the popup\n  commentsContainer.appendChild(commentsTitle);\n  commentsContainer.appendChild(commentsUl);\n  commentsContainer.appendChild(newCommentContainer);\n  popup.appendChild(commentsContainer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieDetailsPopup);\n\n//# sourceURL=webpack://js-capstone/./src/js/moviedetailspopup.js?");

/***/ }),

/***/ "./src/js/pagelayout.js":
/*!******************************!*\
  !*** ./src/js/pagelayout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _showcards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showcards.js */ \"./src/js/showcards.js\");\n/* harmony import */ var _addfooter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addfooter.js */ \"./src/js/addfooter.js\");\n/* harmony import */ var _addheader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addheader.js */ \"./src/js/addheader.js\");\n\n\n\nconst pageLayout = () => {\n  const mainContainer = document.querySelector('.main-container');\n  (0,_addheader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_showcards_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mainContainer);\n  (0,_addfooter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLayout);\n\n//# sourceURL=webpack://js-capstone/./src/js/pagelayout.js?");

/***/ }),

/***/ "./src/js/readapi.js":
/*!***************************!*\
  !*** ./src/js/readapi.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function to fetch data from the TV Maze API and create a local object\n\nconst readAPI = async () => {\n  const apiUrl = 'https://api.tvmaze.com/shows?Show%5BshowStatus_enum%5D=2&Show%5BshowType_enum%5D=&Show%5Bgenre%5D=&Show%5Blanguage_enum%5D=61&Show%5Bcountry_enum%5D=&Show%5Bnetwork_id%5D=&Show%5BwebChannel_id%5D=&Show%5Bruntime%5D=&Show%5Brating%5D=90&Show%5Bsort%5D=1';\n  const response = await fetch(apiUrl);\n  if (!response.ok) {\n    throw new Error('Failed to fetch data from the API');\n  }\n  const data = await response.json();\n  const localObject = {};\n  data.forEach(show => {\n    localObject[show.id] = {\n      id: show.id,\n      name: show.name,\n      status: show.status,\n      genre: show.genres,\n      image: show.image.medium,\n      imageOriginal: show.image.original,\n      language: show.language,\n      premiered: show.premiered,\n      rating: show.rating.average,\n      runtime: show.runtime,\n      summary: show.summary\n    };\n  });\n  return localObject;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (readAPI);\n\n//# sourceURL=webpack://js-capstone/./src/js/readapi.js?");

/***/ }),

/***/ "./src/js/savecomment.js":
/*!*******************************!*\
  !*** ./src/js/savecomment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst saveComments = comment => {\n  // the parameter comment is an object with the following structure:\n  // {\n  //   item_id: movie.id,\n  //   username: yourname.value,\n  //   comment: yourInsights.value,\n  // }\n  // the function saveComments should send this object to the API\n\n  const API_APP_ID = 'lwgScw6o5MEbQLNCvzXw'; // Variable to store the API App ID\n  const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_APP_ID}/`;\n  const url = `${URL_API}comments`;\n\n  // Trim and convert comment to  sentence case\n  comment.username = comment.username.trim().toLowerCase();\n  comment.comment = comment.comment.trim();\n  comment.comment = comment.comment.charAt(0).toUpperCase() + comment.comment.slice(1).toLowerCase();\n  return new Promise((resolve, reject) => {\n    fetch(url, {\n      method: 'POST',\n      body: JSON.stringify(comment),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    }).then(response => {\n      if (response.status === 201) {\n        resolve();\n      } else {\n        reject();\n      }\n    }).catch(error => {\n      reject(error);\n    });\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveComments);\n\n//# sourceURL=webpack://js-capstone/./src/js/savecomment.js?");

/***/ }),

/***/ "./src/js/showcards.js":
/*!*****************************!*\
  !*** ./src/js/showcards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _filtertopmovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtertopmovies.js */ \"./src/js/filtertopmovies.js\");\n/* harmony import */ var _moviedetailspopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moviedetailspopup.js */ \"./src/js/moviedetailspopup.js\");\n/* harmony import */ var _fetchlikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchlikes.js */ \"./src/js/fetchlikes.js\");\n/* harmony import */ var _updatelikes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updatelikes.js */ \"./src/js/updatelikes.js\");\n/* harmony import */ var _countelements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countelements.js */ \"./src/js/countelements.js\");\n\n\n\n\n\nconst showCards = async mainContainer => {\n  const newSection = document.createElement('section');\n  const ulElement = document.createElement('ul');\n  try {\n    const top10Movies = await (0,_filtertopmovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const totalMovies = (0,_countelements_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(top10Movies);\n    // update the DOM span element with id=totalMovies with the total of movies\n    document.getElementById('totalMovies').innerHTML = totalMovies;\n    const appId = 'lwgScw6o5MEbQLNCvzXw';\n\n    // Fetch likes from the involvement API\n    const likesData = await (0,_fetchlikes_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(appId);\n    newSection.classList.add('movies-section');\n    newSection.innerHTML = '';\n    mainContainer.appendChild(newSection);\n    ulElement.classList.add('ul-cards');\n    newSection.appendChild(ulElement);\n    top10Movies.forEach(movie => {\n      const liElement = document.createElement('li');\n      liElement.classList.add('li-card');\n      const imageElement = document.createElement('img');\n      imageElement.src = movie.image;\n      imageElement.addEventListener('click', () => {\n        (0,_moviedetailspopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie);\n      });\n      const nameElement = document.createElement('h3');\n      nameElement.textContent = movie.name;\n\n      // Find the likes for this movie\n      const movieLikesData = likesData.find(like => like.item_id === movie.id.toString());\n      const movieLikes = movieLikesData ? movieLikesData.likes : 0;\n      const ratingLikesContainer = document.createElement('div');\n      ratingLikesContainer.classList.add('rating-likes-container');\n      const ratingElement = document.createElement('p');\n      ratingElement.textContent = `Rating: ${movie.rating}`;\n      const likesElement = document.createElement('div');\n      likesElement.classList.add('likes-container');\n      likesElement.innerHTML = `\n        <span class=\"like-button\">❤️</span>\n        <span class=\"likes-count\">${movieLikes}</span>\n      `;\n\n      // Add an event listener to the heart icon to update likes when clicked\n      likesElement.querySelector('.like-button').addEventListener('click', () => {\n        (0,_updatelikes_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(appId, movie.id.toString()).then(() => {\n          // increase 1 like in the DOM\n          const likesCount = likesElement.querySelector('.likes-count');\n          likesCount.textContent = parseInt(likesCount.textContent, 10) + 1;\n        });\n      });\n      const commentsButton = document.createElement('button');\n      commentsButton.classList.add('comments-btn');\n      commentsButton.textContent = 'Comments';\n      commentsButton.addEventListener('click', () => {\n        (0,_moviedetailspopup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(movie);\n      });\n      liElement.appendChild(imageElement);\n      liElement.appendChild(nameElement);\n      liElement.appendChild(ratingLikesContainer);\n      liElement.appendChild(commentsButton);\n      ulElement.appendChild(liElement);\n      // Append the rating and likes elements to the ratingLikesContainer\n      ratingLikesContainer.appendChild(ratingElement);\n      ratingLikesContainer.appendChild(likesElement);\n    });\n  } catch (error) {\n    return null;\n  }\n  return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCards);\n\n//# sourceURL=webpack://js-capstone/./src/js/showcards.js?");

/***/ }),

/***/ "./src/js/updatelikes.js":
/*!*******************************!*\
  !*** ./src/js/updatelikes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst updateLikes = (appId, itemId) => new Promise((resolve, reject) => {\n  fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({\n      item_id: itemId\n    })\n  }).then(response => {\n    if (response.status === 201) {\n      resolve();\n    } else {\n      reject();\n    }\n  }).catch(error => {\n    reject(error);\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateLikes);\n\n//# sourceURL=webpack://js-capstone/./src/js/updatelikes.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body.popup-open {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.7);\\r\\n  z-index: 9998;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  --secondary-color-transparency: rgba(247, 86, 124, 0.126);\\r\\n\\r\\n  font-family: var(--font-family-titles);\\r\\n  position: fixed;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  background-color: var(--primary-color);\\r\\n  padding: 0 18px 18px 18px;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\\r\\n  z-index: 9999;\\r\\n  max-width: 500px;\\r\\n  width: 90%;\\r\\n  max-height: 90vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.title-container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  background-color: var(--secondary-color);\\r\\n  border-radius: 8px;\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.title-container h2 {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: bold;\\r\\n  margin: 0.5rem 1rem;\\r\\n  color: var(--background-color);\\r\\n}\\r\\n\\r\\n/* CSS styles for the close button */\\r\\n.close-button {\\r\\n  right: 20px;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  color: var(--font-color);\\r\\n  font-size: 20px;\\r\\n  font-weight: bold;\\r\\n  background-color: transparent;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-button:hover {\\r\\n  color: #f00;\\r\\n}\\r\\n\\r\\n.popup p {\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 12px;\\r\\n}\\r\\n\\r\\n.image-summary-container {\\r\\n  padding-top: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.image-summary-container img {\\r\\n  max-width: 100%;\\r\\n  height: auto;\\r\\n  max-height: 240px;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n/* CSS styles for the genres list */\\r\\n.genres-list {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  margin: 0.4rem 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.genres-list li {\\r\\n  margin-right: 6px;\\r\\n  padding: 4px 10px;\\r\\n  background-color: var(--secondary-color);\\r\\n  border-radius: 14px;\\r\\n  color: var(--third-color);\\r\\n  font-size: 0.6rem;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n/* CSS styles for the details container */\\r\\n.details-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin: 0.4rem 0;\\r\\n}\\r\\n\\r\\n.other-details-list {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n/* CSS styles for the summary */\\r\\n.summary {\\r\\n  text-align: justify;\\r\\n  max-height: 300px;\\r\\n  overflow: auto;\\r\\n  padding: 0.2rem 0.4rem;\\r\\n  border-top: 2px solid var(--font-color-secondary);\\r\\n  border-bottom: 2px solid var(--font-color-secondary);\\r\\n  font-size: 1rem;\\r\\n}\\r\\n\\r\\n.comments-title {\\r\\n  font-size: 0.9rem;\\r\\n  font-weight: bold;\\r\\n  margin: 0.4rem 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-list {\\r\\n  list-style: none;\\r\\n  display: block;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  border: 1px solid #ccc;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);\\r\\n  max-height: 100px;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.comment-item {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  padding: 4px;\\r\\n  gap: 8px;\\r\\n}\\r\\n\\r\\n.comment-item > span {\\r\\n  font-size: 0.7rem;\\r\\n  font-style: italic;\\r\\n  color: var(--third-color);\\r\\n}\\r\\n\\r\\n.comment-item:nth-child(odd) {\\r\\n  background-color: var(--secondary-color-transparency);\\r\\n}\\r\\n\\r\\n.new-comment-container {\\r\\n  background-color: var(--font-color-secondary);\\r\\n  max-width: 400px;\\r\\n  padding: 0.5rem 1.5rem;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n  margin: auto;\\r\\n  margin-top: 1.4rem;\\r\\n  border-radius: 8px;\\r\\n  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);\\r\\n}\\r\\n\\r\\n.comment-input {\\r\\n  padding: 5px;\\r\\n  font-size: 12px;\\r\\n  font-family: var(--font-family-titles);\\r\\n}\\r\\n\\r\\n.new-comment-container > button {\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  padding: 7px;\\r\\n  margin-bottom: 12px;\\r\\n}\\r\\n\\r\\n.add-your-comment-title {\\r\\n  font-size: 0.9rem;\\r\\n  font-weight: bold;\\r\\n  margin: 0.4rem 0;\\r\\n  text-align: center;\\r\\n  color: var(--font-color);\\r\\n}\\r\\n\\r\\n.span-error {\\r\\n  color: var(--font-color);\\r\\n  padding: 10px;\\r\\n  font-size: 0.8rem;\\r\\n  font-style: italic;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 470px) {\\r\\n  .image-summary-container {\\r\\n    flex-direction: column;\\r\\n  }\\r\\n\\r\\n  .image-summary-container img {\\r\\n    max-width: 60%;\\r\\n    height: auto;\\r\\n    margin: auto;\\r\\n  }\\r\\n\\r\\n  .summary {\\r\\n    max-height: 200px;\\r\\n    overflow: auto;\\r\\n    padding: 0.4rem;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/css/popup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* *************** variables and general settings ************** */\\r\\n:root {\\r\\n  --primary-color: #fcfcfc;\\r\\n  --secondary-color: #f7567c;\\r\\n  --tertiary-color: #fffae3;\\r\\n  --font-color: #99e1d9;\\r\\n  --font-color-secondary: #5d576b;\\r\\n  --font-family-titles: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\n/* Reset default browser styles */\\r\\n\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nul,\\r\\nli,\\r\\nbutton,\\r\\ninput {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-size: 16px;\\r\\n  font-family: var(--font-family-titles);\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  max-width: 1200px;\\r\\n  margin: 0 auto;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  text-align: center;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n  color: var(--font-color-secondary);\\r\\n}\\r\\n\\r\\n.main-container {\\r\\n  padding: 1rem;\\r\\n  margin: auto;\\r\\n  background-color: var(--primary-color);\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.ul-cards {\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.li-card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0.4rem;\\r\\n  margin: 0.5rem;\\r\\n  border-radius: 8px;\\r\\n  background-color: var(--tertiary-color);\\r\\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\\r\\n}\\r\\n\\r\\n.footer,\\r\\n.header {\\r\\n  text-align: center;\\r\\n  padding: 1rem;\\r\\n  background-color: var(--secondary-color);\\r\\n  color: var(--primary-color);\\r\\n}\\r\\n\\r\\n.header img {\\r\\n  height: 70px;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  background-color: var(--secondary-color);\\r\\n  border-radius: 8px;\\r\\n  padding: 4px;\\r\\n  margin: 4px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  font-size: 1rem;\\r\\n  color: white;\\r\\n  cursor: pointer;\\r\\n  transition: background-color 0.3s;\\r\\n}\\r\\n\\r\\nbutton:hover {\\r\\n  background-color: var(--font-color);\\r\\n}\\r\\n\\r\\n.no-bullets {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.rating-likes-container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.like-button {\\r\\n  cursor: pointer;\\r\\n  font-size: 1.2rem;\\r\\n  color: var(--secondary-color);\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.navlinks {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  list-style: none;\\r\\n  gap: 4rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/popup.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/css/popup.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/top-movies-logo.png":
/*!****************************************!*\
  !*** ./src/images/top-movies-logo.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8b00d6c955bc69e158f.png\";\n\n//# sourceURL=webpack://js-capstone/./src/images/top-movies-logo.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;