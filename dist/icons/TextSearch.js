/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/TextSearch.ts
const TextSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M10 12H3" }), path({ "d": "M10 19H3" }), circle({
		cx: "17",
		cy: "15",
		"r": "3"
	}), path({ "d": "m21 19-1.9-1.9" }));
};
//#endregion
export { TextSearch };

//# sourceMappingURL=TextSearch.js.map