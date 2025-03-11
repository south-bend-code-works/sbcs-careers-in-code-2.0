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
            year INTEGER,
            poster TEXT
        );
    `);

    let stmt = db.prepare(`
        INSERT INTO movies (id, title, director, year, poster) 
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const { id, title, director, year, poster } of movies) {
        stmt.run([id, title, director, year, poster]);
    }

    db.run(`
        CREATE TABLE IF NOT EXISTS stats (
            id INTEGER PRIMARY KEY,
            movie_id INTEGER,
            score INTEGER,
            box_office INTEGER
        );
    `);

    stmt = db.prepare(`
        INSERT INTO stats (id, movie_id, score, box_office) 
        VALUES (?, ?, ?, ?)
    `);

    for (const { id, movie_id, score, box_office } of stats) {
        stmt.run([id, movie_id, score, box_office]);
    }

    stmt.free();
});