globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/4F5EB1B9-F85A-43F5-9BB4-BECC27BFA595.PNG": {
		"type": "image/png",
		"etag": "\"a81ad-EIUxquoxo7g15ByQdT+gAjiFXKk\"",
		"mtime": "2026-10-29T15:12:49.390Z",
		"size": 688557,
		"path": "../public/4F5EB1B9-F85A-43F5-9BB4-BECC27BFA595.PNG"
	},
	"/03646681-AC73-4C53-896A-CAD83940C894.PNG": {
		"type": "image/png",
		"etag": "\"1a8380-uTIPu/oV3AYzdw8DTMbMV5JXH4k\"",
		"mtime": "2026-10-29T15:12:49.380Z",
		"size": 1737600,
		"path": "../public/03646681-AC73-4C53-896A-CAD83940C894.PNG"
	},
	"/15C8523C-F63F-4E3C-9A1C-2ED81D71F953.PNG": {
		"type": "image/png",
		"etag": "\"1c8e15-BaE6C3008kXJ2bmTG/WnbTISfHM\"",
		"mtime": "2026-10-29T15:12:49.382Z",
		"size": 1871381,
		"path": "../public/15C8523C-F63F-4E3C-9A1C-2ED81D71F953.PNG"
	},
	"/43313B29-AE21-42E4-AE03-2A7E40C8BD38.PNG": {
		"type": "image/png",
		"etag": "\"1feb63-fLg1e3f7tjMus5WmzMO2+naObus\"",
		"mtime": "2026-10-29T15:12:49.387Z",
		"size": 2091875,
		"path": "../public/43313B29-AE21-42E4-AE03-2A7E40C8BD38.PNG"
	},
	"/    modul4-1-new.png.PNG": {
		"type": "image/png",
		"etag": "\"1feb63-fLg1e3f7tjMus5WmzMO2+naObus\"",
		"mtime": "2026-10-29T15:12:49.380Z",
		"size": 2091875,
		"path": "../public/    modul4-1-new.png.PNG"
	},
	"/746E6A51-A5F1-429B-B8CC-48C7F2D007A3.PNG": {
		"type": "image/png",
		"etag": "\"19553c-rXuDqoSlhC2G59VgMomDgpb/y/A\"",
		"mtime": "2026-10-29T15:12:49.398Z",
		"size": 1660220,
		"path": "../public/746E6A51-A5F1-429B-B8CC-48C7F2D007A3.PNG"
	},
	"/    modul4-2-new.png.PNG": {
		"type": "image/png",
		"etag": "\"22209f-88p06Eld7ZvKpT5oOcuKgNM9Hts\"",
		"mtime": "2026-10-29T15:12:49.382Z",
		"size": 2236575,
		"path": "../public/    modul4-2-new.png.PNG"
	},
	"/29DCC8A4-A148-400E-8E4C-C81E3EC62A72.PNG": {
		"type": "image/png",
		"etag": "\"26537a-dClPcmtbepYqu/ZEuCVl8bXahv4\"",
		"mtime": "2026-10-29T15:12:49.384Z",
		"size": 2511738,
		"path": "../public/29DCC8A4-A148-400E-8E4C-C81E3EC62A72.PNG"
	},
	"/42FBB371-FBF0-4046-B04E-10BA4F0FF1B6.PNG": {
		"type": "image/png",
		"etag": "\"20af5c-sCTClsFuUWeJ5yQHWDKvJaXPBAk\"",
		"mtime": "2026-10-29T15:12:49.387Z",
		"size": 2142044,
		"path": "../public/42FBB371-FBF0-4046-B04E-10BA4F0FF1B6.PNG"
	},
	"/5854230B-AD45-481C-9903-AC9687728B8C.PNG": {
		"type": "image/png",
		"etag": "\"21c662-B2zjcnuTKWAQt1yh4OZChtvsHiA\"",
		"mtime": "2026-10-29T15:12:49.390Z",
		"size": 2213474,
		"path": "../public/5854230B-AD45-481C-9903-AC9687728B8C.PNG"
	},
	"/65C61FC5-947F-4ADC-8A33-722D152D58A8.PNG": {
		"type": "image/png",
		"etag": "\"1d4057-pLhcZpkjf+YWRjLCmJNi1KMQ0OU\"",
		"mtime": "2026-10-29T15:12:49.393Z",
		"size": 1917015,
		"path": "../public/65C61FC5-947F-4ADC-8A33-722D152D58A8.PNG"
	},
	"/5A6DBB03-0991-4A24-8E0B-2EB548647099.PNG": {
		"type": "image/png",
		"etag": "\"2495fd-P8V/AEnvu7FdwemieEILs0VsnlE\"",
		"mtime": "2026-10-29T15:12:49.394Z",
		"size": 2397693,
		"path": "../public/5A6DBB03-0991-4A24-8E0B-2EB548647099.PNG"
	},
	"/6DBCC1C9-C651-424C-8651-879AD17DD290.PNG": {
		"type": "image/png",
		"etag": "\"201329-k9zxjqdfNGAnqK2jZDP6RlBVTHs\"",
		"mtime": "2026-10-29T15:12:49.395Z",
		"size": 2102057,
		"path": "../public/6DBCC1C9-C651-424C-8651-879AD17DD290.PNG"
	},
	"/59BD064B-ADF8-45C3-8E3A-586C342F8114.PNG": {
		"type": "image/png",
		"etag": "\"1d21df-39XhknisMJeegFuEs7NL8MikmhM\"",
		"mtime": "2026-10-29T15:12:49.390Z",
		"size": 1909215,
		"path": "../public/59BD064B-ADF8-45C3-8E3A-586C342F8114.PNG"
	},
	"/11B7F3FE-3A4D-4B3A-9803-FC74A7A14866.PNG": {
		"type": "image/png",
		"etag": "\"2444ae-+MTeT7EvnIvW/wzEu1jI5mwIXcw\"",
		"mtime": "2026-10-29T15:12:49.388Z",
		"size": 2376878,
		"path": "../public/11B7F3FE-3A4D-4B3A-9803-FC74A7A14866.PNG"
	},
	"/2EA4FF6A-DA5A-45A6-BECD-3EA04DE090D6.PNG": {
		"type": "image/png",
		"etag": "\"27d084-Td5vklUZs3r97GXW+L4Kt4AnLfk\"",
		"mtime": "2026-10-29T15:12:49.384Z",
		"size": 2609284,
		"path": "../public/2EA4FF6A-DA5A-45A6-BECD-3EA04DE090D6.PNG"
	},
	"/43124A7F-3D3D-4AC6-ABE4-146B7062C8C2.PNG": {
		"type": "image/png",
		"etag": "\"234444-1XWAYWwOAYXa7dDU/8Gcd0pZi9k\"",
		"mtime": "2026-10-29T15:12:49.387Z",
		"size": 2311236,
		"path": "../public/43124A7F-3D3D-4AC6-ABE4-146B7062C8C2.PNG"
	},
	"/45ABBB83-F597-47FE-950B-7FB4E5B11EC9.PNG": {
		"type": "image/png",
		"etag": "\"284066-7NlI8FZRp+S1dDRg2H8pdACBK/I\"",
		"mtime": "2026-10-29T15:12:49.390Z",
		"size": 2637926,
		"path": "../public/45ABBB83-F597-47FE-950B-7FB4E5B11EC9.PNG"
	},
	"/694427F7-F514-446A-B31F-F1C2BAF9BF1A.PNG": {
		"type": "image/png",
		"etag": "\"299b48-C1mF7XEFWEaCiIsXhufGuxaFlSo\"",
		"mtime": "2026-10-29T15:12:49.394Z",
		"size": 2726728,
		"path": "../public/694427F7-F514-446A-B31F-F1C2BAF9BF1A.PNG"
	},
	"/6FEA714B-DF3F-414B-9A62-E70DCACF1A33.PNG": {
		"type": "image/png",
		"etag": "\"2c5607-DreISVv5GBgUCUuh7omls7Zxp7g\"",
		"mtime": "2026-10-29T15:12:49.399Z",
		"size": 2905607,
		"path": "../public/6FEA714B-DF3F-414B-9A62-E70DCACF1A33.PNG"
	},
	"/315CF89B-1FC3-4165-9B4A-77899408C50E.PNG": {
		"type": "image/png",
		"etag": "\"28f84b-+kLtWD7qLb28xLBo9fShqZ18LPE\"",
		"mtime": "2026-10-29T15:12:49.385Z",
		"size": 2685003,
		"path": "../public/315CF89B-1FC3-4165-9B4A-77899408C50E.PNG"
	},
	"/71634E94-A3CC-48FE-8E7C-5F470E1664E8.PNG": {
		"type": "image/png",
		"etag": "\"2af289-TiLr5W0U+j6uaNIKKqM8CNgp/Cc\"",
		"mtime": "2026-10-29T15:12:49.399Z",
		"size": 2814601,
		"path": "../public/71634E94-A3CC-48FE-8E7C-5F470E1664E8.PNG"
	},
	"/74C195D5-ED7E-42A4-B550-3629875C29C4.PNG": {
		"type": "image/png",
		"etag": "\"26bfc4-ngo3R2cA8d53TvKab6ct9OAzqSQ\"",
		"mtime": "2026-10-29T15:12:49.398Z",
		"size": 2539460,
		"path": "../public/74C195D5-ED7E-42A4-B550-3629875C29C4.PNG"
	},
	"/6B6161E2-DCBE-49A2-A7EB-18B9442E4DFB.PNG": {
		"type": "image/png",
		"etag": "\"22e78a-bm7HKIJaLNzNDoXa8ZGVra2MBsU\"",
		"mtime": "2026-10-29T15:12:49.394Z",
		"size": 2287498,
		"path": "../public/6B6161E2-DCBE-49A2-A7EB-18B9442E4DFB.PNG"
	},
	"/756918F4-D959-4AE8-89CB-C813F236B33D.PNG": {
		"type": "image/png",
		"etag": "\"24e9d4-EZxstgOnk0K/bZ6DcZ+ENrc3bvI\"",
		"mtime": "2026-10-29T15:12:49.399Z",
		"size": 2419156,
		"path": "../public/756918F4-D959-4AE8-89CB-C813F236B33D.PNG"
	},
	"/833E790C-03FF-4743-A995-E4465BEC42C3.JPEG": {
		"type": "image/jpeg",
		"etag": "\"8936d-xly0sZlvIHprEPuiAOFXUQ5iTh4\"",
		"mtime": "2026-10-29T15:12:49.403Z",
		"size": 562029,
		"path": "../public/833E790C-03FF-4743-A995-E4465BEC42C3.JPEG"
	},
	"/77F20263-81BB-46E3-BE97-5CB6D30E1163.PNG": {
		"type": "image/png",
		"etag": "\"2263a1-4PT2QbW9Q6OjyiW9GrMXlXOa2+w\"",
		"mtime": "2026-10-29T15:12:49.402Z",
		"size": 2253729,
		"path": "../public/77F20263-81BB-46E3-BE97-5CB6D30E1163.PNG"
	},
	"/7A2BA8DD-6163-4044-BC6A-6198F3A68B00.PNG": {
		"type": "image/png",
		"etag": "\"1c6200-lSpstgv+RU1q00PybqSG4dMFd24\"",
		"mtime": "2026-10-29T15:12:49.403Z",
		"size": 1860096,
		"path": "../public/7A2BA8DD-6163-4044-BC6A-6198F3A68B00.PNG"
	},
	"/77FA1263-6946-493F-8808-A1F6EA7099A7.PNG": {
		"type": "image/png",
		"etag": "\"22209f-88p06Eld7ZvKpT5oOcuKgNM9Hts\"",
		"mtime": "2026-10-29T15:12:49.401Z",
		"size": 2236575,
		"path": "../public/77FA1263-6946-493F-8808-A1F6EA7099A7.PNG"
	},
	"/7812B8FD-314A-45AE-A980-E68B21FC6BB7.PNG": {
		"type": "image/png",
		"etag": "\"24fb69-aikaTyL6OePCotttB+22ap6MZ+4\"",
		"mtime": "2026-10-29T15:12:49.402Z",
		"size": 2423657,
		"path": "../public/7812B8FD-314A-45AE-A980-E68B21FC6BB7.PNG"
	},
	"/785E2886-A06B-4B87-92F7-9B446CE16CFC.PNG": {
		"type": "image/png",
		"etag": "\"2251f0-xBlKX3q/zEsvWlXX1V68E3cpI3k\"",
		"mtime": "2026-10-29T15:12:49.402Z",
		"size": 2249200,
		"path": "../public/785E2886-A06B-4B87-92F7-9B446CE16CFC.PNG"
	},
	"/ABA61218-5070-4828-8A31-0DF57830FB83.PNG": {
		"type": "image/png",
		"etag": "\"1ba5ec-M7yV7QEy4LfQqy0dX14NZuGizYg\"",
		"mtime": "2026-10-29T15:12:49.409Z",
		"size": 1811948,
		"path": "../public/ABA61218-5070-4828-8A31-0DF57830FB83.PNG"
	},
	"/844EF2C7-3CC2-4E00-8A61-3981BF67211F.PNG": {
		"type": "image/png",
		"etag": "\"226ccd-+X0X7/NMluO4o1uTIDy6oEzht+U\"",
		"mtime": "2026-10-29T15:12:49.404Z",
		"size": 2256077,
		"path": "../public/844EF2C7-3CC2-4E00-8A61-3981BF67211F.PNG"
	},
	"/9B70AD2E-D802-4776-93BB-AD6650E9D517.PNG": {
		"type": "image/png",
		"etag": "\"22f1eb-QfBlcRPW0DwDS7IYPczBTEYP07Q\"",
		"mtime": "2026-10-29T15:12:49.406Z",
		"size": 2290155,
		"path": "../public/9B70AD2E-D802-4776-93BB-AD6650E9D517.PNG"
	},
	"/9C9847FC-BCD2-48A6-9388-A2F0E96B7DE7.PNG": {
		"type": "image/png",
		"etag": "\"222208-Ngu/g2w3daFiPNIaYczXrkSxu60\"",
		"mtime": "2026-10-29T15:12:49.406Z",
		"size": 2236936,
		"path": "../public/9C9847FC-BCD2-48A6-9388-A2F0E96B7DE7.PNG"
	},
	"/A15CB9E7-8366-43EE-A778-D7BF7BEB8433.PNG": {
		"type": "image/png",
		"etag": "\"21cb07-HUGZD2Eba602SmBynGQiKkKB4yU\"",
		"mtime": "2026-10-29T15:12:49.409Z",
		"size": 2214663,
		"path": "../public/A15CB9E7-8366-43EE-A778-D7BF7BEB8433.PNG"
	},
	"/A3CAB6F0-9FFA-47D1-B601-B6A70CDECD6C.PNG": {
		"type": "image/png",
		"etag": "\"24593a-OEGqeqO3fTL5af1cJm7VS753Z4U\"",
		"mtime": "2026-10-29T15:12:49.408Z",
		"size": 2382138,
		"path": "../public/A3CAB6F0-9FFA-47D1-B601-B6A70CDECD6C.PNG"
	},
	"/C1E03794-5EB4-4FC3-AD6A-21795907586B.PNG": {
		"type": "image/png",
		"etag": "\"1ba074-wwPe9Tt10LLdBRwQ52soyMQHlR4\"",
		"mtime": "2026-10-29T15:12:49.478Z",
		"size": 1810548,
		"path": "../public/C1E03794-5EB4-4FC3-AD6A-21795907586B.PNG"
	},
	"/Caving.PNG": {
		"type": "image/png",
		"etag": "\"1feb63-fLg1e3f7tjMus5WmzMO2+naObus\"",
		"mtime": "2026-10-29T15:12:49.479Z",
		"size": 2091875,
		"path": "../public/Caving.PNG"
	},
	"/C422E4CE-6585-453F-B280-676D04845B9F.PNG": {
		"type": "image/png",
		"etag": "\"1f31a4-sCXU8GHvfEI0qbji79C3gM/ztHg\"",
		"mtime": "2026-10-29T15:12:49.479Z",
		"size": 2044324,
		"path": "../public/C422E4CE-6585-453F-B280-676D04845B9F.PNG"
	},
	"/B5D921A6-41F2-4432-9001-80ECB69DD1C8.PNG": {
		"type": "image/png",
		"etag": "\"24441d-dMHD02AUj/LqUqfgkVdYp4nWO/Y\"",
		"mtime": "2026-10-29T15:12:49.451Z",
		"size": 2376733,
		"path": "../public/B5D921A6-41F2-4432-9001-80ECB69DD1C8.PNG"
	},
	"/7D521637-9E9A-47CF-ABE0-310F75EC25CD.PNG": {
		"type": "image/png",
		"etag": "\"2c2dce-knrTxrLv/5ImBDHW98vpZ6yql70\"",
		"mtime": "2026-10-29T15:12:49.407Z",
		"size": 2895310,
		"path": "../public/7D521637-9E9A-47CF-ABE0-310F75EC25CD.PNG"
	},
	"/ABE95799-E22C-4917-A3C0-6E7094B50F4F.PNG": {
		"type": "image/png",
		"etag": "\"22299d-W8bi8u8ajFJrxcYBVpgIh1ecuA4\"",
		"mtime": "2026-10-29T15:12:49.409Z",
		"size": 2238877,
		"path": "../public/ABE95799-E22C-4917-A3C0-6E7094B50F4F.PNG"
	},
	"/B75E6A46-1012-4AF5-9862-6D3ADE18BD26.PNG": {
		"type": "image/png",
		"etag": "\"22a8cf-KYig/MrYw28L71CYvqW9QxdLY9g\"",
		"mtime": "2026-10-29T15:12:49.453Z",
		"size": 2271439,
		"path": "../public/B75E6A46-1012-4AF5-9862-6D3ADE18BD26.PNG"
	},
	"/9082FA4A-3EF6-497D-B033-580B7865638F.PNG": {
		"type": "image/png",
		"etag": "\"2d6d98-UdPNMSEUDGMFe/RYQVWgqIT6ylo\"",
		"mtime": "2026-10-29T15:12:49.405Z",
		"size": 2977176,
		"path": "../public/9082FA4A-3EF6-497D-B033-580B7865638F.PNG"
	},
	"/BDADD85A-3DDE-4528-9092-FBB7CAAB7B19.PNG": {
		"type": "image/png",
		"etag": "\"25329c-CNOtwd9lIx8NVwHTPqn2dfQxSbI\"",
		"mtime": "2026-10-29T15:12:49.454Z",
		"size": 2437788,
		"path": "../public/BDADD85A-3DDE-4528-9092-FBB7CAAB7B19.PNG"
	},
	"/C1931889-16D6-4405-92FF-B437FA1DC2E4.PNG": {
		"type": "image/png",
		"etag": "\"21776f-cGjz78Kth3htSTB03FLcgIrit/c\"",
		"mtime": "2026-10-29T15:12:49.454Z",
		"size": 2193263,
		"path": "../public/C1931889-16D6-4405-92FF-B437FA1DC2E4.PNG"
	},
	"/DF85C76B-F6A5-426B-999B-66656028DDBE.PNG": {
		"type": "image/png",
		"etag": "\"26ccb5-dPwd2+Co3Q4hYjzpti0kqccFVBU\"",
		"mtime": "2026-10-29T15:12:49.480Z",
		"size": 2542773,
		"path": "../public/DF85C76B-F6A5-426B-999B-66656028DDBE.PNG"
	},
	"/E1743758-54B8-4E2E-ADE1-FEFA6799F62A.PNG": {
		"type": "image/png",
		"etag": "\"26896f-vA+xQ2LA31+Zg6cbJ1q0GEOZbk8\"",
		"mtime": "2026-10-29T15:12:49.547Z",
		"size": 2525551,
		"path": "../public/E1743758-54B8-4E2E-ADE1-FEFA6799F62A.PNG"
	},
	"/D9484478-9439-4711-857C-E8D291630EB3.PNG": {
		"type": "image/png",
		"etag": "\"2c5f64-l4dGHwagZE708I2qwivEFMrYAu0\"",
		"mtime": "2026-10-29T15:12:49.480Z",
		"size": 2908004,
		"path": "../public/D9484478-9439-4711-857C-E8D291630EB3.PNG"
	},
	"/IMG_4573.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c012-Uw1BJONSieT0p4cHbGY3GQMOUoM\"",
		"mtime": "2026-10-29T15:12:49.583Z",
		"size": 114706,
		"path": "../public/IMG_4573.jpg"
	},
	"/certificate-template.svg": {
		"type": "image/svg+xml",
		"etag": "\"4ec3-gaEYKSQ0REkem05pCP8BaLef5FU\"",
		"mtime": "2026-10-29T15:12:49.585Z",
		"size": 20163,
		"path": "../public/certificate-template.svg"
	},
	"/E4D39C3F-FD0F-4858-8593-699612E2EF97.PNG": {
		"type": "image/png",
		"etag": "\"259327-gH0OIOnrku/o616X8tJDfo8tlLg\"",
		"mtime": "2026-10-29T15:12:49.548Z",
		"size": 2462503,
		"path": "../public/E4D39C3F-FD0F-4858-8593-699612E2EF97.PNG"
	},
	"/module1-approved.svg": {
		"type": "image/svg+xml",
		"etag": "\"4674-1QUbX5CWrwgYv0Htp2fjXKPGcJM\"",
		"mtime": "2026-10-29T15:12:49.585Z",
		"size": 18036,
		"path": "../public/module1-approved.svg"
	},
	"/module1-final-small.jpg": {
		"type": "image/jpeg",
		"etag": "\"12141-fENxCbxBVBCnqHv0fsteyzEyl3I\"",
		"mtime": "2026-10-29T15:12:49.585Z",
		"size": 74049,
		"path": "../public/module1-final-small.jpg"
	},
	"/module1-full.jpg": {
		"type": "image/jpeg",
		"etag": "\"33cc-9Uijy5v5zwcoHH5tZFk0stqCopc\"",
		"mtime": "2026-10-29T15:12:49.585Z",
		"size": 13260,
		"path": "../public/module1-full.jpg"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"9f-HO14TyKd/4qwktFzfKfM5KZm5e8\"",
		"mtime": "2026-10-29T15:12:49.641Z",
		"size": 159,
		"path": "../public/robots.txt"
	},
	"/EAA89181-340C-43D6-ADBD-8B4E394C506C.PNG": {
		"type": "image/png",
		"etag": "\"21d2f2-I8qGp0EaFfovKhzYnQwv7tHi3R4\"",
		"mtime": "2026-10-29T15:12:49.548Z",
		"size": 2216690,
		"path": "../public/EAA89181-340C-43D6-ADBD-8B4E394C506C.PNG"
	},
	"/EB71D563-806F-417F-A547-5BA2AA6A6B91.PNG": {
		"type": "image/png",
		"etag": "\"2785cd-BKCMvZs541uXdsHaWYrB4iiJp94\"",
		"mtime": "2026-10-29T15:12:49.549Z",
		"size": 2590157,
		"path": "../public/EB71D563-806F-417F-A547-5BA2AA6A6B91.PNG"
	},
	"/EB905A0B-C98A-4BB8-A53E-1AD8A9076794.PNG": {
		"type": "image/png",
		"etag": "\"228c99-gg9C9u/veRAU0CqHGNrN6XAMDkA\"",
		"mtime": "2026-10-29T15:12:49.549Z",
		"size": 2264217,
		"path": "../public/EB905A0B-C98A-4BB8-A53E-1AD8A9076794.PNG"
	},
	"/assets/BuyBlock-B7lVDvbL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63d-PZFc8zVVSvsNpWa9V87XIjhgrpo\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 1597,
		"path": "../public/assets/BuyBlock-B7lVDvbL.js"
	},
	"/FC362664-FF35-4E44-A3BC-C5759A2E67A7.PNG": {
		"type": "image/png",
		"etag": "\"198ab0-q9XLoYM5QpNEhH8rDoKOZOeKILw\"",
		"mtime": "2026-10-29T15:12:49.552Z",
		"size": 1673904,
		"path": "../public/FC362664-FF35-4E44-A3BC-C5759A2E67A7.PNG"
	},
	"/F7049203-FFA6-4AD6-A3DC-FE9B94B2E0FE.PNG": {
		"type": "image/png",
		"etag": "\"22a47e-rA7Fz+nMoB/n9KPVpHZlQFd0w4s\"",
		"mtime": "2026-10-29T15:12:49.550Z",
		"size": 2270334,
		"path": "../public/F7049203-FFA6-4AD6-A3DC-FE9B94B2E0FE.PNG"
	},
	"/Ppppppp.PNG": {
		"type": "image/png",
		"etag": "\"1db7b4-VHxeyENAHlyKi1uwM7x3dTLZurQ\"",
		"mtime": "2026-10-29T15:12:49.583Z",
		"size": 1947572,
		"path": "../public/Ppppppp.PNG"
	},
	"/Yvhjbg.PNG": {
		"type": "image/png",
		"etag": "\"1d21df-39XhknisMJeegFuEs7NL8MikmhM\"",
		"mtime": "2026-10-29T15:12:49.585Z",
		"size": 1909215,
		"path": "../public/Yvhjbg.PNG"
	},
	"/FFFFD267-3290-4547-B328-8D9441024DB7.PNG": {
		"type": "image/png",
		"etag": "\"20455d-TH0ipLQHNI8tEL2KzzecHGHkjFk\"",
		"mtime": "2026-10-29T15:12:49.552Z",
		"size": 2114909,
		"path": "../public/FFFFD267-3290-4547-B328-8D9441024DB7.PNG"
	},
	"/Gyvhub.PNG": {
		"type": "image/png",
		"etag": "\"22209f-88p06Eld7ZvKpT5oOcuKgNM9Hts\"",
		"mtime": "2026-10-29T15:12:49.582Z",
		"size": 2236575,
		"path": "../public/Gyvhub.PNG"
	},
	"/assets/CabinetShell-DxKZsI_K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"148c-r8SkUkyRFqqG0DGpFW4HmlxkzWE\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 5260,
		"path": "../public/assets/CabinetShell-DxKZsI_K.js"
	},
	"/Wewww.PNG": {
		"type": "image/png",
		"etag": "\"21babf-O5FBB1ROteRvFIlUUNwUgnwiSLk\"",
		"mtime": "2026-10-29T15:12:49.584Z",
		"size": 2210495,
		"path": "../public/Wewww.PNG"
	},
	"/F9F0F611-614A-4602-9551-0D5745C7AC9F.PNG": {
		"type": "image/png",
		"etag": "\"290d04-eSBL+TOLVmLoP/dtVTTzfO/B9Mg\"",
		"mtime": "2026-10-29T15:12:49.551Z",
		"size": 2690308,
		"path": "../public/F9F0F611-614A-4602-9551-0D5745C7AC9F.PNG"
	},
	"/Нооо Олд.PNG": {
		"type": "image/png",
		"etag": "\"1d46f5-gieNS+pWI1Mo0AlearzqjsiPGg0\"",
		"mtime": "2026-10-29T15:12:49.643Z",
		"size": 1918709,
		"path": "../public/Нооо Олд.PNG"
	},
	"/assets/LegalDraft-CfA5Bqrr.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f1-L0lqLmgPPUpM1C+SkMwEaATdi7o\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 1009,
		"path": "../public/assets/LegalDraft-CfA5Bqrr.js"
	},
	"/assets/PageShell-DIodWxax.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1098-U53vZx6+3QZiYgJ98zDabGAAlo8\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 4248,
		"path": "../public/assets/PageShell-DIodWxax.js"
	},
	"/assets/admin-D1feYS2r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b729-+HAyImF0HQGEw9M3osNZ3sZc8fQ\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 46889,
		"path": "../public/assets/admin-D1feYS2r.js"
	},
	"/assets/arrow-right-D8k2kfo1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-YLJtdMhJXIrUaTfcCla8x9s371g\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 155,
		"path": "../public/assets/arrow-right-D8k2kfo1.js"
	},
	"/assets/auth-CxhuLiWF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2212-AjbtvqC1+VhHPm6uGPybnX+TVlw\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 8722,
		"path": "../public/assets/auth-CxhuLiWF.js"
	},
	"/assets/button-CtvdO9Za.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8785-suaYPsnJyiguZ6RzRfC85DAu/i4\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 34693,
		"path": "../public/assets/button-CtvdO9Za.js"
	},
	"/Дома но.PNG": {
		"type": "image/png",
		"etag": "\"249384-Q188MCxP7HK2kaAdb7C7RpMGDTA\"",
		"mtime": "2026-10-29T15:12:49.642Z",
		"size": 2397060,
		"path": "../public/Дома но.PNG"
	},
	"/IMG_4573.PNG": {
		"type": "image/png",
		"etag": "\"299dbc-llGuJ4K26U1ujo4MzdUA7Z14UuY\"",
		"mtime": "2026-10-29T15:12:49.583Z",
		"size": 2727356,
		"path": "../public/IMG_4573.PNG"
	},
	"/Дотри.PNG": {
		"type": "image/png",
		"etag": "\"22a526-Dpm5gP59xLAYGciosHsHRceBh7s\"",
		"mtime": "2026-10-29T15:12:49.642Z",
		"size": 2270502,
		"path": "../public/Дотри.PNG"
	},
	"/assets/cabinet-qyY_m4e-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d04-YuqeI/qY1FrTx1wo9Mch+3EI7mI\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 19716,
		"path": "../public/assets/cabinet-qyY_m4e-.js"
	},
	"/Хтт ли ни ш.PNG": {
		"type": "image/png",
		"etag": "\"22af93-hRqTT9xLVChv5nORut/6PHqKTVE\"",
		"mtime": "2026-10-29T15:12:49.644Z",
		"size": 2273171,
		"path": "../public/Хтт ли ни ш.PNG"
	},
	"/assets/certificate-fHa-rXZ9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e62-UfxZDD4Wc+6fmBZ291nWnCK88kI\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 3682,
		"path": "../public/assets/certificate-fHa-rXZ9.js"
	},
	"/Три то .PNG": {
		"type": "image/png",
		"etag": "\"22c374-CX3iGsf8L8y0nK3oVyO4vBTyvO0\"",
		"mtime": "2026-10-29T15:12:49.644Z",
		"size": 2278260,
		"path": "../public/Три то .PNG"
	},
	"/assets/client-Cblevj9_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37f1b-ro1IjAUZINiE9WgH3pUTTUa6uUo\"",
		"mtime": "2026-10-29T15:12:48.492Z",
		"size": 229147,
		"path": "../public/assets/client-Cblevj9_.js"
	},
	"/assets/course-BndBX22G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f5d-JgUmH5E/oGQ0fXXMYHVBAbKOeVY\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 16221,
		"path": "../public/assets/course-BndBX22G.js"
	},
	"/assets/dist-D8QgKBOx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2c2-a2bP2HEcx8YgBp4bjdBu6pYRM34\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 706,
		"path": "../public/assets/dist-D8QgKBOx.js"
	},
	"/assets/dist-dlWKxdT_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e1-6he08P+mr27KuvV0p4FazIbnCtE\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 1761,
		"path": "../public/assets/dist-dlWKxdT_.js"
	},
	"/assets/index-BxxZt8IG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5df5e-S1IDlXM+ZPF4eev4sXIeWU5CKAM\"",
		"mtime": "2026-10-29T15:12:48.491Z",
		"size": 384862,
		"path": "../public/assets/index-BxxZt8IG.js"
	},
	"/assets/input-D7dLjf4K.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e-nW5um0nbm7eQGjFzf7e6OLoWpAA\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 622,
		"path": "../public/assets/input-D7dLjf4K.js"
	},
	"/assets/invariant-CgFvOqN2.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c2-OtvVxjJzKVqOT1XQL6Tnz3B8fGk\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 450,
		"path": "../public/assets/invariant-CgFvOqN2.js"
	},
	"/assets/invite-B70sNdyq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"d8e-26v7AVQLf15cHoS8zrjxbxsJWNM\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 3470,
		"path": "../public/assets/invite-B70sNdyq.js"
	},
	"/assets/label-CusWW5Uh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ae-LcZ6WHHp68i/8wjVjTmwpv+FlHk\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 686,
		"path": "../public/assets/label-CusWW5Uh.js"
	},
	"/assets/lesson._lessonId-CJxvNoSa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1855-YcoeefQTQvW8BqF+Po4J0X390NE\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 6229,
		"path": "../public/assets/lesson._lessonId-CJxvNoSa.js"
	},
	"/assets/lesson._lessonId-CceqWKTF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2530-psXCjxgOcGqlZzdWBGn1x4aF0eo\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 9520,
		"path": "../public/assets/lesson._lessonId-CceqWKTF.js"
	},
	"/assets/lessons-DIz-Uviy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1a0d-/upykmfNyBd9rpWzTwM+MTzJwpo\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 6669,
		"path": "../public/assets/lessons-DIz-Uviy.js"
	},
	"/assets/matchContext-DAM6ml30.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a2-Ka3W++oW1zfRG7n/LV3kUOi4y4M\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 162,
		"path": "../public/assets/matchContext-DAM6ml30.js"
	},
	"/assets/not-found-i5RsCZif.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"76-Trmr7GZIBZuvfg4uM18tBiRtOXg\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 118,
		"path": "../public/assets/not-found-i5RsCZif.js"
	},
	"/assets/privacy-eKQIqVdW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4bc-sBCzG4eADPv4/A+mVBehIaWjxkw\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 1212,
		"path": "../public/assets/privacy-eKQIqVdW.js"
	},
	"/assets/program-Dwu7bAvp.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b9f-RE1itsoBIHxjWDp1U/Evi1NQa9I\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 2975,
		"path": "../public/assets/program-Dwu7bAvp.js"
	},
	"/assets/reset-password-wXoZUHz3.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c28-ZXualjkbnamzEMflGAYF1xJBHi4\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 3112,
		"path": "../public/assets/reset-password-wXoZUHz3.js"
	},
	"/assets/route-DsOjk1PZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8d-XsbgLPqxpfdPDGPPd845+wuVyvc\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 141,
		"path": "../public/assets/route-DsOjk1PZ.js"
	},
	"/assets/routes-5t4QagQt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1c98-Jaqd5Y+FdLQNpj0lZ+QTTkigahc\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 7320,
		"path": "../public/assets/routes-5t4QagQt.js"
	},
	"/assets/styles-Krg_QGwz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"d9da-qorM+vEvxABOcOoPrII9jmh3qlw\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 55770,
		"path": "../public/assets/styles-Krg_QGwz.css"
	},
	"/assets/terms-DRQR9mYL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"644-gIGWb5OlE1/Qa6x5VKS7uH9rurc\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 1604,
		"path": "../public/assets/terms-DRQR9mYL.js"
	},
	"/assets/use-student-Ve95hL6-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"239c-sMqmbSGNpQU+JJ1W+sMoWoyv7vc\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 9116,
		"path": "../public/assets/use-student-Ve95hL6-.js"
	},
	"/assets/useNavigate-BpbycrJy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f97-DoTeSkxL/D03yaYAtZRpxFlR8Yw\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 3991,
		"path": "../public/assets/useNavigate-BpbycrJy.js"
	},
	"/assets/vera-lushina-C0kgxQQ7.jpg": {
		"type": "image/jpeg",
		"etag": "\"52edb-nRFdHe/BydnUo7IM8RCRN1ZpOSU\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 339675,
		"path": "../public/assets/vera-lushina-C0kgxQQ7.jpg"
	},
	"/assets/useSelector-Dq6-RCm6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2a69-XXvXM81iJYbngXi2LSau10U3Tio\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 10857,
		"path": "../public/assets/useSelector-Dq6-RCm6.js"
	},
	"/assets/x-dBDC814i.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"90-EYk1zcfqYDea9QR4sy68n37ad0U\"",
		"mtime": "2026-10-29T15:12:48.493Z",
		"size": 144,
		"path": "../public/assets/x-dBDC814i.js"
	},
	"/course/five-errors.svg": {
		"type": "image/svg+xml",
		"etag": "\"ebe-rpWTbKbNj6vg88SQrI0C3XJQPNY\"",
		"mtime": "2026-10-29T15:12:49.373Z",
		"size": 3774,
		"path": "../public/course/five-errors.svg"
	},
	"/course/fox-effect.svg": {
		"type": "image/svg+xml",
		"etag": "\"453-6OH8Sn8bZOZIkzoXM4T6KYXmBHA\"",
		"mtime": "2026-10-29T15:12:49.375Z",
		"size": 1107,
		"path": "../public/course/fox-effect.svg"
	},
	"/course/lighting.svg": {
		"type": "image/svg+xml",
		"etag": "\"6e4-UU9Xfx6U12DTlE5cQA7b+lIBzxs\"",
		"mtime": "2026-10-29T15:12:49.375Z",
		"size": 1764,
		"path": "../public/course/lighting.svg"
	},
	"/course/modern-effects.svg": {
		"type": "image/svg+xml",
		"etag": "\"7f2-IcRBI9pL6506XA6QY4kAN9cWFrk\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 2034,
		"path": "../public/course/modern-effects.svg"
	},
	"/course/natural-effect.svg": {
		"type": "image/svg+xml",
		"etag": "\"541-M1eVT3wn+l+xMymYw2dZ3rSq+XQ\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 1345,
		"path": "../public/course/natural-effect.svg"
	},
	"/course/open-effect.svg": {
		"type": "image/svg+xml",
		"etag": "\"47c-t6G56ekCU0P/FNWHwsL13en0y4k\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 1148,
		"path": "../public/course/open-effect.svg"
	},
	"/course/patch-tape.svg": {
		"type": "image/svg+xml",
		"etag": "\"650-Alwy0n4DcfopqQXGXmhxAN6l+oU\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 1616,
		"path": "../public/course/patch-tape.svg"
	},
	"/course/squirrel-effect.svg": {
		"type": "image/svg+xml",
		"etag": "\"445-cr23aonwO11fc7F/rHKEsrjLGCY\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 1093,
		"path": "../public/course/squirrel-effect.svg"
	},
	"/course/volume-schemes.svg": {
		"type": "image/svg+xml",
		"etag": "\"85c-PrWoHB1wB68OpgFtAK6lvsqp6vo\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 2140,
		"path": "../public/course/volume-schemes.svg"
	},
	"/course/young-lashes.svg": {
		"type": "image/svg+xml",
		"etag": "\"bbf-HEGvTS52njeqqeeWONtHSZKIgcw\"",
		"mtime": "2026-10-29T15:12:49.376Z",
		"size": 3007,
		"path": "../public/course/young-lashes.svg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__ktZsP = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__ktZsP
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
