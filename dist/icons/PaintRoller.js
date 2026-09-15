/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/PaintRoller.ts
const PaintRoller = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "6",
		"x": "2",
		"y": "2",
		rx: "2"
	}), path({ "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }), rect({
		width: "4",
		height: "6",
		"x": "8",
		"y": "16",
		rx: "1"
	}));
};
//#endregion
export { PaintRoller };

//# sourceMappingURL=PaintRoller.js.map