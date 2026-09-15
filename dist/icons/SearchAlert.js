/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SearchAlert.ts
const SearchAlert = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }), path({ "d": "M11 7v4" }), path({ "d": "M11 15h.01" }));
};
//#endregion
export { SearchAlert };

//# sourceMappingURL=SearchAlert.js.map