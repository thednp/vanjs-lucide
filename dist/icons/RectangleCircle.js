/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/RectangleCircle.ts
const RectangleCircle = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }), circle({
		cx: "14",
		cy: "12",
		"r": "8"
	}));
};
//#endregion
export { RectangleCircle };

//# sourceMappingURL=RectangleCircle.js.map