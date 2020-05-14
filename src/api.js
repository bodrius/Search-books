function fetchBooks(searchQuery, callback) {
  const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`;
  fetch(BASE_URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export default fetchBooks;
