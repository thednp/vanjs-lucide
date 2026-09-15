/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Pi.ts
const Pi = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "9",
		x2: "9",
		y1: "4",
		y2: "20"
	}), path({ "d": "M4 7c0-1.7 1.3-3 3-3h13" }), path({ "d": "M18 20c-1.7 0-3-1.3-3-3V4" }));
};
//#endregion
export { Pi };

//# sourceMappingURL=Pi.js.map