import pool from "../pool";

export async function GET() {
    const result = await pool.query(
      "SELECT name, description, logo FROM Technologies ORDER BY name"
    );

    return new Response(JSON.stringify({
      success: true,
      technologies: result.rows
    }), {
      headers: { "Content-Type": "application/json" },
      status: 200
    });
}