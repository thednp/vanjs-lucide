/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CircuitBoard.ts
const CircuitBoard = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M11 9h4a2 2 0 0 0 2-2V3" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "M7 21v-4a2 2 0 0 1 2-2h4" }), circle({
		cx: "15",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
export { CircuitBoard };

//# sourceMappingURL=CircuitBoard.js.map