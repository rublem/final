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

  fetch('top3tv-shows.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('tv-shows-container').innerHTML = data;
  });

  fetch('top3books.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('books-container').innerHTML = data;
  });

  fetch('top3games.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('games-container').innerHTML = data;
  });

  fetch('top3albums.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('albums-container').innerHTML = data;
  });