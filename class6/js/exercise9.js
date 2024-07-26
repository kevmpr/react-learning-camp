const movies = {
    title: "Blade Runner 2049",
    genre: "Science fiction / Action",
    year: 2017,
};

function infoMovie(movie) {
    const { title, genre, year } = movie;
    return console.log(`
        Title: ${title}
        Genre: ${genre}
        Movie: ${year}
    `);
}

infoMovie(movies);
