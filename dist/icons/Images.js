/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Images.ts
const Images = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }), path({ "d": "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }), circle({
		cx: "13",
		cy: "7",
		"r": "1",
		fill: "currentColor"
	}), rect({
		"x": "8",
		"y": "2",
		width: "14",
		height: "14",
		rx: "2"
	}));
};
//#endregion
export { Images };

//# sourceMappingURL=Images.js.map