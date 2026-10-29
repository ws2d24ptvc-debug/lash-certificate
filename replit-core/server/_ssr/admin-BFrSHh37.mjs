import { r as __toESM } from "../_runtime.mjs";
import { W as isRedirect, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-ChNsXfvL.mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-BjdUIr3O.mjs";
import { t as requireSupabaseAuth } from "./auth-middleware-D9rUQuav.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { r as cn, t as Button } from "./button-gdPi6aRJ.mjs";
import { r as useQueryClient, t as useQuery } from "../_libs/tanstack__react-query.mjs";
import { d as Lock, f as LockOpen, n as Users, o as Search, s as RefreshCw, t as X } from "../_libs/lucide-react.mjs";
import { t as CabinetShell } from "./CabinetShell-Dvv6tuCM.mjs";
import { t as Input } from "./input-DkNeAjan.mjs";
import { n as objectType, r as stringType, t as booleanType } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-BFrSHh37.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/90  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Закрыть"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-normal", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var listStudents = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).handler(createSsrRpc("e205a20b69aa34645601227e525daac5166fbd10c680a1376ea343b80442b234"));
var updateStudentAccess = createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	userId: stringType().uuid(),
	active: booleanType()
}).parse(input)).handler(createSsrRpc("c7e745d8bf2a148c40e8d2de62771fa924fc4bdad622f17af5f4a490e40e5d94"));
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({
	name: stringType().trim().min(1).max(120),
	email: stringType().trim().email().max(254).transform((s) => s.toLowerCase())
}).parse(input)).handler(createSsrRpc("20c816087cae98abf14488ef114e23151ffb71b712ccc008fadd8e6c45532246"));
createServerFn({ method: "POST" }).middleware([requireSupabaseAuth]).inputValidator((input) => objectType({ lessonId: stringType().min(1).max(100) }).parse(input)).handler(createSsrRpc("46123213d6d2f2cb21b46440648f460fc8372029b3e54125cba7056db1b1d94a"));
function AdminPanel() {
	const fetchStudents = useServerFn(listStudents);
	const updateAccess = useServerFn(updateStudentAccess);
	const queryClient = useQueryClient();
	const { data = [], isLoading, error, refetch } = useQuery({
		queryKey: ["admin-students"],
		queryFn: () => fetchStudents(),
		refetchOnWindowFocus: true
	});
	const [query, setQuery] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [changing, setChanging] = (0, import_react.useState)(null);
	const [closing, setClosing] = (0, import_react.useState)(null);
	const rows = data.filter((r) => `${r.email ?? ""} ${r.full_name ?? ""}`.toLowerCase().includes(query.trim().toLowerCase()) && (filter === "all" || (filter === "active" ? r.active : !r.active)));
	async function setAccess(userId, active) {
		setChanging(userId);
		try {
			await updateAccess({ data: {
				userId,
				active
			} });
			await queryClient.invalidateQueries({ queryKey: ["admin-students"] });
			await queryClient.invalidateQueries({ queryKey: ["student"] });
			toast.success(active ? "Доступ открыт" : "Доступ закрыт");
			setClosing(null);
		} catch {
			toast.error("Не удалось изменить доступ. Попробуйте ещё раз.");
		} finally {
			setChanging(null);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-col justify-between gap-5 sm:flex-row sm:items-end",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Администратор"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl sm:text-5xl",
					children: "Ученицы и доступ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm text-muted-foreground",
					children: "После оплаты ученица самостоятельно регистрируется на сайте. Найдите её по e-mail и нажмите «Открыть доступ»."
				})
			] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid grid-cols-3 border-y border-border bg-powder py-5 text-powder-foreground",
			children: [
				["Всего", data.length],
				["Активны", data.filter((r) => r.active).length],
				["Без доступа", data.filter((r) => !r.active).length]
			].map(([title, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-3xl",
					children: count
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-xs sm:text-sm",
					children: title
				})]
			}, title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-7 flex flex-col gap-4 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-3.5 h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					"aria-label": "Поиск ученицы",
					placeholder: "Имя или e-mail",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					className: "h-12 pl-10 text-base"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-1",
				role: "group",
				"aria-label": "Статус доступа",
				children: [[
					"all",
					"pending",
					"active"
				].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: filter === f ? "secondary" : "ghost",
					"aria-pressed": filter === f,
					className: "h-11 flex-1",
					onClick: () => setFilter(f),
					children: f === "all" ? "Все" : f === "pending" ? "Неактивны" : "Активны"
				}, f)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					title: "Обновить список",
					"aria-label": "Обновить список",
					className: "h-11 w-11",
					onClick: () => refetch(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {})
				})]
			})]
		}),
		isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "py-12 text-muted-foreground",
			children: "Загрузка учениц…"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			role: "alert",
			className: "py-10 text-destructive",
			children: "Не удалось загрузить учениц. Обновите список."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 space-y-3",
			children: [rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "grid gap-5 rounded-lg border border-border bg-card p-5 md:grid-cols-[minmax(0,1fr)_160px_170px] md:items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "break-words font-sans text-base font-semibold",
								children: r.full_name || "Имя не указано"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 break-all text-sm text-muted-foreground",
								children: r.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: `mt-3 text-xs ${r.active ? "text-success" : "text-muted-foreground"}`,
								children: [r.active ? "Активен" : "Неактивен", r.activatedAt && r.active ? ` · ${new Date(r.activatedAt).toLocaleDateString("ru-RU")}` : " · Не активирован"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex justify-between text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Пройдено"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [r.percent, "%"] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("progress", {
						value: r.percent,
						max: 100,
						"aria-label": `Прогресс ${r.full_name || r.email}`,
						className: "course-progress h-1.5 w-full"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						disabled: changing === r.id,
						variant: r.active ? "outline" : "default",
						className: "h-11 w-full",
						onClick: () => r.active ? setClosing(r) : setAccess(r.id, true),
						children: [r.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, {}), changing === r.id ? "Сохраняем…" : r.active ? "Закрыть доступ" : "Открыть доступ"]
					})
				]
			}, r.id)), !isLoading && !error && rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-14 text-center text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "mx-auto mb-4 h-8 w-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: data.length ? "Ученицы не найдены" : "После регистрации ученицы появятся здесь" })]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: !!closing,
			onOpenChange: (value) => {
				if (!value && !changing) setClosing(null);
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "w-[calc(100%-2rem)] rounded-lg bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-serif text-3xl",
						children: "Закрыть доступ?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"Ученица ",
						closing?.full_name || closing?.email,
						" больше не сможет загружать уроки. Её прогресс сохранится."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							disabled: !!changing,
							onClick: () => setClosing(null),
							className: "h-12 flex-1",
							children: "Отмена"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: !!changing,
							variant: "destructive",
							onClick: () => closing && setAccess(closing.id, false),
							className: "h-12 flex-1",
							children: "Закрыть доступ"
						})]
					})
				]
			})
		})
	] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CabinetShell, {
	requireAccess: false,
	children: (s) => s.isAdmin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPanel, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Раздел доступен только администратору." })
});
//#endregion
export { SplitComponent as component };
