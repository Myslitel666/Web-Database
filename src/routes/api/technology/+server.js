import pool from "../pool";

export async function GET({ url }) {
    const name = url.searchParams.get("name"); // <-- достаём из query-параметра

    const result = await pool.query(
        "SELECT name, description, logo, data_source FROM Technologies WHERE name = $1",
        [name]
    );

    return new Response(
        JSON.stringify({
            success: true,
            technology: result.rows[0] ?? null
        }),
        {
            headers: { "Content-Type": "application/json" },
            status: 200
        }
    );
}