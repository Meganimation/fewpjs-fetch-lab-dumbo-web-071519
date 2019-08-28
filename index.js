function fetchBooks() {
return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const thingie = document.createElement('h2')
    main.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


