/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CircleAlert.ts
const CircleAlert = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16"
	}));
};
//#endregion
export { CircleAlert };

//# sourceMappingURL=CircleAlert.js.map