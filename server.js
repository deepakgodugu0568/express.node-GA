const express = require("express");

const {
    db,
    initializeDatabase
} = require("./database/db");

const makersRoutes = require("./routes/makers");
const toolsRoutes = require("./routes/tools");
const loansRoutes = require("./routes/loans");
const auditRoutes = require("./routes/audit");

const app = express();

const PORT = 3000;

// Middleware
app.use(express.json());

// Main route
app.get("/", (req, res) => {

    res.json({
        message: "Welcome to ToolTown Makerspace API",
        status: "Server running successfully"
    });

});

// API routes
app.use("/makers", makersRoutes);
app.use("/tools", toolsRoutes);
app.use("/loans", loansRoutes);
app.use("/audit", auditRoutes);

// Start server after database initialization
initializeDatabase();

db.get("SELECT 1", (err) => {

    if (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1);
    }

    app.listen(PORT, () => {

        console.log(`Server running at http://localhost:${PORT}`);

    });

});