/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitPullRequestClosed.ts
const GitPullRequestClosed = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M6 9v12" }), path({ "d": "m21 3-6 6" }), path({ "d": "m21 9-6-6" }), path({ "d": "M18 11.5V15" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
export { GitPullRequestClosed };

//# sourceMappingURL=GitPullRequestClosed.js.map