// Function to fetch data from the TV Maze API and create a local object 

const readAPI = async () => {
  const apiUrl = 'https://api.tvmaze.com/shows?Show%5BshowStatus_enum%5D=2&Show%5BshowType_enum%5D=&Show%5Bgenre%5D=&Show%5Blanguage_enum%5D=61&Show%5Bcountry_enum%5D=&Show%5Bnetwork_id%5D=&Show%5BwebChannel_id%5D=&Show%5Bruntime%5D=&Show%5Brating%5D=90&Show%5Bsort%5D=1';

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch data from the API');
    }

    const data = await response.json();

    const localObject = {};

    data.forEach(show => {
      localObject[show.id] = {
        name: show.name,
        status: show.status,
        genre: show.genres,
        image: show.image.medium,
        imageOriginal: show.image.original,
        language: show.language,
        premiered: show.premiered,
        rating: show.rating.average,
        runtime: show.runtime,
        summary: show.summary
      };
    });

    return localObject;
  } catch (error) {
    // console.error('An error occurred while fetching data:', error);
    throw error;
  }
};


export default readAPI;