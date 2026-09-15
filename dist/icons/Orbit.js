/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Orbit.ts
const Orbit = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.341 6.484A10 10 0 0 1 10.266 21.85" }), path({ "d": "M3.659 17.516A10 10 0 0 1 13.74 2.152" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), circle({
		cx: "19",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
export { Orbit };

//# sourceMappingURL=Orbit.js.map