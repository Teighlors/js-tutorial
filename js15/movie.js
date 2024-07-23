document.addEventListener('DOMContentLoaded', () => {
    const movieList = document.getElementById('movieList');
    const searchBar = document.getElementById('searchBar');
    const searchButton = document.getElementById('searchButton');

    fetch('movie.json')
        .then(response => response.json())
        .then(data => {
            displayMovies(data);

            searchButton.addEventListener('click', () => {
                const searchQuery = searchBar.value.toLowerCase();
                const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(searchQuery));
                displayMovies(filteredMovies);
            });
        })
        .catch(error => console.error('Error fetching the movie data:', error));

    function displayMovies(movies) {
        movieList.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('li');
            movieItem.innerHTML = `
                <h2>${movie.title}</h2>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Release Date:</strong> ${movie.release_date}</p>
            `;
            movieList.appendChild(movieItem);
        });
    }
});
