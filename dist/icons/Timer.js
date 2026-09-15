/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Timer.ts
const Timer = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2"
	}), line({
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11"
	}), circle({
		cx: "12",
		cy: "14",
		"r": "8"
	}));
};
//#endregion
export { Timer };

//# sourceMappingURL=Timer.js.map