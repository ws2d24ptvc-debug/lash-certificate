const KEY = 'vln-6f3c9d8a21e4';
const PROGRESS_KEY = 'lash-course-emergency-progress-v2';
const app = document.getElementById('app');

const NON_STUDENT_LESSONS = new Set(['osnovy-cikl', 'osnovy-protivopokazaniya', 'prodvizhenie-start', 'bezopasnost-sanitariya']);
const MODULE_IMAGES = [
  './assets/module-01.png','./assets/module-02.png','./assets/module-03.png','./assets/module-04.png',
  './assets/module-05.png','./assets/module-06.png','./assets/module-07.png','./assets/module-08.png',
  './assets/module-09.png','./assets/module-10.png','./assets/module-11.png','./assets/module-12.png',
  './assets/module-13.png','./assets/module-14.png'
];
const LESSON_IMAGES = {
  'osnovy-stroenie':'./assets/lesson-osnovy-stroenie.png',
  'glaz-anatomiya':'./assets/lesson-glaz-anatomiya.png',
  'glaz-stroenie-resnitsy':'./assets/lesson-glaz-stroenie-resnitsy.png',
  'glaz-fazy-rosta':'./assets/lesson-glaz-fazy-rosta.png',
  'glaz-napravlenie':'./assets/lesson-glaz-napravlenie.png',
  'glaz-ocenka':'./assets/lesson-glaz-ocenka.png',
  'materialy-pincety':'./assets/lesson-materialy-pincety.png',
  'materialy-resnitsy':'./assets/lesson-materialy-resnitsy.png',
  'materialy-izolyaciya':'./assets/lesson-materialy-izolyaciya.png',
  'materialy-podgotovka':'./assets/lesson-materialy-podgotovka.png',
  'materialy-kley':'./assets/lesson-materialy-kley.png',
  'bezopasnost-pincety':'./assets/lesson-bezopasnost-pincety.png',
  'podgotovka-protivopokazaniya':'./assets/lesson-podgotovka-protivopokazaniya.png',
  'podgotovka-izolyaciya':'./assets/lesson-podgotovka-izolyaciya.png',
  'podgotovka-materialy':'./assets/lesson-podgotovka-materialy.png',
  'ruka-postanovka':'./assets/lesson-ruka-postanovka.png',
  'klassika-tehnika':'./assets/lesson-klassika-tehnika.png',
  'modelirovanie-shema':'./assets/lesson-modelirovanie-shema.png',
  'modelirovanie-opushennyi':'./assets/lesson-modelirovanie-opushennyi.png',
  'modelirovanie-lisiy':'./assets/lesson-modelirovanie-lisiy.png',
  'modelirovanie-naturalnyi':'./assets/lesson-modelirovanie-naturalnyi.png',
  'modelirovanie-kukolnyi':'./assets/lesson-modelirovanie-kukolnyi.jpg',
  'modelirovanie-belichiy':'./assets/lesson-modelirovanie-belichiy.png',
  'modelirovanie-kim':'./assets/lesson-modelirovanie-kim.png',
  'modelirovanie-mokryi':'./assets/lesson-modelirovanie-mokryi.png',
  'oshibki-tipichnye':'./assets/lesson-oshibki-tipichnye.png',
  'oshibki-snyatie':'./assets/lesson-oshibki-snyatie.png',
  'obemy-puchki':'./assets/lesson-obemy-puchki.png',
  'effekty-bazovye':'./assets/lesson-effekty-bazovye.png',
  'sovremennye-mokryi':'./assets/lesson-sovremennye-mokryi.png',
  'sovremennye-kim':'./assets/lesson-sovremennye-kim.png',
  'klient-konsultaciya':'./assets/lesson-klient-konsultaciya.png'
};

let meta = null;

function escapeHtml(value = '') {
  return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
}
function visibleLessons(lessons = []) { return lessons.filter((l) => !NON_STUDENT_LESSONS.has(l.id)); }
function allLessons() { return (meta?.modules ?? []).slice(0,13).flatMap((m) => visibleLessons(m.lessons)); }
function completedSet() {
  try { const v = JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]'); return new Set(Array.isArray(v) ? v : []); }
  catch { return new Set(); }
}
function saveCompleted(set) { localStorage.setItem(PROGRESS_KEY, JSON.stringify([...set])); }
function progress() {
  const lessons = allLessons(); const completed = completedSet();
  const done = lessons.filter((l) => completed.has(l.id)).length;
  return { completed, done, total: lessons.length, percent: lessons.length ? Math.round(done / lessons.length * 100) : 0, next: lessons.find((l) => !completed.has(l.id)) || null };
}
function params() { return new URL(location.href).searchParams; }
function go(page, extra = {}) {
  const u = new URL(location.href); u.search = ''; u.searchParams.set('open', KEY);
  if (page) u.searchParams.set('page', page);
  for (const [k,v] of Object.entries(extra)) if (v) u.searchParams.set(k,v);
  history.pushState({}, '', u); render();
}
function shell(content) {
  return `<div class="academy-shell"><header class="academy-topbar"><nav class="academy-top-nav"><button data-nav="cabinet">Обучение</button><button data-nav="certificate">Сертификат</button></nav><div class="academy-user"><span class="academy-bell">♧</span><span>Ученица</span></div></header><main class="academy-content">${content}</main></div>`;
}
function bind() {
  document.querySelectorAll('[data-nav]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); go(el.dataset.nav); }));
  document.querySelectorAll('[data-open]').forEach((el) => el.addEventListener('click', (e) => go('lesson', { id: e.currentTarget.dataset.open })));
}
function moduleCard(m, i) {
  const first = visibleLessons(m.lessons)[0];
  return `<article class="course-module module-approved">${first ? `<button class="course-module-link" data-open="${escapeHtml(first.id)}"><img src="${MODULE_IMAGES[i]}" alt="Модуль ${m.number} — ${escapeHtml(m.title)}" loading="${i < 4 ? 'eager' : 'lazy'}"></button>` : `<div class="course-module-link"><img src="${MODULE_IMAGES[i]}" alt="Модуль ${m.number}"></div>`}</article>`;
}
function renderCabinet() {
  const p = progress();
  const modules = meta.modules.slice(0,13);
  const completedModules = modules.filter((m) => { const ls = visibleLessons(m.lessons); return ls.length && ls.every((l) => p.completed.has(l.id)); }).length;
  const cards = modules.map(moduleCard).join('');
  app.innerHTML = shell(`<div class="course-home"><section class="course-welcome"><img src="./assets/hero.png" alt="Онлайн-курс по наращиванию ресниц — с нуля до мастера">${p.next ? `<button class="hero-overlay" data-open="${escapeHtml(p.next.id)}" aria-label="Продолжить обучение"></button>` : ''}</section><section class="course-progress"><div><small>ТВОЙ ПРОГРЕСС</small><strong>${p.percent}<sup>%</sup></strong></div><div class="course-bar"><p>Пройдено <b>${completedModules}</b> из 13 учебных модулей</p><div class="progress-track"><div class="progress-fill" style="width:${p.percent}%"></div></div><span>${p.done === 0 ? 'Всё начинается с первого шага ♡' : p.percent === 100 ? 'Курс пройден — отличный результат ♡' : 'Продолжай — у тебя отлично получается ♡'}</span></div></section><div class="course-heading"><div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Твои модули</h2></div><span>01 — 14</span></div><section class="course-modules">${cards}<article class="course-module module-approved certificate-locked"><button class="course-module-link" data-nav="certificate"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат"><div class="certificate-lock"><b>🔒</b><span>Сертификат — после восстановления обычного входа</span></div></button></article></section></div>`);
  bind();
}
function renderLesson() {
  const id = params().get('id'); if (!id) return go('cabinet');
  const module = meta.modules.slice(0,13).find((m) => visibleLessons(m.lessons).some((l) => l.id === id));
  if (!module) { app.innerHTML = shell('<div class="notice error">Урок не найден.</div>'); bind(); return; }
  const lessons = visibleLessons(module.lessons); const idx = lessons.findIndex((l) => l.id === id); const lesson = lessons[idx];
  const image = LESSON_IMAGES[id]; const prev = lessons[idx-1]; const next = lessons[idx+1]; const completed = completedSet(); const done = completed.has(id);
  if (!image) { app.innerHTML = shell('<div class="notice error">Изображение урока не найдено.</div>'); bind(); return; }
  app.innerHTML = shell(`<article class="image-lesson-page"><div class="image-lesson-toolbar"><button data-nav="cabinet">← <span>К МОДУЛЯМ</span></button><strong>МОДУЛЬ ${module.number} · ${idx+1} / ${lessons.length}</strong></div><img class="lesson-image" src="${image}" alt="${escapeHtml(lesson.title)}" loading="eager"><div class="image-lesson-nav">${prev ? `<button data-open="${escapeHtml(prev.id)}">← Предыдущий</button>` : '<span></span>'}${next ? `<button class="next" data-open="${escapeHtml(next.id)}">Следующий урок <b>→</b></button>` : '<button class="next" data-nav="cabinet">Завершить модуль <b>→</b></button>'}</div><button class="lesson-complete ${done ? 'done' : ''}" id="complete" ${done ? 'disabled' : ''}>◉ ${done ? 'Урок пройден' : 'Отметить как пройденный'}</button></article>`);
  bind();
  document.getElementById('complete')?.addEventListener('click', () => { completed.add(id); saveCompleted(completed); renderLesson(); });
}
function renderCertificate() {
  const p = progress();
  app.innerHTML = shell(`<section class="cert-card card"><div class="cert-icon">🔒</div><h1>Сертификат временно недоступен</h1><p class="lead" style="margin-left:auto;margin-right:auto">В аварийном режиме без VPN уроки работают, а прогресс сохраняется только на этом устройстве. Именной сертификат откроем после восстановления обычной авторизации.</p><p class="muted">Сейчас пройдено ${p.done} из ${p.total} уроков — ${p.percent}%.</p><div class="actions" style="justify-content:center"><button class="btn btn-primary" data-nav="cabinet">Продолжить обучение</button></div></section>`); bind();
}
async function render() {
  if (!meta) { const r = await fetch('./course-meta.json?v=emergency-static-20261030', {cache:'no-store'}); if (!r.ok) throw new Error('Не удалось загрузить программу курса.'); meta = await r.json(); }
  const page = params().get('page') || 'cabinet';
  if (page === 'lesson') return renderLesson();
  if (page === 'certificate') return renderCertificate();
  return renderCabinet();
}

window.addEventListener('popstate', render);
render().catch((err) => { app.innerHTML = `<div class="boot">${escapeHtml(err?.message || 'Не удалось открыть курс.')}</div>`; });
