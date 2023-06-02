const saveComments = (comment) => {

  const API_APP_ID = 'lwgScw6o5MEbQLNCvzXw'; // Variable to store the API App ID
  const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_APP_ID}/`;
  const url = `${URL_API}comments`;

  // Trim and convert comment to  sentence case
  comment.username = comment.username.trim().toLowerCase();
  comment.comment = comment.comment.trim();
  comment.comment = comment.comment.charAt(0).toUpperCase()
                    + comment.comment.slice(1).toLowerCase();

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(comment),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status === 201) {
          resolve();
        } else {
          reject();
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default saveComments;
