/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SendToBack.ts
const SendToBack = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "14",
		"y": "14",
		width: "8",
		height: "8",
		rx: "2"
	}), rect({
		"x": "2",
		"y": "2",
		width: "8",
		height: "8",
		rx: "2"
	}), path({ "d": "M7 14v1a2 2 0 0 0 2 2h1" }), path({ "d": "M14 7h1a2 2 0 0 1 2 2v1" }));
};
//#endregion
export { SendToBack };

//# sourceMappingURL=SendToBack.js.map