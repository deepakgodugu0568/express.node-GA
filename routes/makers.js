const express = require("express");
const router = express.Router();

const { db } = require("../database/db");

// GET all makers
router.get("/", (req, res) => {

    db.all("SELECT * FROM makers", [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(rows);

    });
});


// GET one maker
router.get("/:id", (req, res) => {

    db.get(
        "SELECT * FROM makers WHERE id = ?",
        [req.params.id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "Maker not found"
                });
            }

            res.status(200).json(row);

        }
    );
});


// ADD maker
router.post("/", (req, res) => {

    const { name, email } = req.body;

    if (!name || !email ||
        typeof name !== "string" ||
        typeof email !== "string" ||
        !name.trim() || !email.trim()) {

        return res.status(400).json({
            error: "Maker name and email are required"
        });
    }

    db.run(
        "INSERT INTO makers (name, email) VALUES (?, ?)",
        [name.trim(), email.trim()],
        function(err) {

            if (err) {
                return res.status(400).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Maker added successfully",
                id: this.lastID
            });

        }
    );
});

module.exports = router;