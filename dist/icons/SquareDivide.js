/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareDivide.ts
const SquareDivide = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "16"
	}), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "8"
	}));
};
//#endregion
export { SquareDivide };

//# sourceMappingURL=SquareDivide.js.map