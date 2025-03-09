import { pool } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const result = await pool.query("SELECT id, name, image_url, talents FROM mentors");
    res.status(200).json(result.rows || []);  // Return an empty array if no results
  } catch (error) {
    console.error("Error fetching mentors:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
