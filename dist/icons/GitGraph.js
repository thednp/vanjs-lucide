/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitGraph.ts
const GitGraph = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M5 9v6" }), circle({
		cx: "5",
		cy: "18",
		"r": "3"
	}), path({ "d": "M12 3v18" }), circle({
		cx: "19",
		cy: "6",
		"r": "3"
	}), path({ "d": "M16 15.7A9 9 0 0 0 19 9" }));
};
//#endregion
export { GitGraph };

//# sourceMappingURL=GitGraph.js.map