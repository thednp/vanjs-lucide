/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/UserLock.ts
const UserLock = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 16v-2a2 2 0 0 0-4 0v2" }), path({ "d": "M9.5 15H7a4 4 0 0 0-4 4v2" }), circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}), rect({
		"x": "13",
		"y": "16",
		width: "8",
		height: "5",
		rx: ".899"
	}));
};
//#endregion
export { UserLock };

//# sourceMappingURL=UserLock.js.map