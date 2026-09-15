/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ChessPawn.ts
const ChessPawn = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }), path({ "d": "m14.5 10 1.5 8" }), path({ "d": "M7 10h10" }), path({ "d": "m8 18 1.5-8" }), circle({
		cx: "12",
		cy: "6",
		"r": "4"
	}));
};
//#endregion
export { ChessPawn };

//# sourceMappingURL=ChessPawn.js.map