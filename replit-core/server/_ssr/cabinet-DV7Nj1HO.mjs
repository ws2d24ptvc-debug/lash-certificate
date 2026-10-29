import { r as __toESM } from "../_runtime.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { r as cn } from "./button-gdPi6aRJ.mjs";
import { C as ArrowRight, y as Check } from "../_libs/lucide-react.mjs";
import { t as CabinetShell } from "./CabinetShell-Dvv6tuCM.mjs";
import { n as MODULES, t as ALL_LESSONS } from "./course-DCHoWY_f.mjs";
import { n as ProgressIndicator, t as Progress$1 } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cabinet-DV7Nj1HO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Progress$1.displayName;
var pics = [
	"/IMG_4573.PNG",
	"/785E2886-A06B-4B87-92F7-9B446CE16CFC.PNG",
	"/65C61FC5-947F-4ADC-8A33-722D152D58A8.PNG",
	"https://puravidalash.com/cdn/shop/articles/higiene-extensiones-de-pesta-as.png?v=1754043373&width=1500",
	"https://thelashchickpro.com/cdn/shop/products/eye-pads-10-pack-159237.jpg?v=1691075224",
	"https://www.m24.ru/b/d/nBkSUhL2h1Alkcy3Ib6BrNOp2Z318Ji-miDHnvyDoGuQYX7XByXLjCdwu5tI-BaO-42NvWWBK8AqGfS8kjIzIymM8G1N_xHb1A%3Di0LQ7CNcYkbk0SB9IAbNEw.jpg",
	"https://cdn.shopify.com/s/files/1/0487/7090/8325/files/How_do_you_put_on_lash_fans_480x480.jpg?v=1645417010",
	"https://stacylash.com/cdn/shop/articles/choosing-the-right-eyelash-extension-style-for-your-clients-4083491.jpg?v=1772631159",
	"https://static.wixstatic.com/media/b2590d_bc40703c88c34b4c9f39584f62114e64~mv2.jpg",
	"https://lashbomb.com/cdn/shop/files/creamremover.png?v=1712875993&width=1500",
	"https://cdn.shopify.com/s/files/1/0620/7556/8218/files/Artboard_1_copy_3_f280e99a-ca53-449f-8fc0-9ec5e95dc792.png?v=1779760811",
	"https://www.royallashesstudio.ca/img/hero-lashes-main.jpg",
	"https://m.beautybro.ru/upload/dev2fun.imagecompress/webp/blog-articles/remuver/4.3.webp",
	"https://prettylittlelashsupplies.com.au/cdn/shop/articles/ChatGPT_Image_May_25_2026_07_00_56_AM.jpg?v=1779656501"
];
var NON_STUDENT_PROGRESS_LESSONS = /* @__PURE__ */ new Set([
	"osnovy-cikl",
	"osnovy-protivopokazaniya",
	"prodvizhenie-start"
]);
function Cabinet() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CabinetShell, { children: (s) => {
		const ids = Array.from(s.completed ?? []), done = (id) => ids.includes(id), courseLessons = ALL_LESSONS.filter((l) => !NON_STUDENT_PROGRESS_LESSONS.has(l.id)), total = courseLessons.length, n = courseLessons.filter((l) => done(l.id)).length, p = total ? Math.round(n / total * 100) : 0, next = courseLessons.find((l) => !done(l.id)), certificateUnlocked = total > 0 && n === total, dm = MODULES.slice(0, 13).filter((m) => {
			const lessons = m.lessons.filter((l) => !NON_STUDENT_PROGRESS_LESSONS.has(l.id));
			return lessons.length > 0 && lessons.every((l) => done(l.id));
		}).length;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "home",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: css }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "welcome",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "welcomeHero",
						src: "/4F5EB1B9-F85A-43F5-9BB4-BECC27BFA595.PNG",
						alt: "Онлайн-курс по наращиванию ресниц — с нуля до мастера"
					}), next && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						className: "heroClick",
						to: "/lesson/$lessonId",
						params: { lessonId: next.id },
						"aria-label": n ? "Продолжить обучение" : "Начать обучение"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "progressBox",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ТВОЙ ПРОГРЕСС" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [p, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "%" })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bar",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Пройдено ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: dm }),
								" из 13 учебных модулей"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								value: p,
								className: "h-2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n === 0 ? "Всё начинается с первого шага ♡" : p === 100 ? "Курс пройден — отличный результат ♡" : "Продолжай — у тебя отлично получается ♡" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ПРОГРАММА ОБУЧЕНИЯ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Твои модули" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "01 — 14" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "modules",
					children: MODULES.map((m, i) => {
						const first = m.lessons[0], progressLessons = m.lessons.filter((l) => !NON_STUDENT_PROGRESS_LESSONS.has(l.id)), complete = progressLessons.length > 0 && progressLessons.every((l) => done(l.id)), started = progressLessons.some((l) => done(l.id));
						if (i === 0 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/746E6A51-A5F1-429B-B8CC-48C7F2D007A3.PNG",
									alt: "Модуль 1 — Профессия lash-мастер и основы работы"
								})
							})
						}, m.id);
						if (i === 1 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/785E2886-A06B-4B87-92F7-9B446CE16CFC.PNG",
									alt: "Модуль 2 — Глаз и ресницы"
								})
							})
						}, m.id);
						if (i === 2 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/65C61FC5-947F-4ADC-8A33-722D152D58A8.PNG",
									alt: "Модуль 3 — Материалы и инструменты"
								})
							})
						}, m.id);
						if (i === 3 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/Yvhjbg.PNG",
									alt: "Модуль 4 — Безопасность, гигиена и обработка инструментов"
								})
							})
						}, m.id);
						if (i === 4 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/7D521637-9E9A-47CF-ABE0-310F75EC25CD.PNG",
									alt: "Модуль 5"
								})
							})
						}, m.id);
						if (i === 5 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/Ppppppp.PNG",
									alt: "Модуль 6 — Практика"
								})
							})
						}, m.id);
						if (i === 6 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 7 — Классическое наращивание 1D",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/C422E4CE-6585-453F-B280-676D04845B9F.PNG",
									alt: "Модуль 7 — Классическое наращивание 1D"
								})
							})
						}, m.id);
						if (i === 7 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 8 — Эффекты и схемы",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/2EA4FF6A-DA5A-45A6-BECD-3EA04DE090D6.PNG",
									alt: "Модуль 8 — Эффекты и схемы"
								})
							})
						}, m.id);
						if (i === 8 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 9 — Объёмные техники",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/C1E03794-5EB4-4FC3-AD6A-21795907586B.PNG",
									alt: "Модуль 9 — Объёмные техники"
								})
							})
						}, m.id);
						if (i === 9 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 10 — Уход и рекомендации",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/FC362664-FF35-4E44-A3BC-C5759A2E67A7.PNG",
									alt: "Модуль 10 — Уход и рекомендации"
								})
							})
						}, m.id);
						if (i === 10 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 11 — Снятие и новое наращивание",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/ABA61218-5070-4828-8A31-0DF57830FB83.PNG",
									alt: "Модуль 11 — Снятие и новое наращивание"
								})
							})
						}, m.id);
						if (i === 11 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 12 — Продвижение и соцсети",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/03646681-AC73-4C53-896A-CAD83940C894.PNG",
									alt: "Модуль 12 — Продвижение и соцсети"
								})
							})
						}, m.id);
						if (i === 12 && first) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: "module moduleApproved moduleFit",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": "Начать модуль 13 — Формирование прайса и работа с клиентками",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/15C8523C-F63F-4E3C-9A1C-2ED81D71F953.PNG",
									alt: "Модуль 13 — Формирование прайса и работа с клиентками"
								})
							})
						}, m.id);
						if (i === 13) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: `module moduleApproved moduleFit certificateModule ${certificateUnlocked ? "certificateUnlocked" : "certificateLocked"}`,
							children: certificateUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "moduleApprovedLink",
								to: "/certificate",
								"aria-label": "Открыть модуль 14 — Сертификат",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/Нооо Олд.PNG",
									alt: "Модуль 14 — Сертификат"
								})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "moduleApprovedLink",
								"aria-label": "Модуль 14 — Сертификат. Откроется после завершения всех уроков",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/Нооо Олд.PNG",
									alt: "Модуль 14 — Сертификат"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "certificateLock",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "🔒" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Откроется после завершения всех уроков" })]
								})]
							})
						}, m.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
							className: `module ${complete ? "complete" : ""}`,
							children: first ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								className: "moduleLink",
								to: "/lesson/$lessonId",
								params: { lessonId: first.id },
								"aria-label": `Открыть модуль ${m.number}: ${m.title}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "photo",
									style: { backgroundImage: `linear-gradient(180deg,rgba(9,6,5,.03) 20%,rgba(9,6,5,.96) 100%),url(${pics[i]})` },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "num",
										children: String(m.number).padStart(2, "0")
									}), complete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "done",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {})
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "copy",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["МОДУЛЬ ", m.number] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: m.title }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "openLink",
											children: [complete ? "Повторить" : started ? "Продолжить" : "Открыть модуль", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
										})
									]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "photo",
								style: { backgroundImage: `linear-gradient(180deg,rgba(9,6,5,.03) 20%,rgba(9,6,5,.96) 100%),url(${pics[i]})` },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "num",
									children: String(m.number).padStart(2, "0")
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "copy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: ["МОДУЛЬ ", m.number] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: m.title })]
							})] })
						}, m.id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "final",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ФИНАЛ КУРСА" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Ты справишься." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Шаг за шагом ты соберёшь знания, практику и уверенность для самостоятельной работы." }),
						certificateUnlocked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/certificate",
							children: ["Мой результат ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "finalLocked",
							children: "Сертификат откроется после завершения курса"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "finalBrand",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "⌒" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "LASH" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "ACADEMY" })
						]
					})]
				})
			]
		});
	} });
}
var css = `
.home{max-width:1120px;margin:0 auto;padding:18px 18px 60px;color:#f7eee8}.welcome{position:relative;overflow:hidden;border:1px solid #35251e;background:#0c0907}.welcomeHero{display:block;width:100%;height:auto}.heroClick{position:absolute;inset:0;z-index:2}.progressBox{margin:12px 0 40px;border:1px solid #35251e;background:#120d0a;display:grid;grid-template-columns:220px 1fr;align-items:center;padding:18px 24px}.progressBox>div:first-child{display:flex;align-items:center;gap:18px}.progressBox small,.heading small,.copy>small,.final small{font-size:8px;letter-spacing:.25em;color:#c88966}.progressBox strong{font-family:var(--font-serif);font-size:38px;color:#e1a17b;font-weight:400}.progressBox sup{font-family:var(--font-sans);font-size:10px}.bar p{font-size:10px;color:#c7b9b0;margin-bottom:8px}.bar span{display:block;font-family:var(--font-serif);font-style:italic;font-size:11px;color:#8e7668;margin-top:8px}.heading{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid #34241d;padding-bottom:14px;margin-bottom:18px}.heading h2{font-family:var(--font-serif);font-size:40px;font-weight:400;color:#e7b18c;margin-top:3px}.heading>span{font-family:var(--font-serif);font-size:13px;color:#80695c}.modules{display:grid;grid-template-columns:repeat(3,1fr);gap:15px;align-items:start}.module{border:1px solid #35251e;background:#100b09;overflow:hidden;transition:.2s;height:340px}.module:hover{transform:translateY(-2px);border-color:#80533e}.moduleLink{display:block;color:inherit;text-decoration:none;height:100%}.moduleApproved{background:#000;height:auto}.moduleApprovedLink{display:block;width:100%;height:auto;line-height:0;overflow:hidden;position:relative}.moduleApproved img{display:block;width:100%;height:auto}.moduleFit{padding:0;height:auto}.moduleFit .moduleApprovedLink{display:block;width:100%;height:auto}.moduleFit img{display:block;width:100%;height:auto;max-width:100%;object-fit:initial}.certificateLocked img{filter:brightness(.42);opacity:.75}.certificateLock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:rgba(8,5,4,.28);line-height:1.3;text-align:center;padding:20px}.certificateLock b{font-size:26px}.certificateLock span{font-size:10px;letter-spacing:.08em;color:#f2dfd3;max-width:220px}.finalLocked{display:inline-block;color:#9f887b;font-size:9px;letter-spacing:.05em;border:1px solid #4a352b;padding:10px 13px}.photo{height:190px;background-size:cover;background-position:center;position:relative}.num{position:absolute;top:12px;left:14px;font-family:var(--font-serif);font-size:26px;color:#f1ded1;text-shadow:0 2px 8px #000}.done{position:absolute;right:12px;top:12px;width:25px;height:25px;border-radius:50%;background:#d99a73;color:#21120d;display:grid;place-items:center}.done svg{width:13px}.copy{height:150px;padding:16px;display:flex;flex-direction:column;align-items:flex-start}.copy h3{font-family:var(--font-serif);font-size:18px;line-height:1.08;font-weight:400;margin:7px 0 16px;color:#f0dfd4}.openLink{margin-top:auto;display:inline-flex;align-items:center;gap:12px;color:#d99a73;font-size:9px;border-bottom:1px solid #714a38;padding-bottom:4px}.complete{border-color:#654333}.final{margin-top:18px;min-height:260px;border:1px solid #3a281f;background:radial-gradient(circle at 80% 50%,#4a281b 0,transparent 28%),linear-gradient(120deg,#0d0907,#160e0a);display:grid;grid-template-columns:1.4fr .6fr;align-items:center;padding:38px 50px}.final h2{font-family:var(--font-serif);font-size:46px;font-weight:400;color:#e4a67f;margin:5px 0 10px}.final p{font-size:11px;line-height:1.6;color:#bfaea4;max-width:480px;margin-bottom:20px}.final a{display:inline-flex;align-items:center;gap:20px;padding:12px 17px;background:#d99a73;color:#1b100c;font-size:9px;font-weight:800;letter-spacing:.08em}.final a svg,.openLink svg{width:13px}.finalBrand{display:flex;flex-direction:column;align-items:center}.finalBrand span{font-size:85px;line-height:.45;color:#d99a73}.finalBrand b{font-family:var(--font-serif);font-size:24px;color:#e4ad88;margin-top:30px}.finalBrand small{font-size:7px!important}
@media(max-width:767px){.academy-content{padding-left:0!important;padding-right:0!important}.home{padding:8px 9px 35px;width:100%;overflow-x:hidden}.progressBox{grid-template-columns:105px minmax(0,1fr);padding:11px 12px;margin:8px 0 27px}.progressBox>div:first-child{display:block}.progressBox small{font-size:5.8px}.progressBox strong{display:block;font-size:28px;margin-top:2px}.bar{min-width:0}.bar p{font-size:7.5px;margin-bottom:6px}.bar span{font-size:8px;margin-top:5px}.heading{margin-bottom:10px;padding-bottom:9px}.heading small{font-size:6px}.heading h2{font-size:28px}.heading>span{font-size:9px}.modules{grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;align-items:start}.module{min-width:0;height:243px}.moduleApproved{height:auto}.photo{height:118px}.copy{height:125px;min-height:0;padding:10px}.moduleApprovedLink{height:auto}.moduleApproved img{width:100%;height:auto}.moduleFit{height:auto;display:block}.moduleFit .moduleApprovedLink{width:100%;height:auto;display:block}.moduleFit img{display:block;width:100%;height:auto;object-fit:initial;background:transparent}.certificateLock{padding:10px;gap:7px}.certificateLock b{font-size:19px}.certificateLock span{font-size:7px}.num{font-size:18px;top:8px;left:9px}.copy>small{font-size:5.7px}.copy h3{font-size:13px;line-height:1.08;margin:5px 0 10px;overflow-wrap:anywhere}.openLink{font-size:7.5px;gap:7px}.final{min-height:200px;margin-top:9px;grid-template-columns:minmax(0,1.4fr) minmax(70px,.6fr);padding:22px 15px}.final small{font-size:6px}.final h2{font-size:29px}.final p{font-size:8px;margin-bottom:13px}.final a{font-size:7.5px;padding:8px 9px;gap:8px}.finalLocked{font-size:6.5px;padding:7px 8px}.finalBrand span{font-size:55px}.finalBrand b{font-size:13px;margin-top:20px}.finalBrand small{font-size:4.5px!important}}
`;
//#endregion
export { Cabinet as component };
