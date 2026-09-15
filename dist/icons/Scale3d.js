/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Scale3d.ts
const Scale3d = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 7v11a1 1 0 0 0 1 1h11" }), path({ "d": "M5.293 18.707 11 13" }), circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "5",
		"r": "2"
	}));
};
//#endregion
export { Scale3d };

//# sourceMappingURL=Scale3d.js.map