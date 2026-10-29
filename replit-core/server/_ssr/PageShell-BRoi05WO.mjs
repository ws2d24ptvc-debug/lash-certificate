import { r as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SITE, t as Button } from "./button-gdPi6aRJ.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { c as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-BRoi05WO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useAuth() {
	const [user, setUser] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((_e, session) => {
			setUser(session?.user ?? null);
			setReady(true);
		});
		supabase.auth.getSession().then(({ data: s }) => {
			setUser(s.session?.user ?? null);
			setReady(true);
		});
		return () => data.subscription.unsubscribe();
	}, []);
	return {
		user,
		ready
	};
}
var NAV = [
	{
		to: "/",
		label: "Главная"
	},
	{
		to: "/program",
		label: "Модули"
	},
	{
		to: "/lessons",
		label: "Обучение"
	},
	{
		to: "/certificate",
		label: "Сертификат"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { user } = useAuth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-primary/15 bg-[#090807]/95 backdrop-blur-xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "academy-brand !p-0",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "academy-lash",
						children: "⌒"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LASH" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ACADEMY" })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "border-b border-transparent pb-2 text-sm text-[#cdbbb0] transition-colors hover:text-[#e7b68f]",
						activeProps: { className: "!border-[#dba57f] !text-[#f5e9df]" },
						activeOptions: { exact: true },
						children: n.label
					}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: user ? "/cabinet" : "/auth",
						className: "academy-outline-btn !min-h-10 !rounded-lg !px-5",
						children: user ? "Личный кабинет" : "Войти"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					className: "lg:hidden text-[#f5e9df]",
					"aria-label": "Меню",
					onClick: () => setOpen((o) => !o),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "border-t border-primary/15 bg-[#090807]/98 px-5 pb-6 pt-2 lg:hidden",
			children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: n.to,
				onClick: () => setOpen(false),
				className: "block border-b border-primary/15 py-4 font-serif text-2xl text-[#f1d2bc]",
				children: n.label
			}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: user ? "/cabinet" : "/auth",
				onClick: () => setOpen(false),
				className: "academy-primary-btn mt-6 w-full",
				children: user ? "Личный кабинет" : "Войти"
			})]
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-20 border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col justify-between gap-5 px-5 py-9 text-base sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground",
				children: [
					"© «",
					SITE.courseTitle,
					"»"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["Поддержка: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				className: "break-all text-primary underline-offset-4 hover:underline",
				href: `mailto:${SITE.supportEmail}`,
				children: SITE.supportEmail
			})] })]
		})
	});
}
var academyBackground = {
	background: "radial-gradient(ellipse at 82% 8%, rgba(162,87,52,.18), transparent 34%), radial-gradient(ellipse at 8% 58%, rgba(117,62,39,.13), transparent 38%), linear-gradient(145deg,#080706 0%,#120d0b 52%,#080706 100%)",
	backgroundAttachment: "fixed"
};
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "public-academy-shell min-h-screen text-foreground",
		style: academyBackground,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "public-academy-main min-h-screen",
			style: { background: "transparent" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "academy-content public-academy-content relative z-10",
					style: { background: "transparent" },
					children
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative z-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
				})
			]
		})
	});
}
function PageIntro({ eyebrow, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "academy-progress-card public-page-intro",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 py-12 text-center md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 text-4xl leading-tight md:text-6xl",
					children: title
				}),
				children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg",
					children
				})
			]
		})
	});
}
//#endregion
export { PageShell as n, PageIntro as t };
