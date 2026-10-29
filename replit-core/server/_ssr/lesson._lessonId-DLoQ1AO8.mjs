import { Y as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as findLesson } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lesson._lessonId-DLoQ1AO8.js
var $$splitComponentImporter = () => import("./lesson._lessonId-CnEmjOP9.mjs");
var Route = createFileRoute("/_authenticated/lesson/$lessonId")({
	loader: ({ params }) => {
		const found = findLesson(params.lessonId);
		if (!found) throw notFound();
		return { title: found.lesson.title };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.title ?? "Урок"} — LASH ACADEMY` }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
