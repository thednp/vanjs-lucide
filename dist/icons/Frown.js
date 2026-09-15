/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Frown.ts
const Frown = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }), line({
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
export { Frown };

//# sourceMappingURL=Frown.js.map