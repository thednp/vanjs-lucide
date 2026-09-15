/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/BaggageClaim.ts
const BaggageClaim = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }), path({ "d": "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }), rect({
		width: "13",
		height: "8",
		"x": "8",
		"y": "6",
		rx: "1"
	}), circle({
		cx: "18",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "9",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
export { BaggageClaim };

//# sourceMappingURL=BaggageClaim.js.map