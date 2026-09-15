/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Underline.ts
const Underline = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 4v6a6 6 0 0 0 12 0V4" }), line({
		x1: "4",
		x2: "20",
		y1: "20",
		y2: "20"
	}));
};
//#endregion
export { Underline };

//# sourceMappingURL=Underline.js.map