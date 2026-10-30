import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/+esm';

const SUPABASE_URL = 'https://c--eb1598e0-facf-4633-be7b-c7b847af05a2-prod.lovable.cloud';
const SUPABASE_KEY = 'sb_publishable_3jTxl7e4GIEbzQgPoUiNzw_OIkOax6w';
const CERTIFICATE_URL = 'https://ws2d24ptvc-debug.github.io/lash-certificate/certificate-v13.html';
const SUPPORT_EMAIL = 'lashcourse.support@gmail.com';

const app = document.getElementById('app');
const state = { meta: null, user: null, student: null, authMessage: '' };

const EMERGENCY_KEY = 'vln-6f3c9d8a21e4';
const EMERGENCY_MODE = new URL(location.href).searchParams.get('open') === EMERGENCY_KEY;
const EMERGENCY_PROGRESS_KEY = 'lash-course-emergency-progress-v1';

function readEmergencyCompleted() {
  try {
    const raw = JSON.parse(localStorage.getItem(EMERGENCY_PROGRESS_KEY) || '[]');
    return new Set(Array.isArray(raw) ? raw : []);
  } catch { return new Set(); }
}

function activateEmergency() {
  state.user = { id: 'emergency', email: '', user_metadata: { full_name: 'Ученица' } };
  state.student = { userId: 'emergency', email: '', name: 'Ученица', isAdmin: false, hasAccess: true, completed: readEmergencyCompleted() };
}

if (EMERGENCY_MODE) activateEmergency();

function cloudFetch(input, init = {}) {
  const headers = new Headers(typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined);
  if (init.headers) new Headers(init.headers).forEach((v, k) => headers.set(k, v));
  if (headers.get('Authorization') === `Bearer ${SUPABASE_KEY}`) headers.delete('Authorization');
  headers.set('apikey', SUPABASE_KEY);
  return fetch(input, { ...init, headers });
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  global: { fetch: cloudFetch },
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;').replaceAll("'", '&#039;');

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
  'klient-konsultaciya':'./assets/lesson-klient-konsultaciya.png',
};

function pageParam() { return new URL(location.href).searchParams.get('page') || 'home'; }

function navigate(page, params = {}) {
  const url = new URL(location.href);
  url.search = '';
  if (EMERGENCY_MODE) url.searchParams.set('open', EMERGENCY_KEY);
  if (page && page !== 'home') url.searchParams.set('page', page);
  for (const [key, value] of Object.entries(params)) if (value != null && value !== '') url.searchParams.set(key, value);
  history.pushState({}, '', url);
  render();
}

function studentLessons(lessons = []) { return lessons.filter((l) => !NON_STUDENT_LESSONS.has(l.id)); }
function allLessons() { return (state.meta?.modules ?? []).flatMap((m) => studentLessons(m.lessons)); }
function progressFor(completed = new Set(), lessons = allLessons()) {
  const done = lessons.filter((l) => completed.has(l.id)).length;
  const total = lessons.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const next = lessons.find((l) => !completed.has(l.id)) ?? null;
  return { done, total, percent, next };
}

function shell(content) {
  const user = state.user;
  const admin = state.student?.isAdmin;
  if (user) {
    const fullName = state.student?.name || user.user_metadata?.full_name || '';
    const firstName = fullName.trim().split(/\s+/)[0] || 'Кабинет';
    const page = pageParam();
    return `<div class="academy-shell">
      <header class="academy-topbar">
        <nav class="academy-top-nav">
          <button data-nav="cabinet" class="${page === 'cabinet' || page === 'lesson' ? 'active' : ''}">Обучение</button>
          <button data-nav="certificate" class="${page === 'certificate' ? 'active' : ''}">Сертификат</button>
        </nav>
        <div class="academy-user"><span class="academy-bell" aria-hidden="true">♧</span>${admin ? '<button class="academy-admin" data-nav="admin" aria-label="Ученицы">◆</button>' : ''}<span>${escapeHtml(firstName)}</span><button class="academy-logout" data-action="logout" aria-label="Выйти">↪</button></div>
      </header>
      <main class="academy-content">${content}</main>
    </div>`;
  }
  return `<div class="shell">
    <header class="topbar"><div class="topbar-inner">
      <a class="brand" href="./" data-nav="home">Наращивание ресниц с нуля<small>Вера Лушина · LASH ACADEMY</small></a>
      <nav class="nav"><button class="optional" data-nav="home">О курсе</button><button data-nav="auth">Войти</button></nav>
    </div></header>
    <main>${content}</main>
    <footer class="footer">Авторский обучающий курс-пособие · Вера Лушина<br>${escapeHtml(SUPPORT_EMAIL)}</footer>
  </div>`;
}

function bindShell() {
  document.querySelectorAll('[data-nav]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); navigate(el.dataset.nav); }));
  document.querySelector('[data-action="logout"]')?.addEventListener('click', async () => {
    if (EMERGENCY_MODE) { location.href = './'; return; }
    await supabase.auth.signOut(); state.user = null; state.student = null; navigate('home');
  });
}

function showLoading(text = 'Загрузка…') {
  app.innerHTML = shell(`<section class="section"><div class="card"><span class="spinner"></span> <span class="muted">${escapeHtml(text)}</span></div></section>`);
  bindShell();
}
function showError(message) {
  app.innerHTML = shell(`<section class="section"><div class="notice error">${escapeHtml(message)}</div><div class="actions"><button class="btn" data-nav="home">На главную</button></div></section>`);
  bindShell();
}

async function loadMeta() {
  if (state.meta) return state.meta;
  const response = await fetch(`./course-meta.json?v=pages-original-20261030`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Не удалось загрузить программу курса.');
  state.meta = await response.json(); return state.meta;
}

async function loadStudent(force = false) {
  if (EMERGENCY_MODE) { activateEmergency(); return state.student; }
  if (state.student && !force) return state.student;
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) throw new Error('Необходимо войти в аккаунт.');
  const uid = userData.user.id;
  const [access, roles, progress, profile] = await Promise.all([
    supabase.from('course_access').select('is_active').eq('user_id', uid).maybeSingle(),
    supabase.from('user_roles').select('role').eq('user_id', uid),
    supabase.from('lesson_progress').select('lesson_id').eq('user_id', uid),
    supabase.from('profiles').select('full_name,email').eq('id', uid).maybeSingle(),
  ]);
  const firstError = access.error || roles.error || progress.error || profile.error;
  if (firstError) throw new Error(firstError.message || 'Не удалось загрузить данные ученицы.');
  const isAdmin = (roles.data ?? []).some((r) => r.role === 'admin');
  state.student = { userId: uid, email: userData.user.email ?? '', name: profile.data?.full_name ?? userData.user.user_metadata?.full_name ?? '', isAdmin, hasAccess: isAdmin || !!access.data?.is_active, completed: new Set((progress.data ?? []).map((p) => p.lesson_id)) };
  return state.student;
}

function moduleCard(m, index, firstLesson, clickable = true) {
  const image = MODULE_IMAGES[index];
  const body = `<img src="${image}" alt="Модуль ${m.number} — ${escapeHtml(m.title)}" loading="${index < 4 ? 'eager' : 'lazy'}">`;
  return `<article class="course-module module-approved">${clickable && firstLesson ? `<button class="course-module-link" data-open-lesson="${escapeHtml(firstLesson.id)}" aria-label="Открыть модуль ${m.number}">${body}</button>` : `<div class="course-module-link">${body}</div>`}</article>`;
}

function renderHome() {
  const modules = state.meta.modules.slice(0, 13);
  const cards = modules.map((m, i) => moduleCard(m, i, studentLessons(m.lessons)[0], false)).join('');
  app.innerHTML = shell(`<div class="course-home public-course-home">
    <section class="course-welcome"><img src="./assets/hero.png" alt="Онлайн-курс по наращиванию ресниц — с нуля до мастера"><button class="hero-overlay" data-nav="${state.user ? 'cabinet' : 'auth'}" aria-label="${state.user ? 'Перейти в кабинет' : 'Войти в кабинет'}"></button></section>
    <div class="course-heading"><div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Модули курса</h2></div><span>01 — 14</span></div>
    <section class="course-modules">${cards}<article class="course-module module-approved certificate-locked"><div class="course-module-link"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат" loading="lazy"><div class="certificate-lock"><b>🔒</b><span>Откроется после завершения всех уроков</span></div></div></article></section>
    <section class="course-final"><div><small>ФИНАЛ КУРСА</small><h2>Ты справишься.</h2><p>Шаг за шагом ты соберёшь знания, практику и уверенность для самостоятельной работы.</p><button data-nav="${state.user ? 'cabinet' : 'auth'}">${state.user ? 'Перейти к обучению' : 'Начать обучение'} →</button></div><div class="final-brand"><span>⌒</span><b>LASH</b><small>ACADEMY</small></div></section>
  </div>`);
  bindShell();
}

function authErrorText(message = '') {
  if (/invalid login/i.test(message)) return 'Неверный email или пароль.';
  if (/email not confirmed/i.test(message)) return 'Сначала подтвердите email по ссылке из письма.';
  if (/already registered/i.test(message)) return 'Аккаунт с такой почтой уже существует.';
  return message || 'Не удалось выполнить вход.';
}

function renderAuth(mode = 'login') {
  const signup = mode === 'signup';
  app.innerHTML = shell(`<section class="auth-wrap"><div class="card auth-card">
    <div class="eyebrow">Личный кабинет</div><h1 style="font-size:44px;margin-top:8px">${signup ? 'Регистрация' : 'Вход'}</h1>
    ${state.authMessage ? `<div class="notice ${state.authMessage.startsWith('Ошибка:') ? 'error' : 'ok'}" style="margin-top:18px">${escapeHtml(state.authMessage)}</div>` : ''}
    <form id="auth-form">${signup ? '<div class="field"><label for="name">Имя и фамилия</label><input class="input" id="name" autocomplete="name" required></div>' : ''}
      <div class="field"><label for="email">Email</label><input class="input" id="email" type="email" autocomplete="email" required></div>
      <div class="field"><label for="password">Пароль</label><input class="input" id="password" type="password" minlength="8" autocomplete="current-password" required></div>
      <div class="form-actions"><button class="btn btn-primary" id="auth-submit" type="submit">${signup ? 'Зарегистрироваться' : 'Войти'}</button></div>
    </form>
    <div class="actions" style="margin-top:16px"><button class="btn" id="switch-mode">${signup ? 'У меня уже есть аккаунт' : 'Создать аккаунт'}</button></div>
    <p class="muted" style="font-size:13px;margin-top:16px">После регистрации доступ к урокам активируется администратором после подтверждения покупки.</p>
  </div></section>`);
  bindShell();
  document.getElementById('switch-mode').addEventListener('click', () => { state.authMessage = ''; renderAuth(signup ? 'login' : 'signup'); });
  document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault(); const button = document.getElementById('auth-submit'); button.disabled = true; button.textContent = 'Проверяем…';
    const email = document.getElementById('email').value.trim(); const password = document.getElementById('password').value;
    try {
      if (signup) {
        const name = document.getElementById('name').value.trim();
        const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) throw error;
        state.authMessage = 'Проверьте почту и подтвердите регистрацию. После подтверждения вернитесь сюда и войдите.'; renderAuth('login');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password }); if (error) throw error;
        state.user = data.user; state.student = null; state.authMessage = ''; navigate('cabinet');
      }
    } catch (err) { state.authMessage = `Ошибка: ${authErrorText(err?.message)}`; renderAuth(signup ? 'signup' : 'login'); }
  });
}

async function renderCabinet() {
  showLoading('Загружаю личный кабинет…');
  const student = await loadStudent(true);
  if (!student.hasAccess) {
    app.innerHTML = shell(`<section class="section"><div class="card"><div class="eyebrow">Личный кабинет</div><h1 class="dashboard-title" style="margin-top:8px">${student.name ? `Здравствуйте, ${escapeHtml(student.name)}` : 'Добро пожаловать'}</h1><div class="notice" style="margin-top:22px">Доступ к курсу пока не активирован. После подтверждения покупки администратор откроет материалы.</div><div class="actions"><a class="btn" href="mailto:${SUPPORT_EMAIL}">Написать в поддержку</a></div></div></section>`);
    bindShell(); return;
  }
  const p = progressFor(student.completed);
  const modules = state.meta.modules.slice(0, 13);
  const completedModules = modules.filter((m) => { const lessons = studentLessons(m.lessons); return lessons.length && lessons.every((l) => student.completed.has(l.id)); }).length;
  const cards = modules.map((m, i) => moduleCard(m, i, studentLessons(m.lessons)[0], true)).join('');
  const certificateUnlocked = p.total > 0 && p.done === p.total;
  const cert = `<article class="course-module module-approved ${certificateUnlocked ? '' : 'certificate-locked'}">${certificateUnlocked ? `<button class="course-module-link" data-nav="certificate"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат" loading="lazy"></button>` : `<div class="course-module-link"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат" loading="lazy"><div class="certificate-lock"><b>🔒</b><span>Откроется после завершения всех уроков</span></div></div>`}</article>`;
  app.innerHTML = shell(`<div class="course-home">
    <section class="course-welcome"><img src="./assets/hero.png" alt="Онлайн-курс по наращиванию ресниц — с нуля до мастера">${p.next ? `<button class="hero-overlay" data-open-lesson="${escapeHtml(p.next.id)}" aria-label="${p.done ? 'Продолжить обучение' : 'Начать обучение'}"></button>` : ''}</section>
    <section class="course-progress"><div><small>ТВОЙ ПРОГРЕСС</small><strong>${p.percent}<sup>%</sup></strong></div><div class="course-bar"><p>Пройдено <b>${completedModules}</b> из 13 учебных модулей</p><div class="progress-track"><div class="progress-fill" style="width:${p.percent}%"></div></div><span>${p.done === 0 ? 'Всё начинается с первого шага ♡' : p.percent === 100 ? 'Курс пройден — отличный результат ♡' : 'Продолжай — у тебя отлично получается ♡'}</span></div></section>
    <div class="course-heading"><div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Твои модули</h2></div><span>01 — 14</span></div>
    <section class="course-modules">${cards}${cert}</section>
    <section class="course-final"><div><small>ФИНАЛ КУРСА</small><h2>Ты справишься.</h2><p>Шаг за шагом ты соберёшь знания, практику и уверенность для самостоятельной работы.</p>${certificateUnlocked ? '<button data-nav="certificate">Мой результат →</button>' : '<span class="final-locked">Сертификат откроется после завершения курса</span>'}</div><div class="final-brand"><span>⌒</span><b>LASH</b><small>ACADEMY</small></div></section>
  </div>`);
  bindShell();
  document.querySelectorAll('[data-open-lesson]').forEach((el) => el.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.openLesson })));
}

async function toggleLesson(lessonId) {
  if (EMERGENCY_MODE) {
    const student = await loadStudent();
    student.completed.add(lessonId);
    localStorage.setItem(EMERGENCY_PROGRESS_KEY, JSON.stringify([...student.completed]));
    state.student = student;
    return;
  }
  const student = await loadStudent();
  if (student.completed.has(lessonId)) return;
  const { error } = await supabase.from('lesson_progress').insert({ user_id: student.userId, lesson_id: lessonId });
  if (error) throw error;
  await loadStudent(true);
}

async function renderLesson() {
  const id = new URL(location.href).searchParams.get('id');
  if (!id) return navigate('cabinet');
  showLoading('Открываю урок…');
  const student = await loadStudent();
  if (!student.hasAccess) throw new Error('Доступ к урокам не активирован.');
  const module = state.meta.modules.slice(0, 13).find((m) => studentLessons(m.lessons).some((l) => l.id === id));
  if (!module || NON_STUDENT_LESSONS.has(id)) throw new Error('Урок не найден.');
  const lessons = studentLessons(module.lessons);
  const current = lessons.findIndex((l) => l.id === id);
  const lesson = lessons[current];
  const prev = lessons[current - 1]; const next = lessons[current + 1];
  const image = LESSON_IMAGES[id]; const done = student.completed.has(id);
  if (!image) throw new Error('Изображение урока не найдено.');
  app.innerHTML = shell(`<article class="image-lesson-page">
    <div class="image-lesson-toolbar"><button data-nav="cabinet">← <span>К МОДУЛЯМ</span></button><strong>МОДУЛЬ ${module.number} · ${current + 1} / ${lessons.length}</strong></div>
    <img class="lesson-image" src="${image}" alt="Модуль ${module.number}. Урок ${current + 1}. ${escapeHtml(lesson.title)}" loading="eager">
    <div class="image-lesson-nav">${prev ? `<button data-prev="${escapeHtml(prev.id)}">← Предыдущий</button>` : '<span></span>'}${next ? `<button class="next" data-next="${escapeHtml(next.id)}">Следующий урок <b>→</b></button>` : '<button class="next" data-nav="cabinet">Завершить модуль <b>→</b></button>'}</div>
    <button class="lesson-complete ${done ? 'done' : ''}" id="toggle-lesson" ${done ? 'disabled' : ''}>◉ ${done ? 'Урок пройден' : 'Отметить как пройденный'}</button>
  </article>`);
  bindShell();
  document.getElementById('toggle-lesson')?.addEventListener('click', async () => { try { await toggleLesson(id); renderLesson(); } catch (err) { alert(err?.message || 'Не удалось сохранить прогресс.'); } });
  document.querySelector('[data-prev]')?.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.prev }));
  document.querySelector('[data-next]')?.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.next }));
}

async function renderCertificate() {
  showLoading('Проверяю прогресс…');
  const student = await loadStudent(true); if (!student.hasAccess) throw new Error('Доступ к курсу не активирован.');
  const p = progressFor(student.completed);
  if (p.percent < 100) {
    app.innerHTML = shell(`<section class="cert-card card"><div class="cert-icon">🔒</div><h1>Сертификат пока закрыт</h1><p class="lead" style="margin-left:auto;margin-right:auto">Пройдено ${p.done} из ${p.total} уроков — ${p.percent}%. Отметьте все уроки как пройденные.</p><div class="progress-track" style="margin-top:22px"><div class="progress-fill" style="width:${p.percent}%"></div></div><div class="actions" style="justify-content:center"><button class="btn btn-primary" data-nav="cabinet">Продолжить обучение</button></div></section>`);
  } else {
    app.innerHTML = shell(`<section class="cert-card card"><div class="cert-icon">🏅</div><div class="eyebrow">100% курса пройдено</div><h1>Ваш сертификат открыт</h1><p class="lead" style="margin-left:auto;margin-right:auto">Откройте именной сертификат LASH ACADEMY.</p><div class="actions" style="justify-content:center"><a class="btn btn-primary" href="${CERTIFICATE_URL}">Открыть сертификат</a><button class="btn" data-nav="cabinet">Вернуться в кабинет</button></div></section>`);
  }
  bindShell();
}

async function loadAdminData() {
  const [profiles, access, progress, roles] = await Promise.all([
    supabase.from('profiles').select('id,full_name,email,created_at').order('created_at', { ascending: false }),
    supabase.from('course_access').select('user_id,is_active,activated_at,note'),
    supabase.from('lesson_progress').select('user_id,lesson_id'),
    supabase.from('user_roles').select('user_id,role'),
  ]);
  const error = profiles.error || access.error || progress.error || roles.error; if (error) throw new Error(error.message || 'Не удалось загрузить учениц.');
  return { profiles: profiles.data ?? [], access: access.data ?? [], progress: progress.data ?? [], roles: roles.data ?? [] };
}

async function renderAdmin() {
  showLoading('Загружаю список учениц…'); const student = await loadStudent(); if (!student.isAdmin) throw new Error('Нет прав администратора.');
  const data = await loadAdminData(); const admins = new Set(data.roles.filter((r) => r.role === 'admin').map((r) => r.user_id)); const accessMap = new Map(data.access.map((a) => [a.user_id, a]));
  const rows = data.profiles.filter((p) => !admins.has(p.id)).map((profile) => {
    const active = !!accessMap.get(profile.id)?.is_active; const completed = new Set(data.progress.filter((r) => r.user_id === profile.id).map((r) => r.lesson_id)); const p = progressFor(completed);
    return `<div class="student-row"><div><div class="student-name">${escapeHtml(profile.full_name || 'Без имени')}</div><div class="student-email">${escapeHtml(profile.email || '')}</div></div><div class="student-progress">${p.percent}% · ${p.done}/${p.total}</div><button class="btn ${active ? 'btn-danger' : 'btn-primary'}" data-user="${profile.id}" data-active="${active ? '1' : '0'}">${active ? 'Закрыть доступ' : 'Открыть доступ'}</button></div>`;
  }).join('');
  app.innerHTML = shell(`<section><div class="eyebrow">Администратор</div><h1 class="dashboard-title">Ученицы</h1><p class="lead">Доступ и прогресс курса.</p><div class="admin-table">${rows || '<div class="notice">Учениц пока нет.</div>'}</div></section>`);
  bindShell();
  document.querySelectorAll('[data-user]').forEach((button) => button.addEventListener('click', async () => {
    const active = button.dataset.active === '1'; button.disabled = true;
    try { const now = new Date().toISOString(); const { error } = await supabase.from('course_access').upsert({ user_id: button.dataset.user, is_active: !active, activated_at: !active ? now : null, updated_at: now }, { onConflict: 'user_id' }); if (error) throw error; await renderAdmin(); }
    catch (err) { alert(err?.message || 'Не удалось изменить доступ.'); button.disabled = false; }
  }));
}

async function render() {
  try {
    await loadMeta(); const page = pageParam();
    if (EMERGENCY_MODE && !state.user) activateEmergency();
    if (EMERGENCY_MODE && page === 'auth') return navigate('cabinet');
    if (page === 'home') return renderHome();
    if (page === 'auth') return state.user ? navigate('cabinet') : renderAuth('login');
    if (!state.user) return renderAuth('login');
    if (page === 'cabinet') return await renderCabinet();
    if (page === 'lesson') return await renderLesson();
    if (page === 'certificate') return await renderCertificate();
    if (page === 'admin') return await renderAdmin();
    return renderHome();
  } catch (err) { console.error(err); showError(err?.message || 'Произошла ошибка.'); }
}

async function boot() {
  try {
    await loadMeta(); const { data } = await supabase.auth.getSession(); state.user = data.session?.user ?? null;
    supabase.auth.onAuthStateChange((_event, session) => { const oldId = state.user?.id; state.user = session?.user ?? null; if (oldId !== state.user?.id) state.student = null; });
    window.addEventListener('popstate', render); await render();
  } catch (err) { console.error(err); app.innerHTML = `<div class="boot">${escapeHtml(err?.message || 'Не удалось открыть курс.')}</div>`; }
}

boot();
