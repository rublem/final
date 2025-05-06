document.querySelectorAll('.movie-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

            // Fetch movie data from data attributes
            const movieData = {
                id: this.getAttribute('data-id'), // Changed to 'data-id'
                title: this.getAttribute('data-title'), // Changed to 'data-title'
                genre: this.getAttribute('data-genre'), // Changed to 'data-genre'
                cast: this.getAttribute('data-cast'), // Changed to 'data-cast'
                synopsis: this.getAttribute('data-synopsis'), // Changed to 'data-synopsis'
                trailer: this.getAttribute('data-trailer'), // Changed to 'data-trailer'
                poster: this.getAttribute('data-poster') // Changed to 'data-poster'
            };

            // Store movie data in localStorage
            localStorage.setItem('selectedMovie', JSON.stringify(movieData));

            // Redirect to the movie description page
            window.location.href = this.getAttribute('href');
        });
    });