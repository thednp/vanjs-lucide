/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Crosshair.ts
const Crosshair = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12"
	}), line({
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2"
	}), line({
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18"
	}));
};
//#endregion
export { Crosshair };

//# sourceMappingURL=Crosshair.js.map