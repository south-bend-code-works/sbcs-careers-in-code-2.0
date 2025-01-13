let db;
initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
}).then(SQL => {
    db = new SQL.Database();
    db.run(`
        CREATE TABLE IF NOT EXISTS movies (
            id INTEGER PRIMARY KEY,
            title TEXT,
            genre TEXT,
            release_year INTEGER,
            poster TEXT
        );
    `);

    const stmt = db.prepare(`
        INSERT INTO movies (id, title, genre, release_year, poster) 
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const { id, title, genre, release_year, poster } of movies) {
        stmt.run([id, title, genre, release_year, poster]);
    }

    stmt.free();
});