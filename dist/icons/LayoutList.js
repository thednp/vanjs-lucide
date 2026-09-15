/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/LayoutList.ts
const LayoutList = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}), path({ "d": "M14 4h7" }), path({ "d": "M14 9h7" }), path({ "d": "M14 15h7" }), path({ "d": "M14 20h7" }));
};
//#endregion
export { LayoutList };

//# sourceMappingURL=LayoutList.js.map