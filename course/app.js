import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.118.0/+esm';

const SUPABASE_URL = 'https://c--eb1598e0-facf-4633-be7b-c7b847af05a2-prod.lovable.cloud';
const SUPABASE_KEY = 'sb_publishable_3jTxl7e4GIEbzQgPoUiNzw_OIkOax6w';
const CERTIFICATE_URL = 'https://ws2d24ptvc-debug.github.io/lash-certificate/certificate-v13.html';
const SUPPORT_EMAIL = 'lashcourse.support@gmail.com';

const app = document.getElementById('app');
const state = {
  meta: null,
  protectedContent: null,
  user: null,
  student: null,
  authMessage: '',
};

function cloudFetch(input, init = {}) {
  const headers = new Headers(
    typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
  );
  if (init.headers) new Headers(init.headers).forEach((v, k) => headers.set(k, v));
  if (headers.get('Authorization') === `Bearer ${SUPABASE_KEY}`) headers.delete('Authorization');
  headers.set('apikey', SUPABASE_KEY);
  return fetch(input, { ...init, headers, signal: init.signal ?? AbortSignal.timeout(12000) });
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  global: { fetch: cloudFetch },
  auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
});

const escapeHtml = (value = '') => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

function pageParam() {
  return new URL(location.href).searchParams.get('page') || 'home';
}

function navigate(page, params = {}) {
  const url = new URL(location.href);
  url.search = '';
  if (page && page !== 'home') url.searchParams.set('page', page);
  for (const [key, value] of Object.entries(params)) {
    if (value != null && value !== '') url.searchParams.set(key, value);
  }
  history.pushState({}, '', url);
  render();
}

const NON_STUDENT_LESSONS = new Set(['osnovy-cikl', 'osnovy-protivopokazaniya', 'prodvizhenie-start', 'bezopasnost-sanitariya']);

function studentLessons(lessons = []) {
  return lessons.filter((l) => !NON_STUDENT_LESSONS.has(l.id));
}

function allLessons() {
  return (state.meta?.modules ?? []).flatMap((m) => studentLessons(m.lessons));
}

function progressFor(completed = new Set(), lessons = allLessons()) {
  const valid = lessons.filter((l) => completed.has(l.id));
  const done = valid.length;
  const total = lessons.length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const next = lessons.find((l) => !completed.has(l.id)) ?? null;
  return { done, total, percent, next };
}

function shell(content) {
  const user = state.user;
  const admin = state.student?.isAdmin;
  return `
    <div class="shell">
      <header class="topbar">
        <div class="topbar-inner">
          <a class="brand" href="./" data-nav="home">Наращивание ресниц с нуля<small>Вера Лушина · LASH ACADEMY</small></a>
          <nav class="nav">
            <button class="optional" data-nav="home">О курсе</button>
            ${user ? `<button data-nav="cabinet">Кабинет</button>${admin ? '<button data-nav="admin">Ученицы</button>' : ''}<button data-action="logout">Выйти</button>` : '<button data-nav="auth">Войти</button>'}
          </nav>
        </div>
      </header>
      <main>${content}</main>
      <footer class="footer">Авторский обучающий курс-пособие · Вера Лушина<br>${escapeHtml(SUPPORT_EMAIL)}</footer>
    </div>`;
}

function bindShell() {
  document.querySelectorAll('[data-nav]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      navigate(el.dataset.nav);
    });
  });
  document.querySelector('[data-action="logout"]')?.addEventListener('click', async () => {
    await supabase.auth.signOut();
    state.user = null;
    state.student = null;
    state.protectedContent = null;
    navigate('home');
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
  const response = await fetch(`./course-meta.json?v=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Не удалось загрузить программу курса.');
  state.meta = await response.json();
  return state.meta;
}

async function loadStudent(force = false) {
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
  state.student = {
    userId: uid,
    email: userData.user.email ?? '',
    name: profile.data?.full_name ?? '',
    isAdmin,
    hasAccess: isAdmin || !!access.data?.is_active,
    completed: new Set((progress.data ?? []).map((p) => p.lesson_id)),
  };
  return state.student;
}

function b64urlToBytes(value) {
  let s = value.replaceAll('-', '+').replaceAll('_', '/');
  while (s.length % 4) s += '=';
  const binary = atob(s);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function loadProtectedContent() {
  if (state.protectedContent) return state.protectedContent;
  const student = await loadStudent();
  if (!student.hasAccess) throw new Error('Доступ к урокам ещё не активирован.');
  const { data: keyRow, error: keyError } = await supabase
    .from('course_content_keys')
    .select('key_b64')
    .eq('key_name', 'v1')
    .maybeSingle();
  if (keyError || !keyRow?.key_b64) throw new Error('Не удалось получить доступ к материалам курса.');
  const response = await fetch(`./content.enc.json?v=${Date.now()}`, { cache: 'no-store' });
  if (!response.ok) throw new Error('Материалы курса ещё обновляются.');
  const encrypted = await response.json();
  const key = await crypto.subtle.importKey('raw', b64urlToBytes(keyRow.key_b64), { name: 'AES-GCM' }, false, ['decrypt']);
  const plain = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: b64urlToBytes(encrypted.iv) },
    key,
    b64urlToBytes(encrypted.data),
  );
  state.protectedContent = JSON.parse(new TextDecoder().decode(plain));
  return state.protectedContent;
}

function renderHome() {
  const modules = state.meta.modules;
  const cards = modules.map((m) => `
    <div class="module-card card">
      <div class="module-number">Модуль ${m.number}</div>
      <h3>${escapeHtml(m.title)}</h3>
      <p>${escapeHtml(m.description)}</p>
    </div>`).join('');
  app.innerHTML = shell(`
    <section class="hero">
      <div class="eyebrow">Авторский обучающий курс-пособие</div>
      <h1>Наращивание ресниц <span class="accent">с нуля</span></h1>
      <p class="lead">От основ профессии и безопасности до современных эффектов, работы с клиентами и развития мастера. Учитесь в своём темпе и отмечайте каждый пройденный урок.</p>
      <div class="actions">
        <button class="btn btn-primary" data-nav="${state.user ? 'cabinet' : 'auth'}">${state.user ? 'Перейти в кабинет' : 'Войти в кабинет'}</button>
        <a class="btn" href="#program">Посмотреть программу</a>
      </div>
    </section>
    <section class="section" id="program">
      <div class="eyebrow">Программа курса</div>
      <h2 class="section-title">${modules.length} модулей · ${allLessons().length} уроков</h2>
      <div class="grid">${cards}</div>
    </section>`);
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
  app.innerHTML = shell(`
    <section class="auth-wrap">
      <div class="card auth-card">
        <div class="eyebrow">Личный кабинет</div>
        <h1 style="font-size:44px;margin-top:8px">${signup ? 'Регистрация' : 'Вход'}</h1>
        ${state.authMessage ? `<div class="notice ${state.authMessage.startsWith('Ошибка:') ? 'error' : 'ok'}" style="margin-top:18px">${escapeHtml(state.authMessage)}</div>` : ''}
        <form id="auth-form">
          ${signup ? '<div class="field"><label for="name">Имя и фамилия</label><input class="input" id="name" autocomplete="name" required></div>' : ''}
          <div class="field"><label for="email">Email</label><input class="input" id="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="password">Пароль</label><input class="input" id="password" type="password" minlength="8" autocomplete="current-password" required></div>
          <div class="form-actions"><button class="btn btn-primary" id="auth-submit" type="submit">${signup ? 'Зарегистрироваться' : 'Войти'}</button></div>
        </form>
        <div class="actions" style="margin-top:16px"><button class="btn" id="switch-mode">${signup ? 'У меня уже есть аккаунт' : 'Создать аккаунт'}</button></div>
        <p class="muted" style="font-size:13px;margin-top:16px">После регистрации доступ к урокам активируется администратором после подтверждения покупки.</p>
      </div>
    </section>`);
  bindShell();
  document.getElementById('switch-mode').addEventListener('click', () => {
    state.authMessage = '';
    renderAuth(signup ? 'login' : 'signup');
  });
  document.getElementById('auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const button = document.getElementById('auth-submit');
    button.disabled = true;
    button.textContent = 'Проверяем…';
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    try {
      if (signup) {
        const name = document.getElementById('name').value.trim();
        const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
        if (error) throw error;
        state.authMessage = 'Проверьте почту и подтвердите регистрацию. После подтверждения вернитесь сюда и войдите.';
        renderAuth('login');
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        state.user = data.user;
        state.student = null;
        state.authMessage = '';
        navigate('cabinet');
      }
    } catch (err) {
      state.authMessage = `Ошибка: ${authErrorText(err?.message)}`;
      renderAuth(signup ? 'signup' : 'login');
    }
  });
}

async function renderCabinet() {
  showLoading('Загружаю личный кабинет…');
  const student = await loadStudent(true);
  if (!student.hasAccess) {
    app.innerHTML = shell(`
      <section class="section"><div class="card">
        <div class="eyebrow">Личный кабинет</div><h1 class="dashboard-title" style="margin-top:8px">${student.name ? `Здравствуйте, ${escapeHtml(student.name)}` : 'Добро пожаловать'}</h1>
        <div class="notice" style="margin-top:22px">Доступ к курсу пока не активирован. После подтверждения покупки администратор откроет материалы.</div>
        <div class="actions"><a class="btn" href="mailto:${SUPPORT_EMAIL}">Написать в поддержку</a></div>
      </div></section>`);
    bindShell();
    return;
  }
  const p = progressFor(student.completed);
  const moduleHtml = state.meta.modules.map((m) => {
    const visibleLessons = studentLessons(m.lessons);
    if (!visibleLessons.length) return '';
    const mp = progressFor(student.completed, visibleLessons);
    const lessons = visibleLessons.map((l) => {
      const done = student.completed.has(l.id);
      return `<a href="?page=lesson&id=${encodeURIComponent(l.id)}" class="lesson-card" data-lesson="${escapeHtml(l.id)}">
        <span class="status ${done ? 'done' : ''}">${done ? '✓ Пройдено' : '○ Не пройдено'}</span>
        <h3>${escapeHtml(l.title)}</h3><p class="muted">${escapeHtml(l.summary)}</p>
      </a>`;
    }).join('');
    return `<section class="module"><div class="module-head"><h2><span style="color:var(--gold);margin-right:8px">${m.number}</span>${escapeHtml(m.title)}</h2><span class="muted">${mp.done}/${mp.total}</span></div><div class="lesson-list">${lessons}</div></section>`;
  }).join('');
  app.innerHTML = shell(`
    <section class="dashboard-head">
      <div><div class="eyebrow">Личный кабинет</div><h1 class="dashboard-title">${student.name ? `Здравствуйте, ${escapeHtml(student.name)}` : 'Добро пожаловать'}</h1></div>
      <div><div class="progress-row"><span class="muted">Пройдено ${p.done} из ${p.total} уроков</span><span class="progress-percent">${p.percent}%</span></div><div class="progress-track"><div class="progress-fill" style="width:${p.percent}%"></div></div></div>
      <div class="actions">
        ${p.next ? `<button class="btn btn-primary" data-open-lesson="${escapeHtml(p.next.id)}">${p.done ? 'Продолжить обучение' : 'Начать обучение'}</button>` : `<button class="btn btn-primary" data-nav="certificate">Открыть сертификат</button>`}
        ${student.isAdmin ? '<button class="btn" data-nav="admin">Управление ученицами</button>' : ''}
      </div>
      ${p.percent === 100 ? '<div class="notice ok">Все уроки пройдены — сертификат открыт 🎉</div>' : ''}
    </section>
    ${moduleHtml}`);
  bindShell();
  document.querySelectorAll('[data-lesson]').forEach((el) => el.addEventListener('click', (e) => { e.preventDefault(); navigate('lesson', { id: el.dataset.lesson }); }));
  document.querySelector('[data-open-lesson]')?.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.openLesson }));
}

function renderBlock(block, protectedContent) {
  if (!block) return '';
  if (block.type === 'heading') return `<div class="lesson-block"><h2>${escapeHtml(block.text)}</h2></div>`;
  if (block.type === 'text') return `<div class="lesson-block"><p>${escapeHtml(block.text)}</p></div>`;
  if (block.type === 'list') return `<div class="lesson-block">${block.title ? `<h3>${escapeHtml(block.title)}</h3>` : ''}<ul>${(block.items ?? []).map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ul></div>`;
  if (block.type === 'steps') return `<div class="lesson-block">${block.title ? `<h3>${escapeHtml(block.title)}</h3>` : ''}<ol>${(block.items ?? []).map((x) => `<li>${escapeHtml(x)}</li>`).join('')}</ol></div>`;
  if (block.type === 'note') return `<div class="lesson-block lesson-note ${block.tone === 'warning' ? 'warning' : ''}">${block.title ? `<h3>${escapeHtml(block.title)}</h3>` : ''}<p>${escapeHtml(block.text)}</p></div>`;
  if (block.type === 'volumes') return `<div class="lesson-block"><h3>Схемы объёмов</h3><div class="volume-grid">${(protectedContent.volumeSchemes ?? []).map((v) => `<div class="volume-card"><strong>${escapeHtml(v.volume)}</strong><div class="muted" style="margin-top:7px">${escapeHtml(v.formula)}</div></div>`).join('')}</div></div>`;
  if (block.type === 'image') return `<div class="lesson-block">${block.src ? `<img src="${escapeHtml(block.src)}" alt="" style="max-width:100%;border-radius:12px">` : ''}<p class="muted">${escapeHtml(block.caption)}</p></div>`;
  if (block.type === 'video') return `<div class="lesson-block"><a class="btn" href="${escapeHtml(block.url)}" target="_blank" rel="noopener">Открыть видео</a>${block.caption ? `<p class="muted">${escapeHtml(block.caption)}</p>` : ''}</div>`;
  return '';
}

async function toggleLesson(lessonId) {
  const student = await loadStudent();
  const done = student.completed.has(lessonId);
  if (done) {
    const { error } = await supabase.from('lesson_progress').delete().eq('user_id', student.userId).eq('lesson_id', lessonId);
    if (error) throw error;
  } else {
    const { error } = await supabase.from('lesson_progress').insert({ user_id: student.userId, lesson_id: lessonId });
    if (error) throw error;
  }
  await loadStudent(true);
}

async function renderLesson() {
  const id = new URL(location.href).searchParams.get('id');
  if (!id) return navigate('cabinet');
  showLoading('Открываю урок…');
  const student = await loadStudent();
  if (!student.hasAccess) throw new Error('Доступ к урокам не активирован.');
  const protectedContent = await loadProtectedContent();
  const lessons = allLessons();
  const index = lessons.findIndex((l) => l.id === id);
  const lesson = lessons[index];
  if (!lesson || NON_STUDENT_LESSONS.has(id)) throw new Error('Урок не найден.');
  const blocks = protectedContent.lessonContent?.[id] ?? [];
  const done = student.completed.has(id);
  app.innerHTML = shell(`
    <article class="lesson-page">
      <div class="eyebrow">Урок ${index + 1} из ${lessons.length}</div>
      <h1>${escapeHtml(lesson.title)}</h1>
      <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
      <div class="actions" style="margin-bottom:24px"><button class="btn ${done ? '' : 'btn-primary'}" id="toggle-lesson">${done ? '✓ Урок пройден — отменить отметку' : 'Отметить урок пройденным'}</button><button class="btn" data-nav="cabinet">Все уроки</button></div>
      <div class="lesson-content">${blocks.length ? blocks.map((b) => renderBlock(b, protectedContent)).join('') : '<div class="notice">Материал этого урока готовится.</div>'}</div>
      <div class="lesson-footer">
        ${lessons[index - 1] ? `<button class="btn" data-prev="${escapeHtml(lessons[index - 1].id)}">← Предыдущий</button>` : '<span></span>'}
        ${lessons[index + 1] ? `<button class="btn btn-primary" data-next="${escapeHtml(lessons[index + 1].id)}">Следующий →</button>` : '<button class="btn btn-primary" data-nav="certificate">К сертификату</button>'}
      </div>
    </article>`);
  bindShell();
  document.getElementById('toggle-lesson').addEventListener('click', async () => {
    try { await toggleLesson(id); renderLesson(); } catch (err) { alert(err?.message || 'Не удалось сохранить прогресс.'); }
  });
  document.querySelector('[data-prev]')?.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.prev }));
  document.querySelector('[data-next]')?.addEventListener('click', (e) => navigate('lesson', { id: e.currentTarget.dataset.next }));
}

async function renderCertificate() {
  showLoading('Проверяю прогресс…');
  const student = await loadStudent(true);
  if (!student.hasAccess) throw new Error('Доступ к курсу не активирован.');
  const p = progressFor(student.completed);
  if (p.percent < 100) {
    app.innerHTML = shell(`<section class="cert-card card"><div class="cert-icon">🔒</div><h1>Сертификат пока закрыт</h1><p class="lead" style="margin-left:auto;margin-right:auto">Пройдено ${p.done} из ${p.total} уроков — ${p.percent}%. Отметьте все уроки как пройденные.</p><div class="progress-track" style="margin-top:22px"><div class="progress-fill" style="width:${p.percent}%"></div></div><div class="actions" style="justify-content:center"><button class="btn btn-primary" data-nav="cabinet">Продолжить обучение</button></div></section>`);
  } else {
    app.innerHTML = shell(`<section class="cert-card card"><div class="cert-icon">🏅</div><div class="eyebrow">100% курса пройдено</div><h1>Ваш сертификат открыт</h1><p class="lead" style="margin-left:auto;margin-right:auto">Введите имя и фамилию на сертификате и сохраните его на телефон.</p><div class="actions" style="justify-content:center"><a class="btn btn-primary" href="${CERTIFICATE_URL}">Открыть сертификат</a><button class="btn" data-nav="cabinet">Вернуться в кабинет</button></div></section>`);
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
  const error = profiles.error || access.error || progress.error || roles.error;
  if (error) throw new Error(error.message || 'Не удалось загрузить учениц.');
  return { profiles: profiles.data ?? [], access: access.data ?? [], progress: progress.data ?? [], roles: roles.data ?? [] };
}

async function renderAdmin() {
  showLoading('Загружаю список учениц…');
  const student = await loadStudent();
  if (!student.isAdmin) throw new Error('Нет прав администратора.');
  const data = await loadAdminData();
  const admins = new Set(data.roles.filter((r) => r.role === 'admin').map((r) => r.user_id));
  const accessMap = new Map(data.access.map((a) => [a.user_id, a]));
  const rows = data.profiles.filter((p) => !admins.has(p.id)).map((profile) => {
    const active = !!accessMap.get(profile.id)?.is_active;
    const completed = new Set(data.progress.filter((r) => r.user_id === profile.id).map((r) => r.lesson_id));
    const p = progressFor(completed);
    return `<div class="student-row"><div><div class="student-name">${escapeHtml(profile.full_name || 'Без имени')}</div><div class="student-email">${escapeHtml(profile.email || '')}</div></div><div class="student-progress">${p.percent}% · ${p.done}/${p.total}</div><button class="btn ${active ? 'btn-danger' : 'btn-primary'}" data-user="${profile.id}" data-active="${active ? '1' : '0'}">${active ? 'Закрыть доступ' : 'Открыть доступ'}</button></div>`;
  }).join('');
  app.innerHTML = shell(`<section><div class="eyebrow">Администратор</div><h1 class="dashboard-title">Ученицы</h1><p class="lead">Доступ и прогресс курса.</p><div class="admin-table">${rows || '<div class="notice">Учениц пока нет.</div>'}</div></section>`);
  bindShell();
  document.querySelectorAll('[data-user]').forEach((button) => button.addEventListener('click', async () => {
    const active = button.dataset.active === '1';
    button.disabled = true;
    try {
      const now = new Date().toISOString();
      const { error } = await supabase.from('course_access').upsert({ user_id: button.dataset.user, is_active: !active, activated_at: !active ? now : null, updated_at: now }, { onConflict: 'user_id' });
      if (error) throw error;
      await renderAdmin();
    } catch (err) {
      alert(err?.message || 'Не удалось изменить доступ.');
      button.disabled = false;
    }
  }));
}

async function render() {
  try {
    await loadMeta();
    const page = pageParam();
    if (page === 'home') return renderHome();
    if (page === 'auth') return state.user ? navigate('cabinet') : renderAuth('login');
    if (!state.user) return renderAuth('login');
    if (page === 'cabinet') return await renderCabinet();
    if (page === 'lesson') return await renderLesson();
    if (page === 'certificate') return await renderCertificate();
    if (page === 'admin') return await renderAdmin();
    return renderHome();
  } catch (err) {
    console.error(err);
    showError(err?.message || 'Произошла ошибка.');
  }
}

async function boot() {
  try {
    await loadMeta();
    const { data } = await supabase.auth.getSession();
    state.user = data.session?.user ?? null;
    supabase.auth.onAuthStateChange((_event, session) => {
      const oldId = state.user?.id;
      state.user = session?.user ?? null;
      if (oldId !== state.user?.id) {
        state.student = null;
        state.protectedContent = null;
      }
    });
    window.addEventListener('popstate', render);
    await render();
  } catch (err) {
    console.error(err);
    app.innerHTML = `<div class="boot">${escapeHtml(err?.message || 'Не удалось запустить курс.')}</div>`;
  }
}

boot();
