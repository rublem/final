fetch('header.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('header-container').innerHTML = data;
  });

  fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
  });
  
  fetch('top3movies.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('movies-container').innerHTML = data;
  });

  fetch('books.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('books-container').innerHTML = data;
  });

  fetch('games.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('games-container').innerHTML = data;
  });

  fetch('albums.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('albums-container').innerHTML = data;
  });