# ToolTown Makerspace – Tool Library Management System

## 1. Project Overview

ToolTown Makerspace is a backend-based Tool Library Management System developed using Node.js, Express.js, and SQLite.

The main purpose of this project is to manage the activities of a makerspace where registered members can borrow and return different types of tools.

The application provides APIs to manage makers, tools, loans, and audit records. It maintains information about members, available tools, borrowing transactions, and activities performed on tool records.

The project uses a SQLite database to store information permanently and Express.js to provide RESTful API endpoints for performing operations.

## 2. Project Objectives

The main objectives of this project are:

- To develop a backend application using Node.js and Express.js.
- To maintain maker/member information.
- To manage tools and their categories.
- To implement borrowing and returning operations.
- To retrieve loan information using SQL JOIN operations.
- To maintain audit records whenever tool information is modified.
- To store and retrieve data using an SQLite database.
- To test API endpoints using Postman.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend web framework |
| SQLite | Relational database |
| JavaScript | Application development |
| Postman | API testing |
| Git | Version control |
| GitHub | Source code repository |
| Visual Studio Code | Development environment |

## 4. Main Features

### 4.1 Makers Management
- Add new makers.
- Retrieve maker information.
- Manage maker records.
- Validate maker information.

### 4.2 Tools Management
- Add new tools.
- View all tools.
- Update tool information.
- Delete tool records.
- Search tools based on their kind or category.
- Validate tool information.

### 4.3 Loans Management
- Record tool borrowing transactions.
- Maintain maker and tool references.
- Track borrowing and returning dates.
- Retrieve loan information.
- Use SQL JOIN operations to retrieve maker names and tool names along with loan details.

### 4.4 Audit Management
- Record tool-related activities.
- Maintain audit information when tools are added, updated, or deleted.
- Retrieve the latest 10 audit records.
- Display the newest audit records first.

## 5. Project Folder Structure

```text
ToolTown-Makerspace/
│
├── database/
│   └── db.js
│
├── routes/
│   ├── makers.js
│   ├── tools.js
│   ├── loans.js
│   └── audit.js
│
├── .gitignore
├── makerspace.db
├── package.json
├── package-lock.json
├── README.md
├── seed.js
└── server.js
```

### File Description

| File | Description |
|---|---|
| server.js | Initializes the Express server and connects the API routes. |
| database/db.js | Creates and manages the SQLite database and tables. |
| seed.js | Inserts sample data into the database. |
| routes/makers.js | Handles maker-related API operations. |
| routes/tools.js | Handles tool-related CRUD operations and searching. |
| routes/loans.js | Handles loan operations and JOIN queries. |
| routes/audit.js | Handles audit record retrieval. |
| makerspace.db | SQLite database file. |
| package.json | Contains project dependencies and scripts. |
| .gitignore | Specifies files that should not be tracked by Git. |

## 6. Database Design

The project uses SQLite as its relational database.

Four main tables are used.

### 6.1 Makers Table

Stores information about registered makers.

| Column | Description |
|---|---|
| id | Unique maker ID |
| name | Maker's name |
| email | Maker's email address |

### 6.2 Tools Table

Stores information about tools available in the makerspace.

| Column | Description |
|---|---|
| id | Unique tool ID |
| name | Name of the tool |
| kind | Type or category of the tool |

### 6.3 Loans Table

Stores information about tools borrowed by makers.

| Column | Description |
|---|---|
| id | Unique loan ID |
| maker_id | Reference to the maker |
| tool_id | Reference to the tool |
| borrowed_at | Date and time when the tool was borrowed |
| returned_at | Date and time when the tool was returned |

### 6.4 Audit Table

Stores information about tool-related activities.

| Column | Description |
|---|---|
| id | Unique audit record ID |
| action | Action performed on the tool |
| tool_id | Related tool ID |
| time | Date and time of the activity |

### Database Relationships

- One maker can have multiple loan records.
- One tool can appear in multiple loan records over time.
- The `maker_id` in the loans table references the makers table.
- The `tool_id` in the loans table references the tools table.
- The audit table stores tool-related activity records.

## 7. API Documentation

The application exposes REST API endpoints through Express.js.

Base URL:

```text
http://localhost:3000
```

### 7.1 Makers API

Base route:

```text
/makers
```

This API manages maker information.

| Method | Endpoint | Description |
|---|---|---|
| GET | /makers | Retrieve makers |
| POST | /makers | Add a maker |

### 7.2 Tools API

Base route:

```text
/tools
```

This API manages tools.

| Method | Endpoint | Description |
|---|---|---|
| GET | /tools | Retrieve all tools |
| GET | /tools?kind=Power%20Tool | Search tools by kind |
| POST | /tools | Add a new tool |
| PUT | /tools/:id | Update a tool |
| DELETE | /tools/:id | Delete a tool |

### 7.3 Loans API

Base route:

```text
/loans
```

This API manages borrowing and returning records.

| Method | Endpoint | Description |
|---|---|---|
| GET | /loans | Retrieve loan records |
| GET | /loans/details | Retrieve loan details with maker and tool names |

The loan details endpoint uses SQL JOIN operations to combine information from the makers, tools, and loans tables.

### 7.4 Audit API

Base route:

```text
/audit
```

| Method | Endpoint | Description |
|---|---|---|
| GET | /audit | Retrieve the latest 10 audit records |

The audit API displays the newest records first.

*Note: The endpoint descriptions above should be checked against the final route implementations before submission.*

## 8. Installation and Execution

### Prerequisites

Install the following software:

- Node.js
- Visual Studio Code
- Postman

### Step 1: Clone the Repository

```bash
git clone https://github.com/deepakgodugu0568/express.node-GA.git
```

### Step 2: Open the Project

```bash
cd ToolTown-Makerspace
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Initialize the Database and Sample Data

```bash
node seed.js
```

This command executes the seed script and inserts sample records into the database.

### Step 5: Start the Server

```bash
node server.js
```

The server will run on the configured port, expected to be:

```text
http://localhost:3000
```

### Step 6: Test the APIs

Open Postman and send requests to the API endpoints using the appropriate HTTP methods.

## 9. API Testing Using Postman

The project APIs can be tested using Postman.

Testing includes:

- Retrieving maker records.
- Creating maker records.
- Retrieving tool records.
- Creating, updating, and deleting tools.
- Searching tools by kind.
- Retrieving loan records.
- Checking JOIN results through the loan details endpoint.
- Retrieving the latest audit records.

Screenshots of successful Postman requests and responses can be included as project evidence.

## 10. Individual Contributions of Team Members

The project was divided among five team members. Each member was responsible for developing a specific module. All modules were integrated to form the complete ToolTown Makerspace application.

---

# MEMBER 1 – DATABASE DESIGN AND SEED DATA

## Student Details

| Field | Details |
|---|---|
| Student Name | revathi giddaluru |
| Roll Number / Registration Number | 252U1R6077 |
| College Name | aurora deemed to be university |
| Branch | AIML-2B |
| Academic Year | 2026-2027 |
| Team Member Number | 1 |
| Assigned Module | Database Design and Seed Data |

## 1. Contribution Overview

The first team member was responsible for designing and implementing the database structure of the ToolTown Makerspace application.

The main responsibility was to create a structured SQLite database that could store information about makers, tools, loans, and audit activities.

The database acts as the central storage system for the complete application. All other modules depend on the database to insert, retrieve, and manage information.

## 2. Files Developed

- `database/db.js`
- `seed.js`

## 3. Detailed Work Performed

### A. Database Connection and Initialization

Created the `database/db.js` file to establish the SQLite database connection.

Implemented the database initialization logic to create the required tables.

The database contains four tables:

1. Makers
2. Tools
3. Loans
4. Audit

### B. Makers Table Creation

Designed the makers table to store the details of registered makers.

It includes:
- Unique maker ID.
- Maker name.
- Email address.

### C. Tools Table Creation

Designed the tools table to maintain the tools available in the makerspace.

It includes:
- Unique tool ID.
- Tool name.
- Tool category or kind.

### D. Loans Table Creation

Created the loans table to maintain borrowing and returning information.

It includes:
- Loan ID.
- Maker ID.
- Tool ID.
- Borrowed date and time.
- Returned date and time.

The maker ID and tool ID connect the loans table with the corresponding makers and tools tables.

### E. Audit Table Creation

Created the audit table to store tool-related activity information.

It includes:
- Audit ID.
- Action performed.
- Tool ID.
- Activity time.

### F. Sample Data Insertion

Developed the `seed.js` file to insert sample records into the database.

The seed script helps initialize the application with sample makers, tools, and loan records for testing.

## 4. Technical Skills Applied

- SQLite database creation.
- SQL CREATE TABLE statements.
- SQL INSERT statements.
- Relational database design.
- Database connections using Node.js.
- Primary keys and foreign key relationships.
- Database initialization and sample data management.

## 5. Final Outcome

Successfully developed the database structure required for the ToolTown Makerspace application.

The database provides a common storage system for all five modules and supports the operations performed by the makers, tools, loans, and audit APIs.

---

# MEMBER 2 – MAKERS MANAGEMENT API

## Student Details

| Field | Details |
|---|---|
| Student Name | charan teja reddy ganguru |
| Roll Number / Registration Number | 252U1R6072 |
| College Name | aurora deemed to be university |
| Branch | AIML_2B |
| Academic Year | 2026-2027 |
| Team Member Number | 2 |
| Assigned Module | Makers Management API |

## 1. Contribution Overview

The second team member was responsible for developing the Makers Management API.

This module manages the information of makers registered in the ToolTown Makerspace system.

The makers module communicates with the SQLite database and provides REST API endpoints through which maker information can be created and retrieved.

## 2. File Developed

- `routes/makers.js`

## 3. Detailed Work Performed

### A. Makers API Development

Developed API routes for handling maker-related operations.

Implemented endpoints to:

- Retrieve maker information.
- Add new maker records.
- Connect maker API operations with the SQLite database.

### B. GET Operation

Implemented the GET endpoint to retrieve maker information from the database.

The endpoint allows users and other application modules to access the registered maker records.

### C. POST Operation

Implemented the POST endpoint to register new makers.

The API accepts maker details and inserts the information into the makers table.

### D. Data Validation

Worked on validating incoming maker information to ensure that the required details are provided before inserting records.

### E. Database Integration

Connected the makers routes with the shared database connection created by Member 1.

## 4. Technical Skills Applied

- Express.js routing.
- REST API development.
- HTTP GET and POST methods.
- SQL SELECT and INSERT operations.
- Request and response handling.
- Input validation.
- SQLite integration.

## 5. Final Outcome

Successfully developed the makers management module, allowing the application to store and retrieve maker information through REST API endpoints.

---

# MEMBER 3 – TOOLS MANAGEMENT API

## Student Details

| Field | Details |
|---|---|
| Student Name | [Enter Full Name] |
| Roll Number / Registration Number | [Enter Roll Number] |
| College Name | [Enter College Name] |
| Branch | [Enter Branch] |
| Academic Year | [Enter Academic Year] |
| Team Member Number | 3 |
| Assigned Module | Tools Management API |

## 1. Contribution Overview

The third team member was responsible for developing the Tools Management API.

This module manages the collection of tools available in the ToolTown Makerspace.

It provides functionality to create, retrieve, update, delete, and search tool records.

## 2. File Developed

- `routes/tools.js`

## 3. Detailed Work Performed

### A. Tools API Development

Developed the REST API routes for managing tool information.

### B. GET Operation

Implemented the GET endpoint to retrieve all available tool records from the database.

### C. POST Operation

Implemented the POST endpoint to add new tools.

The API accepts details such as:
- Tool name.
- Tool kind or category.

The received information is stored in the tools table.

### D. PUT Operation

Implemented the PUT endpoint to update the information of an existing tool using its unique ID.

### E. DELETE Operation

Implemented the DELETE endpoint to remove a tool record using its ID.

### F. Search by Tool Kind

Implemented the functionality to filter tools based on their category or kind.

Example:

```text
GET /tools?kind=Power%20Tool
```

This allows users to retrieve tools belonging to a particular category.

### G. Input Validation

Implemented validation to check incoming tool information before processing database operations.

### H. Audit Integration

The tools module works with the audit functionality so that tool creation, modification, and deletion activities can be recorded.

## 4. Technical Skills Applied

- Express.js routing.
- REST API development.
- HTTP GET, POST, PUT, and DELETE methods.
- SQL SELECT, INSERT, UPDATE, and DELETE operations.
- Query parameters.
- Input validation.
- SQLite integration.

## 5. Final Outcome

Successfully developed the tools management module with CRUD functionality, category-based searching, and integration with the audit functionality.

---

# MEMBER 4 – LOANS MANAGEMENT API

## Student Details

| Field | Details |
|---|---|
| Student Name | [Enter Full Name] |
| Roll Number / Registration Number | [Enter Roll Number] |
| College Name | [Enter College Name] |
| Branch | [Enter Branch] |
| Academic Year | [Enter Academic Year] |
| Team Member Number | 4 |
| Assigned Module | Loans Management API |

## 1. Contribution Overview

The fourth team member was responsible for developing the Loans Management API.

The loans module maintains information about tools borrowed by registered makers.

It connects the makers table and tools table through their respective IDs and retrieves combined information using SQL JOIN operations.

## 2. File Developed

- `routes/loans.js`

## 3. Detailed Work Performed

### A. Loans API Development

Developed the API routes responsible for retrieving and managing loan-related information.

### B. Loan Information Retrieval

Implemented the GET endpoint to retrieve loan records stored in the loans table.

### C. Maker and Tool Relationships

Worked with the relationships between the following database tables:

- Makers.
- Tools.
- Loans.

The maker ID identifies the person borrowing the tool, while the tool ID identifies the borrowed tool.

### D. SQL JOIN Implementation

Implemented SQL JOIN operations to retrieve combined information from multiple tables.

Instead of returning only maker IDs and tool IDs, the JOIN query retrieves the corresponding maker names and tool names.

### E. Loan Details Endpoint

Developed the following endpoint:

```text
GET /loans/details
```

This endpoint provides detailed loan information by combining records from the makers, tools, and loans tables.

### F. Borrowing and Returning Information

Worked with the `borrowed_at` and `returned_at` fields to maintain borrowing and returning information.

## 4. Technical Skills Applied

- Express.js routing.
- REST API development.
- SQLite database integration.
- SQL SELECT queries.
- SQL INNER JOIN operations.
- Relational database concepts.
- Foreign key relationships.
- API response handling.

## 5. Final Outcome

Successfully developed the loans management module and implemented JOIN operations to retrieve meaningful loan information by combining records from multiple database tables.

---

# MEMBER 5 – AUDIT MANAGEMENT AND PROJECT INTEGRATION

## Student Details

| Field | Details |
|---|---|
| Student Name | [Enter Full Name] |
| Roll Number / Registration Number | [Enter Roll Number] |
| College Name | [Enter College Name] |
| Branch | [Enter Branch] |
| Academic Year | [Enter Academic Year] |
| Team Member Number | 5 |
| Assigned Module | Audit Management and Project Integration |

## 1. Contribution Overview

The fifth team member was responsible for developing the Audit Management API and coordinating the integration of the different project modules.

This member also handled the main project documentation and supporting configuration files.

The audit functionality maintains a record of important tool-related activities performed in the application.

## 2. Files Developed and Managed

- `routes/audit.js`
- `server.js`
- `README.md`
- `package.json`
- `.gitignore`

## 3. Detailed Work Performed

### A. Audit API Development

Developed the audit routes to retrieve audit information from the SQLite database.

### B. Audit Record Retrieval

Implemented the GET endpoint:

```text
GET /audit
```

The endpoint retrieves the latest 10 audit records.

### C. Latest Records First

Implemented the required ordering so that the newest audit records appear before older records.

### D. Tool Activity Tracking

Integrated the audit functionality with the tools module.

The application records important tool-related actions, including:

- Adding a tool.
- Updating a tool.
- Deleting a tool.

The audit records contain the action performed, related tool ID, and activity time.

### E. Server Integration

Worked on integrating the different route modules into the main Express application.

The server connects the following routes:

- Makers routes.
- Tools routes.
- Loans routes.
- Audit routes.

This makes all modules accessible through the main application.

### F. Package Configuration

Managed the project configuration in `package.json`, including the dependencies required to run the application.

### G. Git Ignore Configuration

Created and maintained the `.gitignore` file to prevent unnecessary files and generated data from being tracked in Git.

### H. Project Documentation

Prepared the README documentation containing:

- Project overview.
- Objectives.
- Technologies used.
- Project structure.
- Database design.
- API documentation.
- Installation instructions.
- Individual member contributions.

### I. Module Integration and Testing

Worked on integrating the different modules and checking that the APIs were accessible through the main Express server.

## 4. Technical Skills Applied

- Express.js.
- REST API integration.
- SQLite database queries.
- Audit logging concepts.
- Node.js project configuration.
- Git and GitHub.
- Postman API testing.
- Technical documentation.

## 5. Final Outcome

Successfully developed the audit management functionality and worked on integrating the five project modules into a single backend application.

The project documentation and configuration files were also prepared to make the application easier to understand, execute, and test.

---

## 11. Team Collaboration

The project was completed through the collaboration of five team members.

Each member was assigned a separate module, and the individual modules were integrated into the main application.

| Member | Assigned Responsibility | Main Files |
|---|---|---|
| Member 1 – Deepak Godugu | Database Design and Seed Data | `database/db.js`, `seed.js` |
| Member 2 | Makers Management API | `routes/makers.js` |
| Member 3 | Tools Management API | `routes/tools.js` |
| Member 4 | Loans Management API | `routes/loans.js` |
| Member 5 | Audit Management and Project Integration | `routes/audit.js`, `server.js`, `README.md`, `package.json`, `.gitignore` |

## 12. Expected Project Outcome

The completed ToolTown Makerspace application provides a backend system for managing makers, tools, borrowing transactions, and audit records.

Through this project, the team gained practical experience in:

- Backend application development.
- REST API creation.
- Express.js routing.
- SQLite database management.
- SQL queries and JOIN operations.
- CRUD operations.
- Input validation.
- API testing using Postman.
- Git and GitHub collaboration.
- Team-based software development.

## 13. GitHub Repository

**Project Repository:**

https://github.com/deepakgodugu0568/express.node-GA.git

## 14. Conclusion

The ToolTown Makerspace project demonstrates the development of a database-driven backend application using Node.js, Express.js, and SQLite.

The project successfully combines different modules, including maker management, tool management, loan management, and audit management.

By dividing the work among five team members, each member gained practical experience in a specific area of backend development while contributing to the development of a complete application.

This project helped the team understand how individual backend modules, database relationships, REST APIs, and collaborative development practices work together in a real-world software application.
