import { chromium } from 'playwright-core';
import fs from 'node:fs';

const browser = await chromium.launch({ channel: 'chrome', headless: true });
const out = [];
const base = 'http://127.0.0.1:8123/lash-certificate/course-live';
const storageKey = 'sb-lash-course-auth-proxy-auth-token';
const fakeSession = {
  access_token: ['e30', 'eyJleHAiOjQ3NDEwMTkyMDB9', 'x'].join('.'),
  refresh_token: 'test-refresh', token_type: 'bearer', expires_in: 36000,
  expires_at: Math.floor(Date.now()/1000) + 36000,
  user: { id: '11111111-1111-4111-8111-111111111111', aud: 'authenticated', role: 'authenticated', email: 'student-smoke@example.com', app_metadata: { provider: 'email', providers: ['email'] }, user_metadata: {}, identities: [], created_at: new Date().toISOString() }
};

async function runCase(label, active) {
  const context = await browser.newContext();
  await context.addInitScript(({ key, session }) => { try { localStorage.setItem(key, JSON.stringify(session)); } catch {} }, { key: storageKey, session: fakeSession });
  const page = await context.newPage();
  const events = [];
  page.on('pageerror', e => events.push(`pageerror: ${e.message}`));
  page.on('console', m => { if (m.type() === 'error') events.push(`console.error: ${m.text()}`); });
  page.on('requestfailed', r => events.push(`requestfailed: ${r.url()} :: ${r.failure()?.errorText}`));
  page.on('response', r => { if (r.status() >= 400) events.push(`http${r.status()}: ${r.url()}`); });
  await page.route('https://lash-course-auth-proxy.layero.app/**', async route => {
    const p = new URL(route.request().url()).pathname;
    const headers = { 'content-type': 'application/json' };
    if (p.includes('/rest/v1/course_access')) return route.fulfill({ status: 200, headers, body: JSON.stringify({ is_active: active }) });
    if (p.includes('/rest/v1/user_roles')) return route.fulfill({ status: 200, headers, body: '[]' });
    if (p.includes('/rest/v1/lesson_progress')) return route.fulfill({ status: 200, headers, body: '[]' });
    if (p.includes('/rest/v1/profiles')) return route.fulfill({ status: 200, headers, body: JSON.stringify({ full_name: 'Smoke Student', email: 'student-smoke@example.com' }) });
    if (p.includes('/auth/v1/user')) return route.fulfill({ status: 200, headers, body: JSON.stringify(fakeSession.user) });
    return route.fulfill({ status: 200, headers, body: '{}' });
  });
  let navError = '';
  try { await page.goto(`${base}/cabinet/?smoke=${label}`, { waitUntil: 'domcontentloaded', timeout: 30000 }); await page.waitForTimeout(4000); } catch (e) { navError = e.message; }
  const body = (await page.locator('body').innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
  out.push(`CASE=${label}`, `active=${active}`, `url=${page.url()}`, `nav_error=${navError}`, `body=${body.slice(0,1200)}`, ...events.slice(0,30), '---');
  await context.close();
}

await runCase('pending-student', false);
await runCase('active-student', true);
await browser.close();
fs.mkdirSync('course-live/diagnostics', { recursive: true });
fs.writeFileSync('course-live/diagnostics/cabinet-browser.txt', out.join('\n') + '\n');
console.log(out.join('\n'));
