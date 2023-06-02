const involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const updateLikes = async (appId, itemId) => {
  const response = await fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemId }),
  });

  if (!response.ok) {
    throw new Error('Failed to update likes in the Involvement API');
  }

  const data = await response.json();
  return data;
};

export default updateLikes;