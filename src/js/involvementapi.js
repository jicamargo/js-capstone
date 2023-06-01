// involvementAPI.js
const involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const appId = 'lwgScw6o5MEbQLNCvzXw';

export const fetchLikes = async () => {
  const response = await fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`);

  if (!response.ok) {
    throw new Error('Failed to fetch likes from the Involvement API');
  }

  const data = await response.json();
  return data;
};