import { r as __toESM } from "../_runtime.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-gdPi6aRJ.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { t as Input } from "./input-DkNeAjan.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as PageShell } from "./PageShell-BRoi05WO.mjs";
import { t as Label } from "./label-BSnuSsBx.mjs";
import { t as createLovableAuth } from "../_libs/lovable.dev__cloud-auth-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-DqWSNK1r.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var lovableAuth = createLovableAuth();
var lovable = { auth: { signInWithOAuth: async (provider, opts) => {
	const result = await lovableAuth.signInWithOAuth(provider, {
		...opts,
		extraParams: { ...opts?.extraParams }
	});
	if (result.redirected) return result;
	if (result.error) return result;
	try {
		await supabase.auth.setSession(result.tokens);
	} catch (e) {
		return { error: e instanceof Error ? e : new Error(String(e)) };
	}
	return result;
} } };
function AuthPage() {
	const navigate = useNavigate();
	const [mode, setMode] = (0, import_react.useState)("login");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [sent, setSent] = (0, import_react.useState)(null);
	async function goToCabinetForUser(userId) {
		const { data: isAdmin, error } = await supabase.rpc("has_role", {
			_user_id: userId,
			_role: "admin"
		});
		if (!error && isAdmin) {
			await navigate({
				to: "/admin",
				replace: true
			});
			return;
		}
		await navigate({
			to: "/cabinet",
			replace: true
		});
	}
	(0, import_react.useEffect)(() => {
		supabase.auth.getSession().then(({ data }) => {
			if (data.session?.user) goToCabinetForUser(data.session.user.id);
		});
	}, [navigate]);
	async function submit(e) {
		e.preventDefault();
		setBusy(true);
		try {
			if (mode === "login") {
				const { data, error } = await supabase.auth.signInWithPassword({
					email,
					password
				});
				if (error) throw error;
				setPassword("");
				if (data.user) await goToCabinetForUser(data.user.id);
			} else if (mode === "signup") {
				const { error } = await supabase.auth.signUp({
					email,
					password,
					options: {
						emailRedirectTo: window.location.origin + "/auth",
						data: { full_name: name }
					}
				});
				if (error) throw error;
				setPassword("");
				setSent("Мы отправили письмо для подтверждения email. Перейдите по ссылке из письма, затем войдите.");
			} else {
				const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin + "/reset-password" });
				if (error && error.status === 429) {
					toast.error("Слишком много запросов. Попробуйте позже.");
					return;
				}
				if (error && error.status && error.status >= 500) {
					toast.error("Не удалось отправить запрос. Попробуйте позже.");
					return;
				}
				setSent("Если аккаунт с такой почтой существует, мы отправили инструкции по восстановлению.");
			}
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Ошибка";
			toast.error(msg.includes("Invalid login") ? "Неверный email или пароль" : msg);
		} finally {
			setBusy(false);
		}
	}
	async function google() {
		if ((await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/auth" })).error) toast.error("Не удалось войти через Google");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-hero px-5 py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md rounded-lg border border-border bg-card p-7 shadow-card md:p-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow text-center",
					children: "Личный кабинет"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-center text-4xl",
					children: mode === "login" ? "Вход" : mode === "signup" ? "Регистрация" : "Сброс пароля"
				}),
				mode === "login" && !sent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm text-muted-foreground",
					children: "Вход для учениц и администратора. Администратор после входа автоматически перейдёт в панель управления."
				}),
				sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-muted-foreground",
					children: sent
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-8 space-y-4",
					children: [
						mode === "signup" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "name",
								children: "Имя"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "name",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true,
								className: "h-12 text-base"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "email",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "email",
								type: "email",
								autoComplete: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								required: true,
								className: "h-12 text-base"
							})]
						}),
						mode !== "forgot" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "password",
								children: "Пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "password",
								type: "password",
								minLength: mode === "signup" ? 8 : void 0,
								autoComplete: mode === "login" ? "current-password" : "new-password",
								value: password,
								onChange: (e) => setPassword(e.target.value),
								required: true,
								className: "h-12 text-base"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "btn-gold w-full disabled:opacity-60",
							children: mode === "login" ? "Войти" : mode === "signup" ? "Зарегистрироваться" : "Отправить ссылку"
						})
					]
				}),
				mode !== "forgot" && !sent && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "my-6 flex items-center gap-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" }),
						"или",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: google,
					className: "btn-ghost-gold w-full",
					children: "Продолжить с Google"
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2 text-center text-sm text-muted-foreground",
					children: [mode === "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "block w-full hover:text-foreground",
						onClick: () => setMode("forgot"),
						children: "Забыли пароль?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "block w-full hover:text-foreground",
						onClick: () => setMode("signup"),
						children: ["Нет аккаунта? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Зарегистрироваться"
						})]
					})] }), mode !== "login" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "block w-full hover:text-foreground",
						onClick: () => {
							setMode("login");
							setSent(null);
						},
						children: "Вернуться ко входу"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-center text-sm text-muted-foreground",
					children: "После регистрации доступ к урокам открывается администратором после подтверждения покупки на Авито."
				})
			]
		})
	}) });
}
//#endregion
export { AuthPage as component };
