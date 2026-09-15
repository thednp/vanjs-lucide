/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/TentTree.ts
const TentTree = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "4",
		cy: "4",
		"r": "2"
	}), path({ "d": "m14 5 3-3 3 3" }), path({ "d": "m14 10 3-3 3 3" }), path({ "d": "M17 14V2" }), path({ "d": "M17 14H7l-5 8h20Z" }), path({ "d": "M8 14v8" }), path({ "d": "m9 14 5 8" }));
};
//#endregion
export { TentTree };

//# sourceMappingURL=TentTree.js.map