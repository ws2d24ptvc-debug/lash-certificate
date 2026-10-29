import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as PageShell, t as PageIntro } from "./PageShell-BRoi05WO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/LegalDraft-D7MkPR5R.js
var import_jsx_runtime = require_jsx_runtime();
function LegalDraft({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Документ",
		title
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 rounded-xl border border-accent/50 bg-accent/10 p-4 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Заготовка документа." }), " Текст будет заполнен реальными данными и реквизитами владельца сайта перед публикацией. Ниже — только структура разделов."]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-6 leading-relaxed text-foreground/85",
			children
		})]
	})] });
}
function Section({ n, title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "text-2xl",
		children: [
			n,
			". ",
			title
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-muted-foreground",
		children: text
	})] });
}
//#endregion
export { Section as n, LegalDraft as t };
