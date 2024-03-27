export default async function handler() {
  return new Response(JSON.stringify({ message: 'A-Ok!' }, null, 2), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

export const config = { path: '/test' };
