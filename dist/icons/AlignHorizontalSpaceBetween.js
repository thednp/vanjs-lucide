/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/AlignHorizontalSpaceBetween.ts
const AlignHorizontalSpaceBetween = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "3",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "15",
		"y": "7",
		rx: "2"
	}), path({ "d": "M3 2v20" }), path({ "d": "M21 2v20" }));
};
//#endregion
export { AlignHorizontalSpaceBetween };

//# sourceMappingURL=AlignHorizontalSpaceBetween.js.map