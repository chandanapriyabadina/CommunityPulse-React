const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "cse",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection failed:", err);
    process.exit(1);
  }
  console.log("MySQL connected...");
});

// Fetch all users
app.get("/api/user", (req, res) => {
  const sql = "SELECT * FROM user";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error fetching users:", err);
      return res.status(500).send("Database error.");
    }
    res.send(result);
  });
});

// Insert a new user
app.post("/api/user", (req, res) => {
  const newUser = req.body;
  const sql = "INSERT INTO user SET ?";
  db.query(sql, newUser, (err, result) => {
    if (err) {
      console.error("Error inserting user:", err);
      return res.status(500).send("Failed to insert user.");
    }
    res.send(result);
  });
});

// Update an existing user
app.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  console.log("Updating user with ID:", id);
  console.log("Updated data:", updatedUser); // Log the updated data

  const sql = "UPDATE user SET ? WHERE id = ?";
  db.query(sql, [updatedUser, id], (err, result) => {
    if (err) {
      console.error("Error updating user:", err);
      return res.status(500).send("Failed to update user.");
    }

    if (result.affectedRows === 0) {
      return res.status(404).send("User not found.");
    }

    console.log("Update result:", result); // Log the result of the update query
    res.send(result);
  });
});

// Delete a user
app.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM user WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      return res.status(500).send("Failed to delete user.");
    }
    res.send(result);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});