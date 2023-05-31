const getComments = (movieId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const API_APP_ID = "lwgScw6o5MEbQLNCvzXw";
      const URL_API = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${API_APP_ID}/`;
      const url = URL_API + `comments?item_id=${movieId}`;
  
      const response = await fetch(url);
      const commentsInfo = await response.json();
  
      if (commentsInfo.length > 0) {
        resolve(commentsInfo);
      } else {
        resolve([]);
      }
    } catch (error) {
      reject(error);
    }
  });
};

export default getComments;
