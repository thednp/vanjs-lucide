/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareUser.ts
const SquareUser = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }));
};
//#endregion
export { SquareUser };

//# sourceMappingURL=SquareUser.js.map