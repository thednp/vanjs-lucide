/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Waypoints.ts
const Waypoints = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.586 5.414-5.172 5.172" }), path({ "d": "m18.586 13.414-5.172 5.172" }), path({ "d": "M6 12h12" }), circle({
		cx: "12",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "4",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
export { Waypoints };

//# sourceMappingURL=Waypoints.js.map