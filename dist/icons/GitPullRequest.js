/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitPullRequest.ts
const GitPullRequest = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }), line({
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
export { GitPullRequest };

//# sourceMappingURL=GitPullRequest.js.map