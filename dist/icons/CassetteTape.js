/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CassetteTape.ts
const CassetteTape = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), circle({
		cx: "8",
		cy: "10",
		"r": "2"
	}), path({ "d": "M8 12h8" }), circle({
		cx: "16",
		cy: "10",
		"r": "2"
	}), path({ "d": "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }));
};
//#endregion
export { CassetteTape };

//# sourceMappingURL=CassetteTape.js.map