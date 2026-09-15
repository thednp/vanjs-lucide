/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ToggleRight.ts
const ToggleRight = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "15",
		cy: "12",
		"r": "3"
	}), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "7"
	}));
};
//#endregion
export { ToggleRight };

//# sourceMappingURL=ToggleRight.js.map