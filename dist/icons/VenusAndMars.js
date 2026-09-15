/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/VenusAndMars.ts
const VenusAndMars = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 20h4" }), path({ "d": "M12 16v6" }), path({ "d": "M17 2h4v4" }), path({ "d": "m21 2-5.46 5.46" }), circle({
		cx: "12",
		cy: "11",
		"r": "5"
	}));
};
//#endregion
export { VenusAndMars };

//# sourceMappingURL=VenusAndMars.js.map