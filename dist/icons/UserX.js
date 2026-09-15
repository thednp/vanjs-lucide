/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/UserX.ts
const UserX = (props = {}) => {
	const { path, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}), line({
		x1: "17",
		x2: "22",
		y1: "8",
		y2: "13"
	}), line({
		x1: "22",
		x2: "17",
		y1: "8",
		y2: "13"
	}));
};
//#endregion
export { UserX };

//# sourceMappingURL=UserX.js.map