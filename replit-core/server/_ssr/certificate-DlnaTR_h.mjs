import { r as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as useStudent } from "./use-student-DhUtXFWH.mjs";
import { p as LockKeyhole } from "../_libs/lucide-react.mjs";
import { n as PageShell, t as PageIntro } from "./PageShell-BRoi05WO.mjs";
import { t as ALL_LESSONS } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certificate-DlnaTR_h.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NON_STUDENT_PROGRESS_LESSONS = /* @__PURE__ */ new Set([
	"osnovy-cikl",
	"osnovy-protivopokazaniya",
	"prodvizhenie-start"
]);
var CERTIFICATE_LESSONS = ALL_LESSONS.filter((lesson) => !NON_STUDENT_PROGRESS_LESSONS.has(lesson.id));
var FINAL_CERTIFICATE_URL = "https://ws2d24ptvc-debug.github.io/lash-certificate/certificate-v13.html";
function Certificate() {
	const { data, isLoading, error } = useStudent();
	const total = CERTIFICATE_LESSONS.length;
	const completed = data ? CERTIFICATE_LESSONS.filter((lesson) => data.completed.has(lesson.id)).length : 0;
	const percent = total ? Math.round(completed / total * 100) : 0;
	const unlocked = Boolean(data) && total > 0 && completed === total;
	(0, import_react.useEffect)(() => {
		if (unlocked) window.location.replace(FINAL_CERTIFICATE_URL);
	}, [unlocked]);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Сертификат",
		title: "Проверяем прогресс…"
	}) });
	if (error || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Сертификат",
		title: "Войдите в личный кабинет"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-xl px-5 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Сертификат доступен ученицам курса после входа в аккаунт."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/auth",
			className: "mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
			children: "Войти"
		})]
	})] });
	if (unlocked) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Сертификат",
		title: "Курс пройден — открываем сертификат"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-xl px-5 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Сертификат готов. Если он не открылся автоматически, нажмите кнопку ниже."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: FINAL_CERTIFICATE_URL,
			className: "mt-6 inline-flex rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
			children: "Открыть сертификат"
		})]
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Сертификат",
		title: "Сертификат откроется при 100%"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-2xl px-5 pb-16 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-[28px] border border-[#4a3025] bg-[#17110e] px-5 py-8 sm:px-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#8a5a43] bg-[#21150f] text-[#dda27d]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockKeyhole, { className: "h-7 w-7" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-serif text-3xl text-[#f3e5dc]",
					children: "Сертификат пока закрыт"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-xl text-sm leading-7 text-[#b9a49a]",
					children: "Отметьте все уроки курса как пройденные. После 100% сертификат откроется автоматически."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-7 flex max-w-md justify-between text-xs text-[#cbb6aa]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Пройдено ",
						completed,
						" из ",
						total,
						" уроков"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
						className: "text-[#e0a27d]",
						children: [percent, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-2 h-2 max-w-md overflow-hidden rounded-full bg-[#332219]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full rounded-full bg-[#d89a73]",
						style: { width: `${percent}%` }
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/cabinet",
					className: "mt-7 inline-flex rounded-xl bg-[#d99a73] px-6 py-3 text-sm font-bold text-[#1b0e09]",
					children: "Продолжить обучение"
				})
			]
		})
	})] });
}
//#endregion
export { Certificate as component };
