/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Variable.ts
const Variable = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }), path({ "d": "M16 3s4 3 4 9-4 9-4 9" }), line({
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15"
	}), line({
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15"
	}));
};
//#endregion
export { Variable };

//# sourceMappingURL=Variable.js.map