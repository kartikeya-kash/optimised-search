import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors({
  origin: "http://localhost:5173" // <-- frontend URL
}));app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "searchopti",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ Connected to MySQL database!");
});

//get data
app.get("/data", (req, res) => {
  const q = "SELECT * FROM data"; 
  db.query(q, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(data);
  });
});

const PORT =5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));