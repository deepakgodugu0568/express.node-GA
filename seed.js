const { db } = require("./database/db");

db.serialize(() => {

    // Insert Makers
    const makers = [
        ["Deepak", "deepak@gmail.com"],
        ["Hasini", "hasini@gmail.com"],
        ["Nandishwar", "nandishwar@gmail.com"],
        ["Rahul", "rahul@gmail.com"],
        ["Priya", "priya@gmail.com"],
        ["Arjun", "arjun@gmail.com"],
        ["Sneha", "sneha@gmail.com"],
        ["Kiran", "kiran@gmail.com"],
        ["Manoj", "manoj@gmail.com"],
        ["Anjali", "anjali@gmail.com"]
    ];

    const makerStmt = db.prepare(
        "INSERT OR IGNORE INTO makers (name, email) VALUES (?, ?)"
    );

    makers.forEach(maker => makerStmt.run(maker));
    makerStmt.finalize();

    // Insert Tools
    const tools = [
        ["Electric Drill", "Power Tool"],
        ["Hammer", "Hand Tool"],
        ["Screwdriver Set", "Hand Tool"],
        ["Circular Saw", "Power Tool"],
        ["Welding Machine", "Power Tool"],
        ["Measuring Tape", "Measuring Tool"],
        ["Angle Grinder", "Power Tool"],
        ["Pliers", "Hand Tool"],
        ["Wood Chisel", "Hand Tool"],
        ["Ladder", "Safety Equipment"],
        ["Soldering Iron", "Electrical Tool"],
        ["Bench Vice", "Workshop Equipment"],
        ["Jigsaw", "Power Tool"],
        ["Spirit Level", "Measuring Tool"],
        ["Safety Helmet", "Safety Equipment"]
    ];

    const toolStmt = db.prepare(
        "INSERT INTO tools (name, kind) VALUES (?, ?)"
    );

    tools.forEach(tool => toolStmt.run(tool));
    toolStmt.finalize();

    // Insert Loans
    const loans = [
        [1, 1],
        [2, 2],
        [3, 3],
        [4, 4],
        [5, 5],
        [6, 6],
        [7, 7],
        [8, 8],
        [9, 9],
        [10, 10]
    ];

    const loanStmt = db.prepare(
        "INSERT INTO loans (maker_id, tool_id) VALUES (?, ?)"
    );

    loans.forEach(loan => loanStmt.run(loan));
    loanStmt.finalize();

    console.log("Dummy data inserted successfully!");

});