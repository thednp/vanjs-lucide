/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ClipboardClock.ts
const ClipboardClock = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 14v2.2l1.6 1" }), path({ "d": "M16 4h2a2 2 0 0 1 2 2v.832" }), path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }), circle({
		cx: "16",
		cy: "16",
		"r": "6"
	}), rect({
		"x": "8",
		"y": "2",
		width: "8",
		height: "4",
		rx: "1"
	}));
};
//#endregion
export { ClipboardClock };

//# sourceMappingURL=ClipboardClock.js.map