/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/MapPin.ts
const MapPin = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}));
};
//#endregion
export { MapPin };

//# sourceMappingURL=MapPin.js.map