/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitCommitHorizontal.ts
const GitCommitHorizontal = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), line({
		x1: "3",
		x2: "9",
		y1: "12",
		y2: "12"
	}), line({
		x1: "15",
		x2: "21",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
export { GitCommitHorizontal };

//# sourceMappingURL=GitCommitHorizontal.js.map