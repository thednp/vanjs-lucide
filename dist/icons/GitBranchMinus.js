/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitBranchMinus.ts
const GitBranchMinus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 6a9 9 0 0 0-9 9V3" }), path({ "d": "M21 18h-6" }), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
export { GitBranchMinus };

//# sourceMappingURL=GitBranchMinus.js.map