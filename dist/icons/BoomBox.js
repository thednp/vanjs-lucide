/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/BoomBox.ts
const BoomBox = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), path({ "d": "M8 8v1" }), path({ "d": "M12 8v1" }), path({ "d": "M16 8v1" }), rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "9",
		rx: "2"
	}), circle({
		cx: "8",
		cy: "15",
		"r": "2"
	}), circle({
		cx: "16",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
export { BoomBox };

//# sourceMappingURL=BoomBox.js.map