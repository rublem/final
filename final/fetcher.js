document.querySelectorAll('.movie-link').forEach(link => {
            link.addEventListener('click', function (event) {


                const movieData = {
                    id: this.getAttribute('data-id'),
                    title: this.getAttribute('data-title'),
                    genre: this.getAttribute('data-genre'),
                    cast: this.getAttribute('data-cast'),
                    synopsis: this.getAttribute('data-synopsis'),
                    trailer: this.getAttribute('data-trailer'),
                    poster: this.getAttribute('data-poster'),
                    watchUrl: this.getAttribute('data-watch-url')
                };
                
                localStorage.setItem('selectedMovie', JSON.stringify(movieData));
                window.location.href = this.getAttribute('href');
            });
        });

document.querySelectorAll('.tvshow-link').forEach(link => {
            link.addEventListener('click', function (event) {
                const tvShowData = {
                    id: this.getAttribute('data-id'),
                    title: this.getAttribute('data-title'),
                    genre: this.getAttribute('data-genre'),
                    cast: this.getAttribute('data-cast'),
                    synopsis: this.getAttribute('data-synopsis'),
                    trailer: this.getAttribute('data-trailer'),
                    poster: this.getAttribute('data-poster'),
                    watchUrl: this.getAttribute('data-watch-url')
                };
                console.log('TV Show Data:', tvShowData);
                
                localStorage.setItem('selectedTVShow', JSON.stringify(tvShowData));
                window.location.href = this.getAttribute('href');
            });
        });

document.addEventListener('DOMContentLoaded', function () {
            document.querySelectorAll('.book-link').forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();

                    const bookData = {
                        id: this.getAttribute('data-id'),
                        title: this.getAttribute('data-title'),
                        genre: this.getAttribute('data-genre'),
                        author: this.getAttribute('data-author'),
                        synopsis: this.getAttribute('data-synopsis'),
                        poster: this.getAttribute('data-poster'),
                        screenshots: JSON.parse(this.getAttribute('data-screenshots')),
                        readUrl: this.getAttribute('data-read-url')
                    };

                    console.log('Screenshots:', bookData.screenshots);
                    console.log('Screenshots:', bookData.readUrl);

                    localStorage.setItem('selectedBook', JSON.stringify(bookData));
                    window.location.href = this.getAttribute('href');
                });
            });
        });

document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.game-link').forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                const gameData = {
                    id: this.getAttribute('data-id'),
                    title: this.getAttribute('data-title'),
                    genre: this.getAttribute('data-genre'),
                    developer: this.getAttribute('data-developer'),
                    platform: this.getAttribute('data-platform'),
                    synopsis: this.getAttribute('data-synopsis'),
                    poster: this.getAttribute('data-poster'),
                    screenshots: JSON.parse(this.getAttribute('data-screenshots')),
                    gameUrl: this.getAttribute('data-game-url')
                };
                console.log('Screenshots:', gameData.gameUrl);

                localStorage.setItem('selectedGame', JSON.stringify(gameData));
                window.location.href = this.getAttribute('href');
            });
        });
    });

document.addEventListener('DOMContentLoaded', function () {
      document.querySelectorAll('.album-link').forEach(link => {
        link.addEventListener('click', function (event) {
          event.preventDefault();

          const albumData = {
            id: this.getAttribute('data-id'),
            title: this.getAttribute('data-title'),
            artist: this.getAttribute('data-artist'),
            genre: this.getAttribute('data-genre'),
            year: this.getAttribute('data-year'),
            description: this.getAttribute('data-description'),
            cover: this.getAttribute('data-cover'),
            tracks: JSON.parse(this.getAttribute('data-tracks')),
            spotifyEmbedURL: this.getAttribute('data-spotify-embed-url')
          };

          localStorage.setItem('selectedAlbum', JSON.stringify(albumData));
          window.location.href = this.getAttribute('href');
        });
      });
    });