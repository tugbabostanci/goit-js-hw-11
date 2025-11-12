const API_KEY = '53213667-a2fc459fbd1b81236d446f31b';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchimages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error('No images found');
      }
      return data.hits;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      throw error;
    });
}