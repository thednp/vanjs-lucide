/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Videotape.ts
const Videotape = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 8h20" }), circle({
		cx: "8",
		cy: "14",
		"r": "2"
	}), path({ "d": "M8 12h8" }), circle({
		cx: "16",
		cy: "14",
		"r": "2"
	}));
};
//#endregion
export { Videotape };

//# sourceMappingURL=Videotape.js.map