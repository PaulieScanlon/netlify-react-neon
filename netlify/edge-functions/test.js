// import { Context } from '@netlify/edge-functions';

export default async function handler(req, context) {
  //   console.log(req);
  //   console.log(res);
  //   console.log(context);

  const { geo } = context;

  return new Response(JSON.stringify({ message: 'A-Ok!', geo: geo }, null, 2), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}

export const config = { path: '/test' };
