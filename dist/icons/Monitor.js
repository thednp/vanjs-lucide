/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Monitor.ts
const Monitor = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21"
	}), line({
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21"
	}));
};
//#endregion
export { Monitor };

//# sourceMappingURL=Monitor.js.map