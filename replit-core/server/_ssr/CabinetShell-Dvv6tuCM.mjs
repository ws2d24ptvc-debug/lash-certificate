import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { r as useQueryClient } from "../_libs/tanstack__react-query.mjs";
import { t as useStudent } from "./use-student-DhUtXFWH.mjs";
import { S as Award, _ as Clock, a as ShieldCheck, b as BookOpen, g as GraduationCap, h as House, m as LayoutDashboard, u as LogOut, x as Bell } from "../_libs/lucide-react.mjs";
import { t as BuyBlock } from "./BuyBlock-BpkO2Ysu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CabinetShell-Dvv6tuCM.js
var import_jsx_runtime = require_jsx_runtime();
function CabinetShell({ children, requireAccess = true, className = "" }) {
	const { data, isLoading, error } = useStudent();
	const qc = useQueryClient();
	const navigate = useNavigate();
	async function signOut() {
		await qc.cancelQueries();
		qc.clear();
		await supabase.auth.signOut();
		navigate({
			to: "/auth",
			replace: true
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `academy-shell min-h-screen bg-background ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "academy-sidebar hidden md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/cabinet",
					className: "academy-brand",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "academy-lash",
						children: "⌒"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LASH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ACADEMY" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "academy-side-nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/cabinet",
							className: "academy-side-active",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayoutDashboard, {}), "Главная"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/program",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, {}), "Модули"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/certificate",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {}), "Сертификат"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {}), "На сайт"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-side-quote",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"Твой путь",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"к уверенной работе"
					] })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "academy-main",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "academy-topbar",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "academy-top-nav",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/cabinet",
							children: "Обучение"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/program",
							children: "Модули"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/certificate",
							children: "Сертификат"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "academy-user",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "h-4 w-4" }),
						data?.isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: data?.name || "Вера" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: signOut,
							"aria-label": "Выйти",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" })
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "academy-content",
				children: [
					isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-20 text-center text-muted-foreground",
						children: "Загрузка…"
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-20 text-center text-destructive",
						children: "Не удалось загрузить данные."
					}),
					data && (requireAccess && !data.hasAccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pending, { email: data.email }) : children(data))
				]
			})]
		})]
	});
}
function Pending({ email }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl rounded-[1.75rem] border border-border bg-card/90 p-8 text-center shadow-card md:p-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mx-auto h-10 w-10 text-primary" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl",
				children: "Доступ ожидает активации"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-muted-foreground",
				children: [
					"Вы зарегистрированы как ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground",
						children: email
					}),
					". После подтверждения покупки администратор откроет вам доступ к урокам."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyBlock, { align: "center" })
			})
		]
	});
}
//#endregion
export { CabinetShell as t };
