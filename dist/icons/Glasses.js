/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Glasses.ts
const Glasses = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "15",
		"r": "4"
	}), circle({
		cx: "18",
		cy: "15",
		"r": "4"
	}), path({ "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }), path({ "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }), path({ "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }));
};
//#endregion
export { Glasses };

//# sourceMappingURL=Glasses.js.map