const getComments = (movieId) => new Promise((resolve, reject) => {
  const API_APP_ID = 'lwgScw6o5MEbQLNCvzXw';
  const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_APP_ID}/`;
  const url = `${URL_API}comments?item_id=${movieId}`;

  fetch(url)
    .then((response) => response.json())
    .then((commentsInfo) => {
      if (commentsInfo.length > 0) {
        resolve(commentsInfo);
      } else {
        resolve([]);
      }
    })
    .catch(() => {
      reject();
    });
});

export default getComments;
