const express = require("express");
const router = express.Router();

const { db } = require("../database/db");

// GET all tools + Search by kind
router.get("/", (req, res) => {

    const { kind } = req.query;

    let sql = "SELECT * FROM tools";
    let params = [];

    if (kind) {
        sql += " WHERE kind LIKE ?";
        params.push(`%${kind}%`);
    }

    db.all(sql, params, (err, rows) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.status(200).json(rows);

    });
});


// GET one tool
router.get("/:id", (req, res) => {

    const id = req.params.id;

    db.get(
        "SELECT * FROM tools WHERE id = ?",
        [id],
        (err, row) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (!row) {
                return res.status(404).json({
                    message: "Tool not found"
                });
            }

            res.status(200).json(row);

        }
    );
});


// ADD tool
router.post("/", (req, res) => {

    const { name, kind } = req.body;

    if (!name || !kind ||
        typeof name !== "string" ||
        typeof kind !== "string" ||
        !name.trim() ||
        !kind.trim()) {

        return res.status(400).json({
            error: "Tool name and kind are required"
        });
    }

    db.run(
        "INSERT INTO tools (name, kind) VALUES (?, ?)",
        [name.trim(), kind.trim()],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            const toolId = this.lastID;

            db.run(
                "INSERT INTO audit (action, tool_id) VALUES (?, ?)",
                ["ADD", toolId],
                function(auditErr) {

                    if (auditErr) {
                        return res.status(500).json({
                            error: auditErr.message
                        });
                    }

                    res.status(201).json({
                        message: "Tool added successfully",
                        id: toolId,
                        name,
                        kind
                    });

                }
            );

        }
    );
});


// UPDATE tool
router.put("/:id", (req, res) => {

    const id = req.params.id;
    const { name, kind } = req.body;

    if (!name || !kind ||
        typeof name !== "string" ||
        typeof kind !== "string" ||
        !name.trim() ||
        !kind.trim()) {

        return res.status(400).json({
            error: "Tool name and kind are required"
        });
    }

    db.run(
        "UPDATE tools SET name = ?, kind = ? WHERE id = ?",
        [name.trim(), kind.trim(), id],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Tool not found"
                });
            }

            db.run(
                "INSERT INTO audit (action, tool_id) VALUES (?, ?)",
                ["UPDATE", id],
                function(auditErr) {

                    if (auditErr) {
                        return res.status(500).json({
                            error: auditErr.message
                        });
                    }

                    res.status(200).json({
                        message: "Tool updated successfully"
                    });

                }
            );

        }
    );
});


// DELETE tool
router.delete("/:id", (req, res) => {

    const id = req.params.id;

    db.run(
        "DELETE FROM tools WHERE id = ?",
        [id],
        function(err) {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            if (this.changes === 0) {
                return res.status(404).json({
                    message: "Tool not found"
                });
            }

            db.run(
                "INSERT INTO audit (action, tool_id) VALUES (?, ?)",
                ["DELETE", id],
                function(auditErr) {

                    if (auditErr) {
                        return res.status(500).json({
                            error: auditErr.message
                        });
                    }

                    res.status(200).json({
                        message: "Tool deleted successfully"
                    });

                }
            );

        }
    );
});

module.exports = router;