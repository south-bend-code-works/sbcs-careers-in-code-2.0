# Module 5 Building Film Box

Learn how to build a web-based SQL query interface using HTML, CSS, JavaScript, and SQLite. This application will allow users to write and execute SQL queries against a movie database.

## Project Overview
- **What we're building**: A web-based SQL query interface called FilmBox
- **Technologies used**: HTML, CSS, JavaScript, SQLite
- **Final result**: An interactive web application where users can write SQL queries and see results displayed as formatted tables

## 1 Basic HTML Structure

Create a basic HTML page with a form and a section. 
The form should have a textarea for SQL queries and a button to execute the query. 
The section should be used to display the results.

Add a title in the `<head>` section.
```html
<head>
    <title>FilmBox</title>
</head>
```

Give the body a header.
```html
<body>

<header>
    <h1>FilmBox</h1>
</header>

</body>
```

Add a main section in the body with a section for results and a form.
```html
<main>
    <section>
        <!-- Form goes here -->
    </section>

    <section>
        <!-- Results go here -->
    </section>
</main>
```

## 2 Add JavaScript Files

Copy needed JavaScript files to the `exercises/2_js_files` directory from the `examples` directory.

Add the following JavaScript files to the `<head>` section:
```html
<head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.12.0/sql-asm.min.js"
            integrity="sha512-/oFHP4rlsoCmqYede816F0LrR7A6MsjA2j/hIyl/tCLKc54eBs1+QS3ORe/3zQoRpzywDhMq9Qy8APLZcngQxw=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    ></script>
    <script src="movies.js"></script>
    <script src="stats.js"></script>
    <script src="database.js"></script>
</head>
```

Add the following JavaScript file to the end of the `<body>` section:
```html
<script src="script.js"></script>
```

## 3 Add CSS Styles

Add a link to the `styles.css` file in the `<head>` section:
```html
<link rel="stylesheet" href="styles.css"/>
```
Create the `styles.css` file in the `exercises/3_css` directory.

## 4 Create a Form

Create a form with a textarea for SQL queries and a button to execute the query.
```html
<form>
    <label>SQL Query</label>
    <textarea rows="5" cols="60">SELECT * FROM movies</textarea>
    <button type="button">Execute SQL</button>
</form>
```

Connect the form to the JavaScript code by adding the correct ids to the form elements.
```html
<form>
    <label for="queryTextarea">SQL Query</label>
    <textarea id="queryTextarea" rows="5" cols="60" placeholder="SQL query">SELECT * FROM movies</textarea>
    <button id="submitButton" type="button">Execute SQL</button>
</form>
```

Connect the results section to the JavaScript code by adding the correct id to the section.
```html
<section id="resultSection">
    <!-- Results go here -->
</section>
````

