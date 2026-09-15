/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitPullRequestArrow.ts
const GitPullRequestArrow = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M5 9v12" }), circle({
		cx: "19",
		cy: "18",
		"r": "3"
	}), path({ "d": "m15 9-3-3 3-3" }), path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }));
};
//#endregion
export { GitPullRequestArrow };

//# sourceMappingURL=GitPullRequestArrow.js.map