import { pool } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT id, name, image_url, introduction FROM mentors ORDER BY RANDOM() LIMIT 1"
    );
    client.release();

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No mentors found." });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching mentor:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
