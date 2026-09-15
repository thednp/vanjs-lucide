/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Shapes.ts
const Shapes = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }), rect({
		"x": "3",
		"y": "14",
		width: "7",
		height: "7",
		rx: "1"
	}), circle({
		cx: "17.5",
		cy: "17.5",
		"r": "3.5"
	}));
};
//#endregion
export { Shapes };

//# sourceMappingURL=Shapes.js.map