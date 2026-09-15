/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/LifeBuoy.ts
const LifeBuoy = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m4.93 4.93 4.24 4.24" }), path({ "d": "m14.83 9.17 4.24-4.24" }), path({ "d": "m14.83 14.83 4.24 4.24" }), path({ "d": "m9.17 14.83-4.24 4.24" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}));
};
//#endregion
export { LifeBuoy };

//# sourceMappingURL=LifeBuoy.js.map