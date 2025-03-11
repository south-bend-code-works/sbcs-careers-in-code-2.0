const submitButton = document.getElementById('submitButton');
const queryTextarea = document.getElementById('queryTextarea');
const resultSection = document.getElementById('resultSection');

submitButton.addEventListener('click', () => {
    try {
        const [queryResult] = db.exec(queryTextarea.value) || [];
        resultSection.innerHTML = queryResult ? renderMovies(queryResult) : 'No results.';
    } catch (error) {
        resultSection.innerHTML = `Error: ${error.message}`;
    }
});

/**
 * Renders the query result (an array of Movie objects) as HTML.
 *
 * @param {SqlResult} queryResult - The SQL result to render (with `columns` and `values`).
 * @returns {string} - The rendered movie HTML.
 */
function renderMovies(queryResult) {
    return transformSqlResult(queryResult)
        .map(({id, title, poster, year}) => `
      <div id="movie-${id}">
        <h2>${title}</h2>
        <p>${year}</p>
        <img src="${poster}" alt="${title}" />
      </div>
    `).join('');
}

/**
 * Transforms a single SQL result into an array of Movie objects.
 *
 * @param {SqlResult} sqlResult - An object containing `columns` and `values` from the query.
 * @returns {{[p: string]: *}[]} - An array of movie objects.
 */
const transformSqlResult = ({columns = [], values = []} = {}) =>
    values.map(row =>
        Object.fromEntries(columns.map((col, i) => [col, row[i]]))
    );

/**
 * @typedef {Object} SqlResult
 * @property {string[]} columns - The column names returned by the query.
 * @property {Array<Array<any>>} values - The row data returned by the query.
 */

/**
 * @typedef {Object} Movie
 * @property {number} id - The unique identifier for the movie.
 * @property {string} title - The title of the movie.
 * @property {string} genre - The genre of the movie.
 * @property {number} year - The year the movie was released.
 * @property {string} poster - The media art for the movie.
 */