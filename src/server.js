import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

// Allow all origins (safe for local development)
app.use(cors());

app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "searchopti",
});

db.connect(err => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

// Get data
app.get("/data", (req, res) => {
  const q = "SELECT * FROM data";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(data);
  });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));