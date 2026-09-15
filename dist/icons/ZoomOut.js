/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ZoomOut.ts
const ZoomOut = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), line({
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65"
	}), line({
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11"
	}));
};
//#endregion
export { ZoomOut };

//# sourceMappingURL=ZoomOut.js.map