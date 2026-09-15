/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Music.ts
const Music = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 18V5l12-2v13" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
export { Music };

//# sourceMappingURL=Music.js.map