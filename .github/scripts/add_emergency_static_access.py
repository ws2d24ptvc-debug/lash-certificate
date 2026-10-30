from pathlib import Path

p = Path("course/app.js")
s = p.read_text()

if "EMERGENCY_KEY" not in s:
    needle = "const app = document.getElementById('app');\nconst state = { meta: null, user: null, student: null, authMessage: '' };\n"
    insert = """const app = document.getElementById('app');
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
"""
    if needle not in s:
        raise SystemExit("state target not found")
    s = s.replace(needle, insert, 1)

    old = "  url.search = '';\n"
    new = "  url.search = '';\n  if (EMERGENCY_MODE) url.searchParams.set('open', EMERGENCY_KEY);\n"
    if old not in s:
        raise SystemExit("navigate target not found")
    s = s.replace(old, new, 1)

    old = """  document.querySelector('[data-action=\"logout\"]')?.addEventListener('click', async () => {
    await supabase.auth.signOut(); state.user = null; state.student = null; navigate('home');
  });
"""
    new = """  document.querySelector('[data-action=\"logout\"]')?.addEventListener('click', async () => {
    if (EMERGENCY_MODE) { location.href = './'; return; }
    await supabase.auth.signOut(); state.user = null; state.student = null; navigate('home');
  });
"""
    if old not in s:
        raise SystemExit("logout target not found")
    s = s.replace(old, new, 1)

    old = """async function loadStudent(force = false) {
  if (state.student && !force) return state.student;
"""
    new = """async function loadStudent(force = false) {
  if (EMERGENCY_MODE) { activateEmergency(); return state.student; }
  if (state.student && !force) return state.student;
"""
    if old not in s:
        raise SystemExit("loadStudent target not found")
    s = s.replace(old, new, 1)

    old = """async function toggleLesson(lessonId) {
  const student = await loadStudent();
"""
    new = """async function toggleLesson(lessonId) {
  if (EMERGENCY_MODE) {
    const student = await loadStudent();
    student.completed.add(lessonId);
    localStorage.setItem(EMERGENCY_PROGRESS_KEY, JSON.stringify([...student.completed]));
    state.student = student;
    return;
  }
  const student = await loadStudent();
"""
    if old not in s:
        raise SystemExit("toggleLesson target not found")
    s = s.replace(old, new, 1)

    old = "    await loadMeta(); const page = pageParam();\n"
    new = "    await loadMeta(); const page = pageParam();\n    if (EMERGENCY_MODE && !state.user) activateEmergency();\n    if (EMERGENCY_MODE && page === 'auth') return navigate('cabinet');\n"
    if old not in s:
        raise SystemExit("render target not found")
    s = s.replace(old, new, 1)

    p.write_text(s)

ip = Path("course/index.html")
html = ip.read_text()
html = html.replace("pages-original-20261030", "emergency-static-20261030")
ip.write_text(html)
