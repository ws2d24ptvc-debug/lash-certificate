const SUPABASE = "https://ytolxddmtybtatadhyqj.supabase.co";
const ALLOWED_ORIGIN = "https://ws2d24ptvc-debug.github.io";

function corsHeaders(request) {
  const requestedHeaders =
    request.headers.get("access-control-request-headers") ||
    "apikey, authorization, content-type, x-client-info, x-supabase-api-version";

  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": requestedHeaders,
    "Access-Control-Expose-Headers": "content-range, x-supabase-api-version",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin, Access-Control-Request-Headers",
  };
}

async function handle(request) {
  const url = new URL(request.url);
  const cors = corsHeaders(request);

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: cors });
  }

  if (url.pathname === "/health") {
    return new Response("ok", {
      status: 200,
      headers: { ...cors, "Content-Type": "text/plain" },
    });
  }

  const allowed =
    url.pathname.startsWith("/auth/v1/") ||
    url.pathname.startsWith("/rest/v1/") ||
    url.pathname.startsWith("/storage/v1/") ||
    url.pathname.startsWith("/functions/v1/");

  if (!allowed) {
    return new Response("Not found", { status: 404, headers: cors });
  }

  const target = new URL(url.pathname + url.search, SUPABASE);
  const headers = new Headers(request.headers);

  for (const name of [
    "host",
    "origin",
    "referer",
    "cf-connecting-ip",
    "cf-ipcountry",
    "cf-ray",
    "x-forwarded-for",
  ]) {
    headers.delete(name);
  }

  const init = {
    method: request.method,
    headers,
    redirect: "follow",
  };

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = await request.arrayBuffer();
  }

  try {
    const upstream = await fetch(target, init);
    const responseHeaders = new Headers(upstream.headers);
    for (const [key, value] of Object.entries(cors)) {
      responseHeaders.set(key, value);
    }

    return new Response(upstream.body, {
      status: upstream.status,
      statusText: upstream.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "proxy_error", message: String(error) }),
      {
        status: 502,
        headers: { ...cors, "Content-Type": "application/json" },
      }
    );
  }
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const OPTIONS = handle;
