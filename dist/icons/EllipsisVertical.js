/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/EllipsisVertical.ts
const EllipsisVertical = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
export { EllipsisVertical };

//# sourceMappingURL=EllipsisVertical.js.map