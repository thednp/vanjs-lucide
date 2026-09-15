/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Podcast.ts
const Podcast = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({
		"d": "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z",
		fill: "currentColor"
	}), path({ "d": "M16.85 18.58a9 9 0 1 0-9.7 0" }), path({ "d": "M8 14a5 5 0 1 1 8 0" }), circle({
		cx: "12",
		cy: "11",
		"r": "1",
		fill: "currentColor"
	}));
};
//#endregion
export { Podcast };

//# sourceMappingURL=Podcast.js.map