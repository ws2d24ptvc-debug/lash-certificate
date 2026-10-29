import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as TriangleAlert } from "../_libs/lucide-react.mjs";
import { t as BuyBlock } from "./BuyBlock-BpkO2Ysu.mjs";
import { n as PageShell, t as PageIntro } from "./PageShell-BRoi05WO.mjs";
import { n as MODULES } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lessons-CVGsBYv0.js
var import_jsx_runtime = require_jsx_runtime();
var VOLUME_SCHEMES = [
	{
		volume: "1,5D",
		sequence: [
			1,
			2,
			1,
			2
		],
		formula: "1,5D = 1/2/1/2"
	},
	{
		volume: "2D",
		sequence: [
			2,
			2,
			2,
			2
		],
		formula: "2D = 2/2/2/2"
	},
	{
		volume: "2,5D",
		sequence: [
			2,
			3,
			2,
			3
		],
		formula: "2,5D = 2/3/2/3"
	},
	{
		volume: "3D",
		sequence: [
			3,
			3,
			3,
			3
		],
		formula: "3D = 3/3/3/3"
	}
];
function VolumeSchemes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "lesson-volumes grid min-w-0 gap-4 sm:grid-cols-2",
		children: VOLUME_SCHEMES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "min-w-0 rounded-2xl border border-primary/25 bg-powder p-5 text-powder-foreground shadow-card sm:p-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-4xl text-powder-muted",
					children: s.volume
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-4 gap-2",
					"aria-label": s.formula,
					children: s.sequence.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex h-11 min-w-0 items-center justify-center rounded-lg border border-powder-muted/30 font-sans text-xl font-semibold",
						children: n
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 font-sans text-base font-medium",
					children: s.formula
				})
			]
		}, s.volume))
	});
}
function LessonBlocks({ blocks }) {
	const unfinished = /готовятся к добавлению|авторская версия пока не предоставлена|добавить авторск|пока не предоставлены|место для фото\s*\/\s*схемы/i;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "lesson-reading space-y-5 text-base leading-relaxed sm:space-y-6 sm:text-lg",
		children: blocks.map((b, i) => {
			if (b.type === "note" && unfinished.test(`${b.title ?? ""} ${b.text}`) || b.type === "text" && unfinished.test(b.text) || b.type === "image" && (!b.src || unfinished.test(b.caption))) return null;
			switch (b.type) {
				case "heading": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-5 first:pt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-5 hairline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "lesson-section-title text-3xl leading-tight text-foreground sm:text-4xl",
						children: b.text
					})]
				}, i);
				case "volumes": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[24px] border border-primary/15 bg-black/10 p-3 sm:p-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeSchemes, {})
				}, i);
				case "text": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-[22px] border border-primary/12 bg-black/[.08] px-5 py-5 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-[1.85] text-foreground/90",
						children: b.text
					})
				}, i);
				case "list": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-[24px] border border-primary/15 bg-card/45 p-5 sm:p-7",
					children: [b.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mb-5 text-2xl leading-snug sm:text-3xl",
						children: b.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: b.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-primary/35 bg-primary/[.07]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 leading-relaxed text-foreground/90",
								children: it
							})]
						}, it))
					})]
				}, i);
				case "steps": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [b.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-5 text-2xl leading-snug sm:text-3xl",
					children: b.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid gap-3",
					children: b.items.map((it, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 rounded-[22px] border border-primary/15 bg-card/45 p-5 transition hover:border-primary/30 sm:p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-3xl italic text-primary/90",
							children: String(n + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-0 pt-1 leading-relaxed text-foreground/90",
							children: it
						})]
					}, it))
				})] }, i);
				case "note":
					if (b.tone === "warning") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "rounded-[24px] border border-accent/30 bg-accent/[.06] px-5 py-6 sm:px-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-1 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2 font-serif text-2xl",
								children: b.title === "Запомни" ? "Важно" : b.title ?? "Важно"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "leading-[1.8] text-foreground/90",
								children: b.text
							})] })]
						})
					}, i);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "vera-tip relative overflow-hidden rounded-[26px] border border-primary/25 px-6 py-7 sm:px-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute right-6 top-0 font-serif text-8xl leading-none text-primary/10",
							children: "“"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-3 font-serif text-2xl italic text-primary sm:text-3xl",
								children: b.title === "Запомни" ? "Совет от Веры" : b.title ?? "Совет от Веры"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "max-w-3xl leading-[1.85] text-foreground/90",
								children: b.text
							})]
						})]
					}, i);
				case "image": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-[26px] border border-primary/20 bg-card/50 p-2 shadow-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: b.src,
						alt: b.caption,
						loading: "lazy",
						className: "w-full rounded-[20px] object-cover"
					}), b.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mx-auto max-w-2xl px-4 py-4 text-center text-sm leading-relaxed text-muted-foreground",
						children: b.caption
					})]
				}, i);
				case "video": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "overflow-hidden rounded-[26px] border border-primary/20 bg-card/50 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video overflow-hidden rounded-[20px] bg-black/20",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: b.url,
							className: "h-full w-full",
							allowFullScreen: true,
							title: b.caption ?? "Видео"
						})
					}), b.caption && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "p-4 text-center text-sm text-muted-foreground",
						children: b.caption
					})]
				}, i);
			}
		})
	});
}
function Lessons() {
	const previews = MODULES.flatMap((m) => m.lessons.filter((l) => l.preview).map((l) => ({
		m,
		l
	})));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
		eyebrow: "Примеры уроков",
		title: "Как устроены уроки",
		children: "Несколько фрагментов из курса. Полный доступ — в личном кабинете после покупки."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-3xl space-y-10 px-5",
		children: [previews.map(({ m, l }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border-b border-border pb-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "eyebrow",
					children: [
						"Модуль ",
						m.number,
						" · ",
						m.title
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-3xl md:text-4xl",
					children: l.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline my-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonBlocks, { blocks: l.blocks })
			]
		}, l.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyBlock, { align: "center" })
		})]
	})] });
}
//#endregion
export { Lessons as component };
