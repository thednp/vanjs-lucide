/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Image.ts
const Image = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }));
};
//#endregion
export { Image };

//# sourceMappingURL=Image.js.map