import http from 'node:http';

const TARGET = 'https://ytolxddmtybtatadhyqj.supabase.co';
const PORT = Number(process.env.PORT || 3000);

function corsHeaders(requestedHeaders = '') {
  const allowedHeaders = requestedHeaders || 'apikey, authorization, content-type, x-client-info, x-supabase-api-version, accept, prefer, range, accept-profile, content-profile, x-upsert';
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': allowedHeaders,
    'Access-Control-Expose-Headers': 'content-range, x-supabase-api-version, content-type',
    'Access-Control-Max-Age': '86400',
    'Cache-Control': 'no-store'
  };
}

function write(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer(async (req, res) => {
  const requestedHeaders = Array.isArray(req.headers['access-control-request-headers'])
    ? req.headers['access-control-request-headers'].join(', ')
    : (req.headers['access-control-request-headers'] || '');
  const cors = corsHeaders(requestedHeaders);

  if (req.method === 'OPTIONS') {
    return write(res, 200, '', {
      ...cors,
      'Content-Length': '0'
    });
  }

  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  if (url.pathname === '/health') {
    return write(res, 200, 'ok-cors4', {
      ...cors,
      'Content-Type': 'text/plain; charset=utf-8'
    });
  }

  const allowed =
    url.pathname.startsWith('/auth/v1/') ||
    url.pathname.startsWith('/rest/v1/') ||
    url.pathname.startsWith('/storage/v1/') ||
    url.pathname.startsWith('/functions/v1/');

  if (!allowed) {
    return write(res, 404, 'Not found', {
      ...cors,
      'Content-Type': 'text/plain; charset=utf-8'
    });
  }

  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  const body = chunks.length ? Buffer.concat(chunks) : undefined;

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value == null) continue;
    const lower = key.toLowerCase();
    if (['host','origin','referer','connection','content-length','accept-encoding','x-forwarded-for','x-forwarded-proto','x-forwarded-host'].includes(lower)) continue;
    headers.set(key, Array.isArray(value) ? value.join(', ') : value);
  }
  headers.set('accept-encoding', 'identity');

  const targetUrl = new URL(url.pathname + url.search, TARGET);

  try {
    const upstream = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: req.method === 'GET' || req.method === 'HEAD' ? undefined : body,
      redirect: 'follow',
      signal: AbortSignal.timeout(20000)
    });

    const responseBody = Buffer.from(await upstream.arrayBuffer());
    const outHeaders = { ...cors };
    upstream.headers.forEach((value, key) => {
      const lower = key.toLowerCase();
      if (['transfer-encoding','connection','content-length','content-encoding','access-control-allow-origin','access-control-allow-methods','access-control-allow-headers','access-control-expose-headers','access-control-max-age','vary'].includes(lower)) return;
      outHeaders[key] = value;
    });
    outHeaders['Content-Length'] = String(responseBody.length);

    write(res, upstream.status, responseBody, outHeaders);
  } catch (error) {
    const payload = JSON.stringify({ error: 'proxy_error', message: String(error) });
    write(res, 502, payload, {
      ...cors,
      'Content-Type': 'application/json; charset=utf-8'
    });
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`lash-course-auth-proxy listening on ${PORT}`);
});
