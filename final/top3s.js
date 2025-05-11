function loadContent(url, containerId) {
  fetch(url)
    .then(res => res.text())
    .then(data => {
      document.getElementById(containerId).innerHTML = data;
    });
}

loadContent('top3movies.html', 'movies-container');
loadContent('top3tv-shows.html', 'tv-shows-container');
loadContent('top3books.html', 'books-container');
loadContent('top3games.html', 'games-container');
loadContent('top3albums.html', 'albums-container');

