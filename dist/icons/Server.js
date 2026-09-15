/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Server.ts
const Server = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "2",
		rx: "2",
		ry: "2"
	}), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2",
		ry: "2"
	}), line({
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6"
	}), line({
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18"
	}));
};
//#endregion
export { Server };

//# sourceMappingURL=Server.js.map