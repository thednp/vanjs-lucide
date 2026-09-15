/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Radius.ts
const Radius = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82" }), circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), path({ "d": "m13.41 13.41 4.18 4.18" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
export { Radius };

//# sourceMappingURL=Radius.js.map