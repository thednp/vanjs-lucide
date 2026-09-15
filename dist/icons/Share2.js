/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Share2.ts
const Share2 = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "5",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "12",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "19",
		"r": "3"
	}), line({
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49"
	}), line({
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49"
	}));
};
//#endregion
export { Share2 };

//# sourceMappingURL=Share2.js.map