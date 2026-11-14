const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "..", "makerspace.db");

const db = new sqlite3.Database(dbPath);

db.run("PRAGMA foreign_keys = ON");

const initializeDatabase = () => {

    db.serialize(() => {

        // Makers table
        db.run(`
            CREATE TABLE IF NOT EXISTS makers (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT UNIQUE NOT NULL
            )
        `);

        // Tools table
        db.run(`
            CREATE TABLE IF NOT EXISTS tools (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                kind TEXT NOT NULL
            )
        `);

        // Loans table
        db.run(`
            CREATE TABLE IF NOT EXISTS loans (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                maker_id INTEGER NOT NULL,
                tool_id INTEGER NOT NULL,
                borrowed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                returned_at DATETIME,
                FOREIGN KEY (maker_id) REFERENCES makers(id),
                FOREIGN KEY (tool_id) REFERENCES tools(id)
            )
        `);

        // Audit table (Additional twist)
        db.run(`
            CREATE TABLE IF NOT EXISTS audit (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                action TEXT NOT NULL,
                tool_id INTEGER NOT NULL,
                time DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);

        console.log("Database tables initialized successfully!");

    });
};

module.exports = {
    db,
    initializeDatabase
};