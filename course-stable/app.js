const ACCESS_HASH = '4281c9d718148e2bd13210ed51aebe4a8fe462ccdaef4f7a766f39bbda217b73';
const SESSION_KEY = 'lash-stable-session-v1';
const META_URL = '../course/course-meta.json?v=stable-20261030';
const ASSET = '../course/assets/';
const CERTIFICATE_URL = '../certificate-v13.html';
const app = document.getElementById('app');

const NON_STUDENT_LESSONS = new Set(['osnovy-cikl','osnovy-protivopokazaniya','prodvizhenie-start','bezopasnost-sanitariya']);
const MODULE_IMAGES = Array.from({length:14},(_,i)=>`${ASSET}module-${String(i+1).padStart(2,'0')}.png`);
const LESSON_IMAGES = {
  'osnovy-stroenie':'lesson-osnovy-stroenie.png','glaz-anatomiya':'lesson-glaz-anatomiya.png','glaz-stroenie-resnitsy':'lesson-glaz-stroenie-resnitsy.png','glaz-fazy-rosta':'lesson-glaz-fazy-rosta.png','glaz-napravlenie':'lesson-glaz-napravlenie.png','glaz-ocenka':'lesson-glaz-ocenka.png','materialy-pincety':'lesson-materialy-pincety.png','materialy-resnitsy':'lesson-materialy-resnitsy.png','materialy-izolyaciya':'lesson-materialy-izolyaciya.png','materialy-podgotovka':'lesson-materialy-podgotovka.png','materialy-kley':'lesson-materialy-kley.png','bezopasnost-pincety':'lesson-bezopasnost-pincety.png','podgotovka-protivopokazaniya':'lesson-podgotovka-protivopokazaniya.png','podgotovka-izolyaciya':'lesson-podgotovka-izolyaciya.png','podgotovka-materialy':'lesson-podgotovka-materialy.png','ruka-postanovka':'lesson-ruka-postanovka.png','klassika-tehnika':'lesson-klassika-tehnika.png','modelirovanie-shema':'lesson-modelirovanie-shema.png','modelirovanie-opushennyi':'lesson-modelirovanie-opushennyi.png','modelirovanie-lisiy':'lesson-modelirovanie-lisiy.png','modelirovanie-naturalnyi':'lesson-modelirovanie-naturalnyi.png','modelirovanie-kukolnyi':'lesson-modelirovanie-kukolnyi.jpg','modelirovanie-belichiy':'lesson-modelirovanie-belichiy.png','modelirovanie-kim':'lesson-modelirovanie-kim.png','modelirovanie-mokryi':'lesson-modelirovanie-mokryi.png','oshibki-tipichnye':'lesson-oshibki-tipichnye.png','oshibki-snyatie':'lesson-oshibki-snyatie.png','obemy-puchki':'lesson-obemy-puchki.png','effekty-bazovye':'lesson-effekty-bazovye.png','sovremennye-mokryi':'lesson-sovremennye-mokryi.png','sovremennye-kim':'lesson-sovremennye-kim.png','klient-konsultaciya':'lesson-klient-konsultaciya.png'
};

let meta = null;
let authError = '';

const esc = (v='') => String(v).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;');
const page = () => new URL(location.href).searchParams.get('page') || 'home';
const session = () => { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } };
const progressKey = () => `lash-stable-progress:${session()?.email || 'guest'}`;
const completedSet = () => { try { const x=JSON.parse(localStorage.getItem(progressKey())||'[]'); return new Set(Array.isArray(x)?x:[]); } catch { return new Set(); } };
const saveCompleted = (s) => localStorage.setItem(progressKey(), JSON.stringify([...s]));
const visibleLessons = (ls=[]) => ls.filter(l=>!NON_STUDENT_LESSONS.has(l.id));
const allLessons = () => (meta?.modules||[]).slice(0,13).flatMap(m=>visibleLessons(m.lessons));
const progress = () => { const ls=allLessons(), c=completedSet(), done=ls.filter(l=>c.has(l.id)).length; return {completed:c,done,total:ls.length,percent:ls.length?Math.round(done/ls.length*100):0,next:ls.find(l=>!c.has(l.id))||null}; };

function go(p, extra={}) {
  const u=new URL(location.href); u.search=''; if(p&&p!=='home')u.searchParams.set('page',p); for(const[k,v]of Object.entries(extra)) if(v!=null&&v!=='')u.searchParams.set(k,v); history.pushState({},'',u); render();
}

function publicShell(content){
  return `<div class="shell"><header class="topbar"><div class="topbar-inner"><a class="brand" href="./" data-nav="home">Наращивание ресниц с нуля<small>Вера Лушина · LASH ACADEMY</small></a><nav class="nav"><button class="optional" data-nav="home">О курсе</button><button data-nav="auth">Войти</button></nav></div></header><main>${content}</main><footer class="footer">Авторский обучающий курс-пособие · Вера Лушина</footer></div>`;
}
function academyShell(content){
  const s=session(); const label=s?.email||'Ученица';
  return `<div class="academy-shell"><header class="academy-topbar"><nav class="academy-top-nav"><button data-nav="cabinet" class="${['cabinet','lesson'].includes(page())?'active':''}">Обучение</button><button data-nav="certificate" class="${page()==='certificate'?'active':''}">Сертификат</button></nav><div class="academy-user"><span>${esc(label)}</span><button id="logout" aria-label="Выйти">↪</button></div></header><main class="academy-content">${content}</main></div>`;
}
function bind(){
  document.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();go(el.dataset.nav)}));
  document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',e=>go('lesson',{id:e.currentTarget.dataset.open})));
  document.getElementById('logout')?.addEventListener('click',()=>{localStorage.removeItem(SESSION_KEY);go('home')});
}

function moduleCard(m,i,clickable){ const first=visibleLessons(m.lessons)[0]; const body=`<img src="${MODULE_IMAGES[i]}" alt="Модуль ${m.number} — ${esc(m.title)}" loading="${i<4?'eager':'lazy'}">`; return `<article class="course-module module-approved">${clickable&&first?`<button class="course-module-link" data-open="${esc(first.id)}">${body}</button>`:`<div class="course-module-link">${body}</div>`}</article>`; }

function renderHome(){
  const cards=meta.modules.slice(0,13).map((m,i)=>moduleCard(m,i,false)).join('');
  app.innerHTML=publicShell(`<div class="course-home public-course-home"><section class="course-welcome"><img src="${ASSET}hero.png" alt="Онлайн-курс по наращиванию ресниц — с нуля до мастера"><button class="hero-overlay" data-nav="auth" aria-label="Войти"></button></section><div class="course-heading"><div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Модули курса</h2></div><span>01 — 14</span></div><section class="course-modules">${cards}<article class="course-module module-approved certificate-locked"><div class="course-module-link"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат"><div class="certificate-lock"><b>🔒</b><span>После завершения курса</span></div></div></article></section><section class="course-final"><div><small>ФИНАЛ КУРСА</small><h2>Ты справишься.</h2><p>Шаг за шагом ты соберёшь знания, практику и уверенность для самостоятельной работы.</p><button data-nav="auth">Войти в обучение →</button></div><div class="final-brand"><span>⌒</span><b>LASH</b><small>ACADEMY</small></div></section></div>`); bind();
}

async function sha256(text){ const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(text)); return [...new Uint8Array(buf)].map(b=>b.toString(16).padStart(2,'0')).join(''); }
function renderAuth(){
  if(session()) return go('cabinet');
  app.innerHTML=publicShell(`<section class="auth-wrap"><div class="card auth-card"><div class="eyebrow">Личный кабинет</div><h1 style="font-size:44px;margin-top:8px">Вход</h1><p class="muted">Введите email и пароль курса.</p>${authError?`<div class="notice error" style="margin-top:16px">${esc(authError)}</div>`:''}<form id="auth-form"><div class="field"><label>Email</label><input class="input" id="email" type="email" autocomplete="email" required></div><div class="field"><label>Пароль</label><input class="input" id="password" type="password" autocomplete="current-password" required></div><div class="form-actions"><button class="btn btn-primary" id="submit" type="submit">Войти</button></div></form></div></section>`); bind();
  document.getElementById('auth-form').addEventListener('submit',async e=>{e.preventDefault(); const btn=document.getElementById('submit');btn.disabled=true;btn.textContent='Проверяем…'; const email=document.getElementById('email').value.trim().toLowerCase(); const pass=document.getElementById('password').value; try{ const h=await sha256(pass); if(h!==ACCESS_HASH) throw new Error('Неверный пароль.'); localStorage.setItem(SESSION_KEY,JSON.stringify({email,loggedAt:Date.now()})); authError=''; go('cabinet'); }catch(err){authError=err.message||'Не удалось войти.';renderAuth();}});
}

function renderCabinet(){
  const p=progress(), modules=meta.modules.slice(0,13), completedModules=modules.filter(m=>{const ls=visibleLessons(m.lessons);return ls.length&&ls.every(l=>p.completed.has(l.id));}).length;
  const cards=modules.map((m,i)=>moduleCard(m,i,true)).join(''); const unlocked=p.total>0&&p.done===p.total;
  const cert=`<article class="course-module module-approved ${unlocked?'':'certificate-locked'}">${unlocked?`<button class="course-module-link" data-nav="certificate"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат"></button>`:`<div class="course-module-link"><img src="${MODULE_IMAGES[13]}" alt="Модуль 14 — Сертификат"><div class="certificate-lock"><b>🔒</b><span>Откроется после завершения всех уроков</span></div></div>`}</article>`;
  app.innerHTML=academyShell(`<div class="course-home"><section class="course-welcome"><img src="${ASSET}hero.png" alt="Онлайн-курс по наращиванию ресниц">${p.next?`<button class="hero-overlay" data-open="${esc(p.next.id)}" aria-label="Продолжить обучение"></button>`:''}</section><section class="course-progress"><div><small>ТВОЙ ПРОГРЕСС</small><strong>${p.percent}<sup>%</sup></strong></div><div class="course-bar"><p>Пройдено <b>${completedModules}</b> из 13 учебных модулей</p><div class="progress-track"><div class="progress-fill" style="width:${p.percent}%"></div></div><span>${p.done===0?'Всё начинается с первого шага ♡':p.percent===100?'Курс пройден — отличный результат ♡':'Продолжай — у тебя отлично получается ♡'}</span></div></section><div class="course-heading"><div><small>ПРОГРАММА ОБУЧЕНИЯ</small><h2>Твои модули</h2></div><span>01 — 14</span></div><section class="course-modules">${cards}${cert}</section></div>`); bind();
}

function renderLesson(){
  const id=new URL(location.href).searchParams.get('id'); if(!id)return go('cabinet'); const mod=meta.modules.slice(0,13).find(m=>visibleLessons(m.lessons).some(l=>l.id===id)); if(!mod){app.innerHTML=academyShell('<div class="notice error">Урок не найден.</div>');bind();return;} const ls=visibleLessons(mod.lessons), idx=ls.findIndex(l=>l.id===id), lesson=ls[idx], prev=ls[idx-1], next=ls[idx+1], done=completedSet().has(id), img=LESSON_IMAGES[id]?`${ASSET}${LESSON_IMAGES[id]}`:null; if(!img){app.innerHTML=academyShell('<div class="notice error">Изображение урока не найдено.</div>');bind();return;}
  app.innerHTML=academyShell(`<article class="image-lesson-page"><div class="image-lesson-toolbar"><button data-nav="cabinet">← <span>К МОДУЛЯМ</span></button><strong>МОДУЛЬ ${mod.number} · ${idx+1} / ${ls.length}</strong></div><img class="lesson-image" src="${img}" alt="${esc(lesson.title)}" loading="eager"><div class="image-lesson-nav">${prev?`<button data-open="${esc(prev.id)}">← Предыдущий</button>`:'<span></span>'}${next?`<button class="next" data-open="${esc(next.id)}">Следующий урок <b>→</b></button>`:'<button class="next" data-nav="cabinet">Завершить модуль <b>→</b></button>'}</div><button class="lesson-complete ${done?'done':''}" id="complete" ${done?'disabled':''}>◉ ${done?'Урок пройден':'Отметить как пройденный'}</button></article>`); bind(); document.getElementById('complete')?.addEventListener('click',()=>{const c=completedSet();c.add(id);saveCompleted(c);renderLesson();});
}

function renderCertificate(){ const p=progress(); app.innerHTML=academyShell(`<section class="cert-card card">${p.percent<100?`<div class="cert-icon">🔒</div><h1>Сертификат пока закрыт</h1><p class="lead" style="margin-left:auto;margin-right:auto">Пройдено ${p.done} из ${p.total} уроков — ${p.percent}%.</p><div class="actions" style="justify-content:center"><button class="btn btn-primary" data-nav="cabinet">Продолжить обучение</button></div>`:`<div class="cert-icon">🏅</div><div class="eyebrow">100% курса пройдено</div><h1>Сертификат открыт</h1><div class="actions" style="justify-content:center"><a class="btn btn-primary" href="${CERTIFICATE_URL}">Открыть сертификат</a><button class="btn" data-nav="cabinet">Вернуться в кабинет</button></div>`}</section>`); bind(); }

async function render(){ try{ if(!meta){const r=await fetch(META_URL,{cache:'no-store'});if(!r.ok)throw new Error('Не удалось загрузить программу курса.');meta=await r.json();} const p=page(); if(p==='home')return renderHome(); if(p==='auth')return renderAuth(); if(!session())return renderAuth(); if(p==='cabinet')return renderCabinet(); if(p==='lesson')return renderLesson(); if(p==='certificate')return renderCertificate(); return renderHome(); }catch(err){app.innerHTML=`<div class="boot">${esc(err?.message||'Не удалось открыть курс.')}</div>`;} }
window.addEventListener('popstate',render); render();
