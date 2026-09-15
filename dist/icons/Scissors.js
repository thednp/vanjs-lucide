/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Scissors.ts
const Scissors = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M8.12 8.12 12 12" }), path({ "d": "M20 4 8.12 15.88" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), path({ "d": "M14.8 14.8 20 20" }));
};
//#endregion
export { Scissors };

//# sourceMappingURL=Scissors.js.map