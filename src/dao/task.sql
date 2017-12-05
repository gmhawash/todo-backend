-- SQLite syntax
CREATE TABLE IF NOT EXISTS task (
    id INTEGER PRIMARY KEY,
    priority TEXT,
    status TEXT,
    category TEXT,
    title TEXT,
    description TEXT,
    created INTEGER,
    lastUpdated INTEGER
);