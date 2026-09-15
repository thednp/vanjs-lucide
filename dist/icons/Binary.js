/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Binary.ts
const Binary = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "14",
		"y": "14",
		width: "4",
		height: "6",
		rx: "2"
	}), rect({
		"x": "6",
		"y": "4",
		width: "4",
		height: "6",
		rx: "2"
	}), path({ "d": "M6 20h4" }), path({ "d": "M14 10h4" }), path({ "d": "M6 14h2v6" }), path({ "d": "M14 4h2v6" }));
};
//#endregion
export { Binary };

//# sourceMappingURL=Binary.js.map