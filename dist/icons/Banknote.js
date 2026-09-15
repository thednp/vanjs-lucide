/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Banknote.ts
const Banknote = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M6 12h.01M18 12h.01" }));
};
//#endregion
export { Banknote };

//# sourceMappingURL=Banknote.js.map