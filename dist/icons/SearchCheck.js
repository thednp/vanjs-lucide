/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SearchCheck.ts
const SearchCheck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m8 11 2 2 4-4" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }));
};
//#endregion
export { SearchCheck };

//# sourceMappingURL=SearchCheck.js.map