import { neon } from '@neondatabase/serverless';

export default async function handler() {
  const sql = neon(Netlify.env.get('DATABASE_URL'));

  const visits = await sql('SELECT * FROM visitors');

  return new Response(JSON.stringify({ message: 'A-Ok!', visits }, null, 2), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

export const config = { path: '/get-visits' };
