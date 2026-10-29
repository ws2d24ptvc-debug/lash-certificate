import { r as __toESM } from "../_runtime.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-gdPi6aRJ.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { t as Input } from "./input-DkNeAjan.mjs";
import { n as PageShell } from "./PageShell-BRoi05WO.mjs";
import { t as Label } from "./label-BSnuSsBx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/reset-password-VEeQxyaC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function recoveryCredentials(hash) {
	const params = new URLSearchParams(hash.replace(/^#/, ""));
	const accessToken = params.get("access_token");
	const refreshToken = params.get("refresh_token");
	if (params.get("type") !== "recovery" || !accessToken || !refreshToken) return null;
	return {
		access_token: accessToken,
		refresh_token: refreshToken
	};
}
function Reset() {
	const navigate = useNavigate();
	const [state, setState] = (0, import_react.useState)("checking");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const credentials = recoveryCredentials(window.location.hash);
		window.history.replaceState(null, "", "/reset-password");
		if (!credentials) {
			setState("invalid");
			return;
		}
		supabase.auth.setSession(credentials).then(async ({ error }) => {
			if (error) {
				setState("invalid");
				return;
			}
			const user = await supabase.auth.getUser();
			setState(user.error || !user.data.user ? "invalid" : "ready");
		}).catch(() => setState("invalid"));
	}, []);
	async function submit(e) {
		e.preventDefault();
		if (state !== "ready") return;
		if (password !== confirm) {
			setError("Пароли не совпадают.");
			return;
		}
		setBusy(true);
		setError("");
		try {
			const { error } = await supabase.auth.updateUser({ password });
			if (error) {
				setError("Не удалось обновить пароль. Проверьте требования к паролю или запросите новую ссылку.");
				return;
			}
			setPassword("");
			setConfirm("");
			await navigate({
				to: "/cabinet",
				replace: true
			});
		} catch {
			setError("Нет соединения. Попробуйте ещё раз.");
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-5 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-md rounded-lg border border-border bg-card p-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl",
					children: "Новый пароль"
				}),
				state === "checking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6",
					children: "Проверяем ссылку…"
				}),
				state === "invalid" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Ссылка недействительна или истекла. Запросите новое письмо через «Забыли пароль?»."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "outline",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/auth",
							children: "Перейти ко входу"
						})
					})]
				}),
				state === "ready" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-6 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p",
								children: "Новый пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "p",
								type: "password",
								autoComplete: "new-password",
								minLength: 8,
								required: true,
								value: password,
								onChange: (e) => setPassword(e.target.value),
								className: "h-12 text-base"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "pc",
								children: "Повторите пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "pc",
								type: "password",
								autoComplete: "new-password",
								minLength: 8,
								required: true,
								value: confirm,
								onChange: (e) => setConfirm(e.target.value),
								className: "h-12 text-base"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: busy,
							className: "btn-gold w-full",
							children: busy ? "Сохраняем…" : "Сохранить пароль"
						})
					]
				})
			]
		})
	}) });
}
//#endregion
export { Reset as component };
