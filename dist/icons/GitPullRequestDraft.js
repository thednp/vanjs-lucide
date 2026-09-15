/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitPullRequestDraft.ts
const GitPullRequestDraft = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M18 6V5" }), path({ "d": "M18 11v-1" }), line({
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
export { GitPullRequestDraft };

//# sourceMappingURL=GitPullRequestDraft.js.map