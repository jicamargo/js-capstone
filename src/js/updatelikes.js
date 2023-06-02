const involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const updateLikes = (appId, itemId) =>
  // debugger;
  new Promise((resolve, reject) => {
    fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: itemId }),
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
export default updateLikes;
