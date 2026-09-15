/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/UndoDot.ts
const UndoDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 17a9 9 0 0 0-15-6.7L3 13" }), path({ "d": "M3 7v6h6" }), circle({
		cx: "12",
		cy: "17",
		"r": "1"
	}));
};
//#endregion
export { UndoDot };

//# sourceMappingURL=UndoDot.js.map