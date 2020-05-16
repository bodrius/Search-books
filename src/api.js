function fetchBooks(searchQuery, callback) {
  // added hashing, if there was already a request for a search query,
  //  then a server request does not occur, which increases the response speed
  //  and does not pull traffic from the client

  let storage = {};
  const STORAGE = 'SEARCH QUERY';
  if (localStorage.getItem(STORAGE)) {
    storage = JSON.parse(localStorage.getItem(STORAGE));
  } else {
    localStorage.setItem(STORAGE, JSON.stringify(storage));
  }

  if (storage[searchQuery]) {
    callback(storage[searchQuery]);
    return;
  }

  const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`;

  fetch(BASE_URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      storage[searchQuery] = data;
      localStorage.setItem(STORAGE, JSON.stringify(storage));
      callback(data);
    })
    .catch(error => {
      console.log(error);
    });
}

export default fetchBooks;
