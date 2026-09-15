/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Percent.ts
const Percent = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19"
	}), circle({
		cx: "6.5",
		cy: "6.5",
		"r": "2.5"
	}), circle({
		cx: "17.5",
		cy: "17.5",
		"r": "2.5"
	}));
};
//#endregion
export { Percent };

//# sourceMappingURL=Percent.js.map