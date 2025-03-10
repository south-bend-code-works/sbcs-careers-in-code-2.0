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
-- Creating movies table
CREATE TABLE movies (
    id INTEGER PRIMARY KEY,
    title TEXT,
    director TEXT,
    release_year INTEGER,
    poster TEXT
);

-- Creating stats table
CREATE TABLE stats (
    movie_id INTEGER PRIMARY KEY,
    score INTEGER,
    box_office INTEGER
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
SELECT title, director 
FROM movies 
WHERE release_year > 2000;
```

3. Adding Joins (JOIN):
```sql
SELECT movies.title, stats.score 
FROM movies 
JOIN stats ON movies.id = stats.movie_id 
WHERE release_year > 2000;
```

4. Adding Groups (GROUP BY):
```sql
SELECT director, COUNT(*) as movie_count 
FROM movies 
GROUP BY director;
```

5. Filtering Groups (HAVING):
```sql
SELECT director, COUNT(*) as movie_count 
FROM movies 
GROUP BY director 
HAVING movie_count > 1;
```

6. Complete Example:
```sql
SELECT director, AVG(stats.score) as avg_score, COUNT(*) as movie_count 
FROM movies 
JOIN stats ON movies.id = stats.movie_id 
GROUP BY director 
HAVING movie_count > 1 
ORDER BY avg_score DESC 
LIMIT 3;
```

### Basic Queries
Queries are used to retrieve data from tables:

```sql
-- Select all columns
SELECT * FROM movies;

-- Select specific columns
SELECT title, director, release_year 
FROM movies;

-- Filter results
SELECT title, director 
FROM movies 
WHERE release_year > 2000;
```

### Inserting Data
Add new records to tables:

```sql
-- Single record insertion
INSERT INTO movies (id, title, director, release_year, poster) 
VALUES (10, 'Inception', 'Christopher Nolan', 2010, 'inception.jpg');

-- Multiple record insertion
INSERT INTO stats (movie_id, score, box_office) VALUES 
    (10, 74, 292587330),
    (11, 73, 172076928);
```

### Updating Records
Modify existing data in tables:

```sql
-- Update single value
UPDATE stats 
SET score = 100 
WHERE movie_id = 1;

-- Update multiple values
UPDATE stats 
SET box_office = box_office * 1.1 
WHERE score > 90;
```

## Common Use Cases

### Filtering and Sorting
```sql
-- Filter by condition
SELECT title, director 
FROM movies 
WHERE director LIKE '%Nolan%';

-- Sort results
SELECT title, release_year 
FROM movies 
ORDER BY release_year DESC;

-- Limit results
SELECT m.title, s.score 
FROM movies m 
JOIN stats s ON m.id = s.movie_id 
ORDER BY s.score DESC 
LIMIT 5;
```

### Aggregating Data
```sql
-- Count movies
SELECT COUNT(*) 
FROM movies;

-- Average score by director
SELECT director, AVG(s.score) as avg_score 
FROM movies m 
JOIN stats s ON m.id = s.movie_id 
GROUP BY director;

-- Highest box office
SELECT m.title, s.box_office 
FROM movies m 
JOIN stats s ON m.id = s.movie_id 
ORDER BY s.box_office DESC 
LIMIT 1;
```

### Joining Tables
```sql
-- Join movies with stats
SELECT m.title, m.director, s.score, s.box_office 
FROM movies m 
JOIN stats s ON m.id = s.movie_id;

-- Average box office by decade
SELECT (release_year/10)*10 as decade, 
       AVG(s.box_office) as avg_box_office 
FROM movies m 
JOIN stats s ON m.id = s.movie_id 
GROUP BY decade;
```

## Resources

- [SQL Tutorial - W3Schools](https://www.w3schools.com/sql/)
- [SQLBolt - Learn SQL with Interactive Exercises](https://sqlbolt.com/)
- [SQL Crash Course](https://www.youtube.com/watch?v=HXV3zeQKqGY)