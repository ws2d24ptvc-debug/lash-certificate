import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { C as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as BuyBlock } from "./BuyBlock-BpkO2Ysu.mjs";
import { n as PageShell } from "./PageShell-BRoi05WO.mjs";
import { n as MODULES } from "./course-DCHoWY_f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D0IVbvSn.js
var import_jsx_runtime = require_jsx_runtime();
var vera_lushina_default = "/assets/vera-lushina-C0kgxQQ7.jpg";
var editorial = { fontFamily: "Georgia,\"Times New Roman\",serif" };
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "public-academy-hero",
			style: {
				display: "block",
				minHeight: "auto",
				maxWidth: "1120px",
				paddingTop: "72px",
				paddingBottom: "72px"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "public-academy-copy",
				style: { maxWidth: "850px" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "eyebrow",
						children: "ОНЛАЙН-КУРС · ВЕРА ЛУШИНА"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						style: {
							...editorial,
							fontSize: "clamp(42px,11vw,108px)",
							fontWeight: 400,
							letterSpacing: "-.055em"
						},
						children: [
							"НАРАЩИВАНИЕ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"РЕСНИЦ"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							...editorial,
							fontSize: "clamp(30px,5vw,48px)",
							fontStyle: "italic",
							color: "#dfb28f",
							marginTop: "18px"
						},
						children: "с нуля до мастера"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Пошаговое обучение профессии lash-мастера: от базы и постановки руки до красивой, чистой и уверенной самостоятельной работы." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "public-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/auth",
							className: "academy-primary-btn",
							children: ["Начать обучение ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/program",
							className: "academy-outline-btn",
							children: ["Программа курса ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "public-intro",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "eyebrow",
				children: "LASH ACADEMY"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				style: {
					...editorial,
					fontWeight: 400
				},
				children: [
					"Обучение, где",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "всё по шагам" })
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Курс выстроен как единый путь: каждый следующий модуль продолжает предыдущий. Без хаоса и перегруженной теории — от понимания основ до самостоятельной практики." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					...editorial,
					fontSize: "28px",
					fontStyle: "italic",
					color: "#dfb28f",
					marginTop: "22px"
				},
				children: "Спокойно. Последовательно. С пониманием каждого действия."
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "public-module-preview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "academy-section-title",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "ПРОГРАММА ОБУЧЕНИЯ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					style: {
						...editorial,
						fontWeight: 400,
						fontSize: "clamp(38px,5vw,58px)"
					},
					children: "Твой путь в профессии"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/program",
					children: ["Все 14 модулей ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "academy-module-grid",
				children: MODULES.slice(0, 6).map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
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
									fontSize: "27px",
									lineHeight: 1.05,
									letterSpacing: "-.02em"
								},
								children: m.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: m.description }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/program",
								children: ["Подробнее ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
							})
						]
					})]
				}, m.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "public-about",
			style: { alignItems: "start" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "public-about-photo",
				style: {
					height: "clamp(420px,65vw,620px)",
					borderRadius: "12px 70px 12px 12px",
					overflow: "hidden"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: vera_lushina_default,
					alt: "Вера Лушина",
					style: {
						width: "100%",
						height: "100%",
						objectFit: "cover",
						objectPosition: "center 28%"
					}
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "ДАВАЙТЕ ЗНАКОМИТЬСЯ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						...editorial,
						fontWeight: 400,
						lineHeight: .9
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							display: "block",
							fontSize: ".58em",
							letterSpacing: ".02em",
							color: "#e7c9b5"
						},
						children: "Меня зовут"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						style: {
							display: "block",
							fontWeight: 400,
							fontStyle: "italic",
							fontSize: "1.28em",
							color: "#d99c74"
						},
						children: "Вера"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 leading-relaxed text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg text-foreground",
							children: ["Я — ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "практикующий lash-мастер и преподаватель с более чем 10-летним опытом работы в сфере наращивания ресниц." })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "За эти годы я прошла путь от первых неуверенных работ до мастера, который не только работает с клиентами, но и обучает других мастеров профессии." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Я прекрасно помню, как сложно бывает в начале: поставить руку, научиться правильно изолировать ресницы, разобраться в материалах, схемах, объёмах и эффектах. Поэтому свой курс я создала так, чтобы объяснять сложные вещи простым и понятным языком — пошагово, от самых основ до уверенной самостоятельной работы." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "В этом обучении я собрала не просто теорию, а знания и практический опыт, накопленные за более чем 10 лет работы и преподавания: техники, рабочие схемы, профессиональные нюансы и ошибки, с которыми чаще всего сталкиваются начинающие мастера." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Моя задача — не просто показать вам, как наращивать ресницы, а помочь понять почему мы делаем именно так, научиться видеть свою работу и постепенно сформировать уверенную руку мастера." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: {
								...editorial,
								fontStyle: "italic",
								fontSize: "24px",
								color: "#dfb28f"
							},
							children: "Я буду рядом с вами на этом пути — от первых ресниц до первых красивых и уверенных работ. ♡"
						})
					]
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "public-final",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow",
					children: "LASH ACADEMY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					style: {
						...editorial,
						fontWeight: 400
					},
					children: [
						"Начни свой путь",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "в профессию" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "14 последовательных модулей — от первых знаний до самостоятельной практики." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuyBlock, { align: "center" })
			]
		})
	] });
}
//#endregion
export { Index as component };
