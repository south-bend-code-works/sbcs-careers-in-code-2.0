let db;
initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
}).then(SQL => {
    db = new SQL.Database();
    db.run(`
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY,
            title TEXT,
            director TEXT,
            release_year INTEGER,
            poster TEXT
        );
    `);

    let stmt = db.prepare(`
        INSERT INTO movies (id, title, director, release_year, poster) 
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const { id, title, director, release_year, poster } of movies) {
        stmt.run([id, title, director, release_year, poster]);
    }

    db.run(`
        CREATE TABLE IF NOT EXISTS stats (
            movie_id INTEGER PRIMARY KEY,
            score INTEGER,
            box_office INTEGER
        );
    `);

    stmt = db.prepare(`
        INSERT INTO stats (movie_id, score, box_office) 
        VALUES (?, ?, ?)
    `);

    for (const { movie_id, score, box_office } of stats) {
        stmt.run([movie_id, score, box_office]);
    }

    stmt.free();
});