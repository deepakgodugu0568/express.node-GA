const express = require("express");
const router = express.Router();

const { db } = require("../database/db");

// GET all loans
router.get("/", (req, res) => {

    db.all(
        "SELECT * FROM loans",
        [],
        (err, rows) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.status(200).json(rows);

        }
    );
});


// ADD a loan
router.post("/", (req, res) => {

    const { maker_id, tool_id } = req.body;

    if (!maker_id || !tool_id) {
        return res.status(400).json({
            error: "Maker ID and Tool ID are required"
        });
    }

    db.run(
        "INSERT INTO loans (maker_id, tool_id) VALUES (?, ?)",
        [maker_id, tool_id],
        function(err) {

            if (err) {
                return res.status(400).json({
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Loan created successfully",
                id: this.lastID
            });

        }
    );
});


// JOIN loans with maker and tool names
router.get("/details", (req, res) => {

    const sql = `
        SELECT
            loans.id AS loan_id,
            makers.name AS maker_name,
            tools.name AS tool_name,
            tools.kind AS tool_kind,
            loans.borrowed_at,
            loans.returned_at
        FROM loans
        JOIN makers ON loans.maker_id = makers.id
        JOIN tools ON loans.tool_id = tools.id
        ORDER BY loans.id DESC
    `;

    db.all(sql, [], (err, rows) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(rows);

    });
});

module.exports = router;