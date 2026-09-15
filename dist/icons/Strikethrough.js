/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Strikethrough.ts
const Strikethrough = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 4H9a3 3 0 0 0-2.83 4" }), path({ "d": "M14 12a4 4 0 0 1 0 8H6" }), line({
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
export { Strikethrough };

//# sourceMappingURL=Strikethrough.js.map