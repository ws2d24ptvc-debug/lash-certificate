import http from 'node:http';
import https from 'node:https';

const LOCAL_HOST = '127.0.0.1';
const LOCAL_PORT = 3001;
const PUBLIC_PORT = Number(process.env.PORT || 3000);
const MEDIA_ORIGIN = 'https://lash-course-vera-web.onrender.com';
const mediaPattern = /\.(?:png|jpe?g|webp|gif|avif|svg)$/i;

function copyHeaders(source, target) {
  for (const [key, value] of Object.entries(source)) {
    if (value !== undefined && !['connection','transfer-encoding','content-length'].includes(key.toLowerCase())) {
      target.setHeader(key, value);
    }
  }
}

function proxyToRender(req, res) {
  const target = new URL(req.url || '/', MEDIA_ORIGIN);
  const upstream = https.request(target, {
    method: req.method,
    headers: { ...req.headers, host: target.host },
  }, (r) => {
    res.statusCode = r.statusCode || 502;
    copyHeaders(r.headers, res);
    r.pipe(res);
  });
  upstream.on('error', () => {
    res.statusCode = 502;
    res.end('Media temporarily unavailable');
  });
  if (req.method !== 'GET' && req.method !== 'HEAD') req.pipe(upstream); else upstream.end();
}

const server = http.createServer((req, res) => {
  const local = http.request({
    hostname: LOCAL_HOST,
    port: LOCAL_PORT,
    path: req.url,
    method: req.method,
    headers: req.headers,
  }, (r) => {
    if (r.statusCode === 404 && mediaPattern.test((req.url || '').split('?')[0])) {
      r.resume();
      proxyToRender(req, res);
      return;
    }
    res.statusCode = r.statusCode || 500;
    copyHeaders(r.headers, res);
    r.pipe(res);
  });
  local.on('error', () => {
    res.statusCode = 502;
    res.end('Application starting');
  });
  if (req.method !== 'GET' && req.method !== 'HEAD') req.pipe(local); else local.end();
});

server.listen(PUBLIC_PORT, '0.0.0.0', () => console.log(`proxy listening on ${PUBLIC_PORT}`));
