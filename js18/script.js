// script.js
const apiKey = '8d2ebdb';
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const title = document.getElementById('movie-title').value;
    const year = document.getElementById('filter-year').value;

    try {
        const movies = await fetchMovies(title, year);
        displayMovies(movies);
    } catch (error) {
        displayError(error.message);
    }
});

async function fetchMovies(title, year) {
    try {
        const cacheKey = `${title}_${year}`;
        const cachedResults = localStorage.getItem(cacheKey);

        if (cachedResults) {
            return JSON.parse(cachedResults);
        }

        const url = `http://www.omdbapi.com/?s=${title}&y=${year}&apikey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === 'False') {
            throw new Error(data.Error);
        }

        localStorage.setItem(cacheKey, JSON.stringify(data.Search));
        return data.Search;
    } catch (error) {
        throw new Error('Failed to fetch movies');
    }
}

function displayMovies(movies) {
    resultsContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');

        const moviePoster = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/100';
        movieElement.innerHTML = `
            <img src="${moviePoster}" alt="${movie.Title}">
            <div class="movie-info">
                <h2>${movie.Title}</h2>
                <p>Year: ${movie.Year}</p>
                <p>IMDb Rating: ${movie.imdbRating || 'N/A'}</p>
            </div>
        `;

        resultsContainer.appendChild(movieElement);
    });
}

function displayError(message) {
    resultsContainer.innerHTML = `<p class="error">${message}</p>`;
}
