const debounce = require('lodash.debounce');
import './styles.css';
import fetchBooks from './api';
import booksBuildList from './template/books-list.hbs';



const choiseInput = document.querySelector('input');
const choiseUlList = document.getElementById('books-list');
choiseInput.addEventListener('input', debounce(getBooksList, 3000));

function getBooksList(event) {
  clearList();
  if (event.target.value.length > 3) {
    fetchBooks(event.target.value, buildResult);
  }
}

function buildResult(array) {
  const markUpList = array.items
    .map(name => booksBuildList(name.volumeInfo.title))
    .join('');
  choiseUlList.insertAdjacentHTML('beforeend', markUpList);
}

function clearList() {
  choiseUlList.innerHTML = '';
}
