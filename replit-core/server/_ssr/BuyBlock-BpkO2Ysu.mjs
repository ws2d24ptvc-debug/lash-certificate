import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { n as SITE, t as Button } from "./button-gdPi6aRJ.mjs";
import { i as ShoppingBag, l as Mail } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/BuyBlock-BpkO2Ysu.js
var import_jsx_runtime = require_jsx_runtime();
function BuyBlock({ align = "start" }) {
	const ready = !SITE.avitoIsPlaceholder && Boolean(SITE.avitoUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: align === "center" ? "flex flex-col items-center text-center" : "flex flex-col items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			asChild: true,
			className: "btn-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: ready ? SITE.avitoUrl : `mailto:${SITE.supportEmail}?subject=${encodeURIComponent("Покупка курса на Авито")}`,
				target: ready ? "_blank" : void 0,
				rel: ready ? "noopener noreferrer" : void 0,
				children: [ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {}), ready ? "Купить курс на Авито" : "Уточнить покупку на Авито"]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-md text-base leading-relaxed text-muted-foreground",
			children: ready ? "После подтверждения покупки доступ активируется вручную." : "Ссылку на объявление уточните у поддержки. После подтверждения покупки доступ активируется вручную."
		})]
	});
}
//#endregion
export { BuyBlock as t };
