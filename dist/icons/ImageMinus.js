/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ImageMinus.ts
const ImageMinus = (props = {}) => {
	const { path, line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }), line({
		x1: "16",
		x2: "22",
		y1: "5",
		y2: "5"
	}), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }));
};
//#endregion
export { ImageMinus };

//# sourceMappingURL=ImageMinus.js.map