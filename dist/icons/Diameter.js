/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Diameter.ts
const Diameter = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "5",
		"r": "2"
	}), path({ "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86" }), path({ "d": "m6.41 6.41 11.18 11.18" }), path({ "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86" }));
};
//#endregion
export { Diameter };

//# sourceMappingURL=Diameter.js.map