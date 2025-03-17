# Module 6 Improving FilmBox

## Order Movies by Score

```sql
SELECT *
FROM movies
JOIN stats ON movies.id = stats.movie_id
ORDER BY stats.score DESC;
```

```javascript
function renderMovies(queryResult) {
    return transformSqlResult(queryResult)
        .map(({id, title, poster, year, score}) => `
      <div id="movie-${id}">
        <h2>${title}</h2>
        <p>${year}</p>
        <p>${score}</p>
        <img src="${poster}" alt="${title}" />
      </div>
    `).join('');
}
```

## Make Sorting Dynamic

```html
<section>
    <button type="button" id="sortAsc">Sort Ascending</button>
    <button type="button" id="sortDesc">Sort Descending</button>
</section>
```


```javascript
const sortAscButton = document.getElementById('sortAsc');
sortAscButton.addEventListener('click', () => {
    try {
        const [queryResult] = db.exec(`
            SELECT *
            FROM movies
                     JOIN stats ON movies.id = stats.movie_id
            ORDER BY stats.score ASC;
        `) || [];
        resultSection.innerHTML = queryResult ? renderMovies(queryResult) : 'No results.';
    } catch (error) {
        resultSection.innerHTML = `Error: ${error.message}`;
    }
});

const sortDescButton = document.getElementById('sortDesc');
sortDescButton.addEventListener('click', () => {
    try {
        const [queryResult] = db.exec(`
            SELECT *
            FROM movies
                     JOIN stats ON movies.id = stats.movie_id
            ORDER BY stats.score DESC;
        `) || [];
        resultSection.innerHTML = queryResult ? renderMovies(queryResult) : 'No results.';
    } catch (error) {
        resultSection.innerHTML = `Error: ${error.message}`;
    }
});
```