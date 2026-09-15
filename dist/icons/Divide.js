/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Divide.ts
const Divide = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "6",
		"r": "1"
	}), line({
		x1: "5",
		x2: "19",
		y1: "12",
		y2: "12"
	}), circle({
		cx: "12",
		cy: "18",
		"r": "1"
	}));
};
//#endregion
export { Divide };

//# sourceMappingURL=Divide.js.map