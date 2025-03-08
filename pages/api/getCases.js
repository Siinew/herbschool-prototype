import { pool } from "../../lib/db";

export default async function handler(req, res) {
  try {
    const client = await pool.connect();
    const result = await client.query(
      "SELECT id, case_title, short_description FROM cases"
    );
    client.release();

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No cases found." });
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching cases:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
