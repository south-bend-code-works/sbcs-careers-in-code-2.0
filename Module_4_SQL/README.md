# Module 4 SQL

## What is SQL?

[SQL](https://developer.mozilla.org/en-US/docs/Glossary/SQL) (Structured Query Language) is a standard language for managing and manipulating databases. While HTML structures content, CSS styles it, and JavaScript adds behavior, SQL helps you store and retrieve data efficiently.

SQL allows you to:
- Store data in organized tables
- Retrieve specific information from databases
- Update existing data
- Delete unwanted records
- Create relationships between different data sets

## Basic SQL Concepts

### Tables and Data Types
Tables store data in rows and columns, with each column having a specific data type:

```sql
-- Creating a table
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    release_year INTEGER,
    rating DECIMAL(2,1),
    is_available BOOLEAN
);
```

## SQL Syntax Order

SQL queries must follow a specific order of clauses. While not all clauses are required, when used, they must appear in this sequence:

```sql
SELECT column1, column2             -- 1. What columns to show
FROM table_name                     -- 2. Which table to get data from
JOIN another_table                  -- 3. What other tables to include
ON table_name.id = another_table.id
WHERE condition                     -- 4. Filter which rows to include
GROUP BY column1                    -- 5. How to group the rows
HAVING group_condition              -- 6. Filter which groups to include
ORDER BY column2                    -- 7. How to sort the results
LIMIT 10                            -- 8. How many rows to return
```

### Examples Using Movies

1. Basic Query (SELECT, FROM):
```sql
SELECT title, release_year 
FROM movies;
```

2. Adding Filters (WHERE):
```sql
SELECT title, release_year 
FROM movies 
WHERE release_year > 2000;
```

3. Adding Joins (JOIN):
```sql
SELECT movies.title, directors.name 
FROM movies 
JOIN directors ON movies.director_id = directors.id 
WHERE release_year > 2000;
```

4. Adding Groups (GROUP BY):
```sql
SELECT release_year, COUNT(*) as movie_count 
FROM movies 
WHERE rating > 7 
GROUP BY release_year;
```

5. Filtering Groups (HAVING):
```sql
SELECT release_year, COUNT(*) as movie_count 
FROM movies 
WHERE rating > 7 
GROUP BY release_year 
HAVING movie_count > 5;
```

6. Complete Example:
```sql
SELECT release_year, COUNT(*) as movie_count 
FROM movies 
JOIN directors ON movies.director_id = directors.id 
WHERE rating > 7 
GROUP BY release_year 
HAVING movie_count > 5 
ORDER BY movie_count DESC 
LIMIT 3;
```

### Basic Queries
Queries are used to retrieve data from tables:

```sql
-- Select all columns
SELECT * FROM movies;

-- Select specific columns
SELECT title, release_year 
FROM movies;

-- Filter results
SELECT title, rating 
FROM movies 
WHERE rating > 8.0;
```

### Inserting Data
Add new records to tables:

```sql
-- Single record insertion
INSERT INTO movies (title, release_year, rating) 
VALUES ('The Matrix', 1999, 8.7);

-- Multiple record insertion
INSERT INTO movies (title, release_year, rating) VALUES 
    ('Inception', 2010, 8.8),
    ('Interstellar', 2014, 8.6);
```

### Updating Records
Modify existing data in tables:

```sql
-- Update single value
UPDATE movies 
SET rating = 9.0 
WHERE title = 'The Matrix';

-- Update multiple values
UPDATE movies 
SET rating = rating + 0.1 
WHERE release_year < 2000;
```

## Common Use Cases

### Filtering and Sorting
```sql
-- Filter by condition
SELECT title, release_year 
FROM movies 
WHERE release_year >= 2000;

-- Sort results
SELECT title, rating 
FROM movies 
ORDER BY rating DESC;

-- Limit results
SELECT title, rating 
FROM movies 
ORDER BY rating DESC 
LIMIT 5;
```

### Aggregating Data
```sql
-- Count movies
SELECT COUNT(*) 
FROM movies;

-- Average rating by year
SELECT release_year, AVG(rating) 
FROM movies 
GROUP BY release_year;

-- Find highest rated movie
SELECT title, MAX(rating) 
FROM movies;
```

### Joining Tables
```sql
-- Join movies with directors
SELECT movies.title, directors.name 
FROM movies 
JOIN directors ON movies.director_id = directors.id;

-- Count movies by genre
SELECT genres.name, COUNT(*) 
FROM movies 
JOIN movie_genres ON movies.id = movie_genres.movie_id 
JOIN genres ON movie_genres.genre_id = genres.id 
GROUP BY genres.name;
```

## Resources

- [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)
- [SQLBolt - Learn SQL with Interactive Exercises](https://sqlbolt.com/)
- [SQL Crash Course](https://www.youtube.com/watch?v=HXV3zeQKqGY)