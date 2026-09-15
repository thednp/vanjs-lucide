/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Sheet.ts
const Sheet = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), line({
		x1: "3",
		x2: "21",
		y1: "9",
		y2: "9"
	}), line({
		x1: "3",
		x2: "21",
		y1: "15",
		y2: "15"
	}), line({
		x1: "9",
		x2: "9",
		y1: "9",
		y2: "21"
	}), line({
		x1: "15",
		x2: "15",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
export { Sheet };

//# sourceMappingURL=Sheet.js.map