/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/UserRoundSearch.ts
const UserRoundSearch = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), path({ "d": "m22 22-1.9-1.9" }));
};
//#endregion
export { UserRoundSearch };

//# sourceMappingURL=UserRoundSearch.js.map