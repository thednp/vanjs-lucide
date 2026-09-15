/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CaseLower.ts
const CaseLower = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9v7" }), path({ "d": "M14 6v10" }), circle({
		cx: "17.5",
		cy: "12.5",
		"r": "3.5"
	}), circle({
		cx: "6.5",
		cy: "12.5",
		"r": "3.5"
	}));
};
//#endregion
export { CaseLower };

//# sourceMappingURL=CaseLower.js.map