/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Disc3.ts
const Disc3 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M6 12c0-1.7.7-3.2 1.8-4.2" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M18 12c0 1.7-.7 3.2-1.8 4.2" }));
};
//#endregion
export { Disc3 };

//# sourceMappingURL=Disc3.js.map