import { component as AuthComponent } from './auth-DlScQRai.js';
import { t as supabase } from './client-OS6V9nLy.js';

const ADMIN_URL = '/lash-certificate/course-live/admin/';
let checking = false;
let redirected = false;

async function redirectAdmin(session) {
  if (checking || redirected || !session?.user?.id) return false;
  checking = true;
  try {
    const { data: roles, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id);
    if (error) throw error;
    const isAdmin = (roles || []).some((row) => row.role === 'admin');
    if (isAdmin) {
      redirected = true;
      window.location.replace(ADMIN_URL);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Admin role check failed', error);
    return false;
  } finally {
    checking = false;
  }
}

supabase.auth.getSession().then(({ data }) => redirectAdmin(data?.session));

supabase.auth.onAuthStateChange((_event, session) => {
  if (session?.user?.id) {
    queueMicrotask(() => redirectAdmin(session));
  }
});

export { AuthComponent as component };
