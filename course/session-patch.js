(() => {
  const SESSION_KEY = 'lash-course-local-session-v1';
  const AUTH_URL = '/lash-certificate/course-live/auth/';

  let session = null;
  try {
    session = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
  } catch {}

  if (!session || !session.email) {
    location.replace(AUTH_URL);
    return;
  }

  const applyHeader = () => {
    const user = document.querySelector('.academy-user');
    if (!user) return;
    if (user.dataset.localSessionApplied === '1') return;
    user.dataset.localSessionApplied = '1';
    user.textContent = '';

    const email = document.createElement('span');
    email.textContent = session.email;
    email.style.maxWidth = '220px';
    email.style.overflow = 'hidden';
    email.style.textOverflow = 'ellipsis';
    email.style.whiteSpace = 'nowrap';

    const logout = document.createElement('button');
    logout.type = 'button';
    logout.className = 'academy-logout';
    logout.setAttribute('aria-label', 'Выйти');
    logout.textContent = '↪';
    logout.addEventListener('click', () => {
      localStorage.removeItem(SESSION_KEY);
      location.href = AUTH_URL;
    });

    user.append(email, logout);
  };

  applyHeader();
  new MutationObserver(applyHeader).observe(document.documentElement, { childList: true, subtree: true });
})();