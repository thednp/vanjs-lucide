/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Spline.ts
const Spline = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "19",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}), path({ "d": "M5 17A12 12 0 0 1 17 5" }));
};
//#endregion
export { Spline };

//# sourceMappingURL=Spline.js.map