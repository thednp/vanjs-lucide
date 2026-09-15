/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/UserSearch.ts
const UserSearch = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}), path({ "d": "M10.3 15H7a4 4 0 0 0-4 4v2" }), circle({
		cx: "17",
		cy: "17",
		"r": "3"
	}), path({ "d": "m21 21-1.9-1.9" }));
};
//#endregion
export { UserSearch };

//# sourceMappingURL=UserSearch.js.map