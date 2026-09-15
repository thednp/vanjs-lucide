/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareSlash.ts
const SquareSlash = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), line({
		x1: "9",
		x2: "15",
		y1: "15",
		y2: "9"
	}));
};
//#endregion
export { SquareSlash };

//# sourceMappingURL=SquareSlash.js.map