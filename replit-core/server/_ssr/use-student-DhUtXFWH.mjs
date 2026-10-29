import { t as supabase } from "./client-CNLh7lRp.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-student-DhUtXFWH.js
/** Access status, admin flag and completed lesson ids for the signed-in user. */
function useStudent() {
	return useQuery({
		queryKey: ["student"],
		refetchInterval: 3e4,
		queryFn: async () => {
			const { data: u } = await supabase.auth.getUser();
			const uid = u.user?.id;
			if (!uid) throw new Error("not signed in");
			const [access, roles, progress, profile] = await Promise.all([
				supabase.from("course_access").select("is_active").eq("user_id", uid).maybeSingle(),
				supabase.from("user_roles").select("role").eq("user_id", uid),
				supabase.from("lesson_progress").select("lesson_id").eq("user_id", uid),
				supabase.from("profiles").select("full_name, email").eq("id", uid).maybeSingle()
			]);
			if (access.error || roles.error || progress.error || profile.error) throw new Error("Не удалось загрузить данные ученицы");
			const isAdmin = (roles.data ?? []).some((r) => r.role === "admin");
			return {
				userId: uid,
				email: u.user?.email ?? "",
				name: profile.data?.full_name ?? "",
				isAdmin,
				hasAccess: isAdmin || !!access.data?.is_active,
				completed: new Set((progress.data ?? []).map((p) => p.lesson_id))
			};
		}
	});
}
function useToggleLesson() {
	const qc = useQueryClient();
	return async (userId, lessonId, done) => {
		if (done) {
			const { error } = await supabase.from("lesson_progress").delete().eq("user_id", userId).eq("lesson_id", lessonId);
			if (error) throw error;
		} else {
			const { error } = await supabase.from("lesson_progress").insert({
				user_id: userId,
				lesson_id: lessonId
			});
			if (error) throw error;
		}
		await qc.invalidateQueries({ queryKey: ["student"] });
	};
}
//#endregion
export { useToggleLesson as n, useStudent as t };
