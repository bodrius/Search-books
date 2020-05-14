// import axios from 'axios';

// const BASE_URL = `https://www.googleapis.com/books/v1/volumes?`;

// export const fetchBooks = async (searchQuery) => {
//   try {
//     const data = await axios({
//       url: `${BASE_URL}/q=${searchQuery}`,
//       method: 'get',
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

function fetchBooks (searchQuery, callback){

const baseUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`;
fetch(baseUrl).then(response => {
 return response.json();
})
.then(data =>{
  callback(data);
}).catch(error =>{
  console.log(error);
});
}

export default fetchBooks;
