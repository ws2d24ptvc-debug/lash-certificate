import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as BuyBlock } from "./BuyBlock-BpkO2Ysu.mjs";
import { n as PageShell } from "./PageShell-BRoi05WO.mjs";
import { n as MODULES } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/program-CNrHxYwI.js
var import_jsx_runtime = require_jsx_runtime();
var editorial = { fontFamily: "Georgia,\"Times New Roman\",serif" };
function Program() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "program-academy-head",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "LASH ACADEMY · ПРОГРАММА ОБУЧЕНИЯ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				style: {
					...editorial,
					fontWeight: 400,
					letterSpacing: "-.045em"
				},
				children: [
					"От первых знаний",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						style: {
							fontWeight: 400,
							color: "#d99c74"
						},
						children: "до уверенной работы"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "14 последовательных модулей. Сначала ты разбираешься в профессии, материалах и безопасности, затем ставишь руку, осваиваешь классику, моделирование, объёмы и эффекты — и переходишь к самостоятельной практике." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "public-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/auth",
					className: "academy-primary-btn",
					children: ["Начать обучение ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "academy-outline-btn",
					children: "На главную"
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "public-module-preview program-list",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-section-title",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "14 МОДУЛЕЙ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						...editorial,
						fontWeight: 400,
						fontSize: "clamp(42px,6vw,66px)",
						letterSpacing: "-.035em"
					},
					children: "Программа курса"
				})] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-module-grid",
				children: MODULES.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `academy-module-card academy-public-card academy-pattern-${i % 6 + 1}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "academy-module-pattern" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "academy-module-copy",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["МОДУЛЬ ", m.number] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									...editorial,
									fontWeight: 400,
									textTransform: "none",
									fontSize: "28px",
									lineHeight: 1.04,
									letterSpacing: "-.025em",
									color: "#f3dfd0"
								},
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "academy-lesson-count",
								children: [
									m.lessons.length,
									" ",
									m.lessons.length === 1 ? "урок" : m.lessons.length < 5 ? "урока" : "уроков"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/auth",
								children: ["Перейти к обучению ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						]
					})]
				}, m.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "program-buy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						...editorial,
						fontSize: "34px",
						fontStyle: "italic",
						color: "#dfb28f",
						textAlign: "center",
						marginBottom: "18px"
					},
					children: "От первой ресницы — к уверенной руке мастера ♡"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyBlock, { align: "center" })]
			})
		]
	})] });
}
//#endregion
export { Program as component };
