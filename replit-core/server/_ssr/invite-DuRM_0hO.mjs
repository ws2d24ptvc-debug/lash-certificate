import { r as __toESM } from "../_runtime.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as Button } from "./button-gdPi6aRJ.mjs";
import { t as supabase } from "./client-CNLh7lRp.mjs";
import { t as Input } from "./input-DkNeAjan.mjs";
import { n as PageShell } from "./PageShell-BRoi05WO.mjs";
import { t as Label } from "./label-BSnuSsBx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invite-DuRM_0hO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Invitation() {
	const navigate = useNavigate();
	const [state, setState] = (0, import_react.useState)("checking");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirmation, setConfirmation] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const params = new URLSearchParams(window.location.hash.slice(1));
		const token = params.get("token_hash");
		if (!token || params.get("type") !== "invite") {
			setState("invalid");
			return;
		}
		window.history.replaceState(null, "", "/invite");
		supabase.auth.verifyOtp({
			token_hash: token,
			type: "invite"
		}).then(({ error }) => {
			setState(error ? "invalid" : "ready");
		}).catch(() => setState("invalid"));
	}, []);
	async function submit(e) {
		e.preventDefault();
		if (password !== confirmation) {
			setError("Пароли не совпадают.");
			return;
		}
		setBusy(true);
		setError("");
		try {
			const { error } = await supabase.auth.updateUser({ password });
			if (error) {
				setError("Не удалось установить пароль. Проверьте требования к паролю или запросите новую ссылку.");
				return;
			}
			setPassword("");
			setConfirmation("");
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
			className: "mx-auto max-w-md rounded-lg border border-border bg-card p-6 sm:p-9",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "Школа Веры Лушиной"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 text-4xl",
					children: "Ваше приглашение"
				}),
				state === "checking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: "Проверяем приглашение…"
				}),
				state === "invalid" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "Ссылка недействительна или уже использована. Запросите новую ссылку у администратора либо восстановите пароль на странице входа."
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Установите свой пароль. Доступ к курсу открывается отдельно после подтверждения покупки на Авито."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "invite-password",
								children: "Новый пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "invite-password",
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
								htmlFor: "invite-confirm",
								children: "Повторите пароль"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "invite-confirm",
								type: "password",
								autoComplete: "new-password",
								minLength: 8,
								required: true,
								value: confirmation,
								onChange: (e) => setConfirmation(e.target.value),
								className: "h-12 text-base"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "alert",
							className: "text-sm text-destructive",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							disabled: busy,
							className: "btn-gold w-full",
							children: busy ? "Сохраняем…" : "Установить пароль"
						})
					]
				})
			]
		})
	}) });
}
//#endregion
export { Invitation as component };
