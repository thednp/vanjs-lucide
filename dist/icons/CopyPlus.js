/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CopyPlus.ts
const CopyPlus = (props = {}) => {
	const { line, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "15",
		x2: "15",
		y1: "12",
		y2: "18"
	}), line({
		x1: "12",
		x2: "18",
		y1: "15",
		y2: "15"
	}), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
export { CopyPlus };

//# sourceMappingURL=CopyPlus.js.map