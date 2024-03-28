import { neon } from '@neondatabase/serverless';

export default async function handler(request, context) {
  const { date } = await request.json();

  const {
    geo: { city, country, latitude, longitude },
  } = context;

  const sql = neon(Netlify.env.get('DATABASE_URL'));

  try {
    await sql`
    INSERT INTO visitors (date, city, country, latitude, longitude)
    VALUES (${date}, ${city}, ${country.name}, ${latitude}, ${longitude})
  `;

    return new Response(
      JSON.stringify({ message: 'A-Ok!', date, city, country: country.name, latitude, longitude }, null, 2),
      {
        status: 200,
        headers: { 'content-type': 'application/json' },
      }
    );
  } catch (error) {
    return new Response({
      status: 500,
      headers: { 'content-type': 'application/json' },
    });
  }
}

export const config = { path: '/log-visit' };
