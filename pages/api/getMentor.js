import pool from "../../lib/db";  // Import from the central db config

export default async function handler(req, res) {
  try {
    const { rows } = await pool.query(`
      SELECT name, personality, introduction, image
      FROM mentors
      ORDER BY RANDOM() 
      LIMIT 1
    `);

    if (rows.length > 0) {
      res.status(200).json(rows[0]);
    } else {
      res.status(404).json({ message: "No mentor found" });
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
