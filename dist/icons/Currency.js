/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Currency.ts
const Currency = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "8"
	}), line({
		x1: "3",
		x2: "6",
		y1: "3",
		y2: "6"
	}), line({
		x1: "21",
		x2: "18",
		y1: "3",
		y2: "6"
	}), line({
		x1: "3",
		x2: "6",
		y1: "21",
		y2: "18"
	}), line({
		x1: "21",
		x2: "18",
		y1: "21",
		y2: "18"
	}));
};
//#endregion
export { Currency };

//# sourceMappingURL=Currency.js.map