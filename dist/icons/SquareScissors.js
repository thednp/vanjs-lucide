/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareScissors.ts
const SquareScissors = (props = {}) => {
	const { rect, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "8.5",
		cy: "8.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "9.56066",
		x2: "12",
		y2: "12"
	}), line({
		x1: "17",
		y1: "17",
		x2: "14.82",
		y2: "14.82"
	}), circle({
		cx: "8.5",
		cy: "15.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "14.43934",
		x2: "17",
		y2: "7"
	}));
};
//#endregion
export { SquareScissors };

//# sourceMappingURL=SquareScissors.js.map