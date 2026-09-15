/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Meh.ts
const Meh = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "8",
		x2: "16",
		y1: "15",
		y2: "15"
	}), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}));
};
//#endregion
export { Meh };

//# sourceMappingURL=Meh.js.map