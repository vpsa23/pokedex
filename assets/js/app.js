const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('newContainer');
const image = document.getElementById('img1');
let searchedForText;

form.addEventListener('submit', function (e) {
  e.preventDefault();
  responseContainer.innerHTML = '';
  searchedForText = searchField.value;
  getNews();
})

function handleError() {
  console.log('Se ha presentado un error');
}

function addNews() {
  let data = JSON.parse(this.responseText);
    let li = document.createElement('li');
  li.className = 'newList';

  let result = [];
  for (var i = 0; data.length; i++) {
    result.push(data[i].name);
  }

  li.innerText = result;

  responseContainer.appendChild(li);
}

function getNews() {
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForText}`);
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError
  articleRequest.send();
}

image.addEventListener('click', function(){
  let result = [];
  let data = JSON.parse(this.responseText);
  for (var i = 0; data.name.length; i++){
    result.push(data[i].name);
  }
})

