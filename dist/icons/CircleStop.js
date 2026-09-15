/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CircleStop.ts
const CircleStop = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), rect({
		"x": "9",
		"y": "9",
		width: "6",
		height: "6",
		rx: "1"
	}));
};
//#endregion
export { CircleStop };

//# sourceMappingURL=CircleStop.js.map