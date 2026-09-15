/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Speaker.ts
const Speaker = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), path({ "d": "M12 6h.01" }), circle({
		cx: "12",
		cy: "14",
		"r": "4"
	}), path({ "d": "M12 14h.01" }));
};
//#endregion
export { Speaker };

//# sourceMappingURL=Speaker.js.map