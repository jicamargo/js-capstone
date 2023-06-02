const involvementAPIBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const fetchLikes = async (appId) => {
  const response = await fetch(`${involvementAPIBaseURL}/apps/${appId}/likes`);

  if (!response.ok) {
    throw new Error('Failed to fetch likes from the Involvement API');
  }

  const data = await response.text(); // read the response as text
  return data ? JSON.parse(data) : [];
};

export default fetchLikes;