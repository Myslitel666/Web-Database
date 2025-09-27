import { DATABASE_URL } from '$env/static/private';
import pg from 'pg';

export const pool = new pg.Pool({
    connectionString: DATABASE_URL,
    ssl: false
});

export default pool;