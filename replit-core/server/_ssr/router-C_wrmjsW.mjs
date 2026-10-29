import { r as __toESM } from "../_runtime.mjs";
import { K as redirect, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { n as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$13 } from "./lesson._lessonId-DLoQ1AO8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C_wrmjsW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Krg_QGwz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1, viewport-fit=cover"
			},
			{
				name: "theme-color",
				content: "#1c1612"
			},
			{ title: "Вера Лушина — онлайн-курс «Наращивание ресниц с нуля»" },
			{
				name: "description",
				content: "Авторский онлайн-курс по наращиванию ресниц от Веры Лушиной."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Manrope:wght@300;400;500;600&display=swap&subset=cyrillic"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ru",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		const { data } = supabase.auth.onAuthStateChange((event) => {
			if (event !== "SIGNED_IN" && event !== "SIGNED_OUT" && event !== "USER_UPDATED") return;
			router.invalidate();
			if (event === "SIGNED_OUT") queryClient.clear();
			else queryClient.invalidateQueries();
		});
		return () => data.subscription.unsubscribe();
	}, [router, queryClient]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})]
	});
}
var $$splitComponentImporter$11 = () => import("./routes-D0IVbvSn.mjs");
var Route$11 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "LASH ACADEMY — Наращивание ресниц с нуля до мастера" }, {
		name: "description",
		content: "Авторский курс Веры Лушиной по наращиванию ресниц."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./route-Di7iQBCH.mjs");
var Route$10 = createFileRoute("/_authenticated")({
	ssr: false,
	beforeLoad: async () => {
		const { data } = await supabase.auth.getUser();
		if (!data.user) throw redirect({ to: "/auth" });
	},
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./auth-DqWSNK1r.mjs");
var Route$9 = createFileRoute("/auth")({
	head: () => ({ meta: [
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{ title: "Вход в личный кабинет — курс Веры Лушиной" },
		{
			name: "description",
			content: "Вход в личный кабинет ученицы или администратора курса «Наращивание ресниц с нуля»."
		},
		{
			property: "og:title",
			content: "Вход в личный кабинет"
		},
		{
			property: "og:description",
			content: "Личный кабинет курса Веры Лушиной."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./certificate-DlnaTR_h.mjs");
var Route$8 = createFileRoute("/certificate")({
	head: () => ({ meta: [
		{ title: "Сертификат — онлайн-курс по наращиванию ресниц" },
		{
			name: "description",
			content: "Именной сертификат становится доступен после прохождения 100% уроков курса."
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./invite-DuRM_0hO.mjs");
var Route$7 = createFileRoute("/invite")({
	head: () => ({ meta: [
		{ title: "Приглашение ученицы — школа Веры Лушиной" },
		{
			name: "description",
			content: "Примите приглашение и установите собственный пароль для личного кабинета."
		},
		{
			property: "og:title",
			content: "Приглашение в школу Веры Лушиной"
		},
		{
			property: "og:description",
			content: "Безопасная установка пароля ученицы."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		},
		{
			name: "referrer",
			content: "no-referrer"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./lessons-CVGsBYv0.mjs");
var Route$6 = createFileRoute("/lessons")({
	head: () => ({ meta: [
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{ title: "Примеры уроков — курс Веры Лушиной" },
		{
			name: "description",
			content: "Посмотрите, как устроены уроки курса «Наращивание ресниц с нуля»."
		},
		{
			property: "og:title",
			content: "Примеры уроков курса по наращиванию ресниц"
		},
		{
			property: "og:description",
			content: "Фрагменты уроков из авторского курса Веры Лушиной."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./privacy-DRFYjUac.mjs");
var Route$5 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{ title: "Политика конфиденциальности — курс Веры Лушиной" },
		{
			name: "description",
			content: "Политика обработки персональных данных сайта онлайн-курса «Наращивание ресниц с нуля»."
		},
		{
			property: "og:title",
			content: "Политика конфиденциальности"
		},
		{
			property: "og:description",
			content: "Политика конфиденциальности сайта курса Веры Лушиной."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./program-CNrHxYwI.mjs");
var Route$4 = createFileRoute("/program")({
	head: () => ({ meta: [{ title: "Программа — LASH ACADEMY" }, {
		name: "description",
		content: "Программа авторского курса Веры Лушиной."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./reset-password-VEeQxyaC.mjs");
var Route$3 = createFileRoute("/reset-password")({
	head: () => ({ meta: [
		{ title: "Восстановление пароля — курс Веры Лушиной" },
		{
			name: "description",
			content: "Безопасная установка нового пароля личного кабинета."
		},
		{
			property: "og:title",
			content: "Восстановление пароля курса Веры Лушиной"
		},
		{
			property: "og:description",
			content: "Установка пароля по ссылке восстановления."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		},
		{
			name: "referrer",
			content: "no-referrer"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./terms-Dh9LkBMh.mjs");
var Route$2 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{ title: "Пользовательское соглашение — курс Веры Лушиной" },
		{
			name: "description",
			content: "Условия использования сайта и материалов онлайн-курса «Наращивание ресниц с нуля»."
		},
		{
			property: "og:title",
			content: "Пользовательское соглашение"
		},
		{
			property: "og:description",
			content: "Условия использования материалов курса Веры Лушиной."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./admin-BFrSHh37.mjs");
var Route$1 = createFileRoute("/_authenticated/admin")({
	beforeLoad: async () => {
		const { data: user } = await supabase.auth.getUser();
		if (!user.user) throw redirect({ to: "/auth" });
		const { data, error } = await supabase.rpc("has_role", {
			_user_id: user.user.id,
			_role: "admin"
		});
		if (error || !data) throw redirect({ to: "/cabinet" });
	},
	head: () => ({ meta: [
		{ title: "Ученицы и доступ — школа Веры Лушиной" },
		{
			name: "description",
			content: "Управление ученицами и ручной активацией доступа к курсу."
		},
		{
			property: "og:title",
			content: "Админ-панель школы Веры Лушиной"
		},
		{
			property: "og:description",
			content: "Ученицы, доступ и прогресс курса."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./cabinet-DV7Nj1HO.mjs");
var Route = createFileRoute("/_authenticated/cabinet")({
	head: () => ({ meta: [{ title: "Обучение — LASH ACADEMY" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$11.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRoute = Route$10.update({
	id: "/_authenticated",
	getParentRoute: () => Route$12
});
var AuthRoute = Route$9.update({
	id: "/auth",
	path: "/auth",
	getParentRoute: () => Route$12
});
var CertificateRoute = Route$8.update({
	id: "/certificate",
	path: "/certificate",
	getParentRoute: () => Route$12
});
var InviteRoute = Route$7.update({
	id: "/invite",
	path: "/invite",
	getParentRoute: () => Route$12
});
var LessonsRoute = Route$6.update({
	id: "/lessons",
	path: "/lessons",
	getParentRoute: () => Route$12
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$12
});
var ProgramRoute = Route$4.update({
	id: "/program",
	path: "/program",
	getParentRoute: () => Route$12
});
var ResetPasswordRoute = Route$3.update({
	id: "/reset-password",
	path: "/reset-password",
	getParentRoute: () => Route$12
});
var TermsRoute = Route$2.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$12
});
var AuthenticatedRouteRouteChildren = {
	AuthenticatedAdminRoute: Route$1.update({
		id: "/admin",
		path: "/admin",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedCabinetRoute: Route.update({
		id: "/cabinet",
		path: "/cabinet",
		getParentRoute: () => AuthenticatedRouteRoute
	}),
	AuthenticatedLessonLessonIdRoute: Route$13.update({
		id: "/lesson/$lessonId",
		path: "/lesson/$lessonId",
		getParentRoute: () => AuthenticatedRouteRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AuthenticatedRouteRoute: AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren),
	AuthRoute,
	CertificateRoute,
	InviteRoute,
	LessonsRoute,
	PrivacyRoute,
	ProgramRoute,
	ResetPasswordRoute,
	TermsRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
