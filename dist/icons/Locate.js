/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Locate.ts
const Locate = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12"
	}), line({
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5"
	}), line({
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "7"
	}));
};
//#endregion
export { Locate };

//# sourceMappingURL=Locate.js.map