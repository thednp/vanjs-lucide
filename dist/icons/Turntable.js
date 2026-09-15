/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Turntable.ts
const Turntable = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12.01h.01" }), path({ "d": "M18 8v4a8 8 0 0 1-1.07 4" }), circle({
		cx: "10",
		cy: "12",
		"r": "4"
	}), rect({
		"x": "2",
		"y": "4",
		width: "20",
		height: "16",
		rx: "2"
	}));
};
//#endregion
export { Turntable };

//# sourceMappingURL=Turntable.js.map