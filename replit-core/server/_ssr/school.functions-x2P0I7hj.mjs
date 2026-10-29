import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-ChNsXfvL.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-D9rUQuav.mjs";
import { n as objectType, r as stringType, t as booleanType } from "../_libs/zod.mjs";
import { t as ALL_LESSONS } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/school.functions-x2P0I7hj.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
function computeProgress(lessons, completed) {
	const total = lessons.length;
	const done = lessons.filter((l) => completed.has(l.id)).length;
	return {
		total,
		done,
		percent: total === 0 ? 0 : Math.round(done / total * 100),
		next: lessons.find((l) => !completed.has(l.id)) ?? null
	};
}
function assertAdministrator(isAdmin) {
	if (!isAdmin) throw new Error("Раздел доступен только администратору.");
}
function assertCourseAccess(hasAccess) {
	if (!hasAccess) throw new Error("Доступ к курсу закрыт. Обратитесь к администратору.");
}
var adminMiddleware = createServerFn({ method: "POST" });
var listStudents_createServerFn_handler = createServerRpc({
	id: "e205a20b69aa34645601227e525daac5166fbd10c680a1376ea343b80442b234",
	name: "listStudents",
	filename: "src/lib/school.functions.ts"
}, (opts) => listStudents.__executeServer(opts));
var listStudents = adminMiddleware.middleware([requireSupabaseAuth]).handler(listStudents_createServerFn_handler, async ({ context }) => {
	const role = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (role.error) throw new Error("Не удалось проверить права доступа.");
	assertAdministrator(role.data === true);
	const [profiles, access, progress, roles] = await Promise.all([
		context.supabase.from("profiles").select("id, full_name, email, created_at").order("created_at", { ascending: false }),
		context.supabase.from("course_access").select("user_id, is_active, activated_at, note"),
		context.supabase.from("lesson_progress").select("user_id, lesson_id"),
		context.supabase.from("user_roles").select("user_id, role")
	]);
	if (profiles.error || access.error || progress.error || roles.error) throw new Error("Не удалось загрузить список учениц.");
	const admins = new Set((roles.data ?? []).filter((r) => r.role === "admin").map((r) => r.user_id));
	return (profiles.data ?? []).filter((p) => !admins.has(p.id)).map((p) => {
		const a = access.data?.find((a) => a.user_id === p.id);
		const completed = new Set((progress.data ?? []).filter((r) => r.user_id === p.id).map((r) => r.lesson_id));
		return {
			...p,
			active: a?.is_active ?? false,
			activatedAt: a?.activated_at ?? null,
			note: a?.note ?? "",
			percent: computeProgress(ALL_LESSONS, completed).percent
		};
	});
});
var updateStudentAccess_createServerFn_handler = createServerRpc({
	id: "c7e745d8bf2a148c40e8d2de62771fa924fc4bdad622f17af5f4a490e40e5d94",
	name: "updateStudentAccess",
	filename: "src/lib/school.functions.ts"
}, (opts) => updateStudentAccess.__executeServer(opts));
var updateStudentAccess = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	userId: stringType().uuid(),
	active: booleanType()
}).parse(input)).handler(updateStudentAccess_createServerFn_handler, async ({ context, data }) => {
	const role = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (role.error) throw new Error("Не удалось проверить права доступа.");
	assertAdministrator(role.data === true);
	const targetRole = await context.supabase.rpc("has_role", {
		_user_id: data.userId,
		_role: "admin"
	});
	if (targetRole.error || targetRole.data) throw new Error("Доступ администратора не управляется в списке учениц.");
	const profile = await context.supabase.from("profiles").select("id").eq("id", data.userId).maybeSingle();
	if (profile.error || !profile.data) throw new Error("Ученица не найдена.");
	const now = (/* @__PURE__ */ new Date()).toISOString();
	const { error } = await context.supabase.from("course_access").upsert({
		user_id: data.userId,
		is_active: data.active,
		activated_at: data.active ? now : null,
		updated_at: now
	}, { onConflict: "user_id" });
	if (error) throw new Error("Не удалось сохранить доступ.");
	return { active: data.active };
});
var inviteStudent_createServerFn_handler = createServerRpc({
	id: "20c816087cae98abf14488ef114e23151ffb71b712ccc008fadd8e6c45532246",
	name: "inviteStudent",
	filename: "src/lib/school.functions.ts"
}, (opts) => inviteStudent.__executeServer(opts));
var inviteStudent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	name: stringType().trim().min(1).max(120),
	email: stringType().trim().email().max(254).transform((s) => s.toLowerCase())
}).parse(input)).handler(inviteStudent_createServerFn_handler, async ({ context }) => {
	const role = await context.supabase.rpc("has_role", {
		_user_id: context.userId,
		_role: "admin"
	});
	if (role.error) throw new Error("Не удалось проверить права доступа.");
	assertAdministrator(role.data === true);
	throw new Error("Создание приглашений временно недоступно. Ученица может зарегистрироваться через страницу входа, после чего администратор сможет открыть ей доступ.");
});
var getLessonContent_createServerFn_handler = createServerRpc({
	id: "46123213d6d2f2cb21b46440648f460fc8372029b3e54125cba7056db1b1d94a",
	name: "getLessonContent",
	filename: "src/lib/school.functions.ts"
}, (opts) => getLessonContent.__executeServer(opts));
var getLessonContent = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ lessonId: stringType().min(1).max(100) }).parse(input)).handler(getLessonContent_createServerFn_handler, async ({ context, data }) => {
	const access = await context.supabase.rpc("has_course_access", { _user_id: context.userId });
	if (access.error) throw new Error("Не удалось проверить доступ к курсу.");
	assertCourseAccess(access.data === true);
	const { LESSON_CONTENT } = await import("./lesson-content.server-D4Y7T2Rp.mjs");
	const blocks = LESSON_CONTENT[data.lessonId];
	if (!blocks) throw new Error("Урок не найден.");
	return blocks;
});
//#endregion
export { getLessonContent_createServerFn_handler, inviteStudent_createServerFn_handler, listStudents_createServerFn_handler, updateStudentAccess_createServerFn_handler };
