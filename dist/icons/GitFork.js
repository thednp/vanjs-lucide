/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitFork.ts
const GitFork = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), path({ "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }), path({ "d": "M12 12v3" }));
};
//#endregion
export { GitFork };

//# sourceMappingURL=GitFork.js.map