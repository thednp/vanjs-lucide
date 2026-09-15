/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/GitCompareArrows.ts
const GitCompareArrows = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }), path({ "d": "m15 9-3-3 3-3" }), circle({
		cx: "19",
		cy: "18",
		"r": "3"
	}), path({ "d": "M12 18H7a2 2 0 0 1-2-2V9" }), path({ "d": "m9 15 3 3-3 3" }));
};
//#endregion
export { GitCompareArrows };

//# sourceMappingURL=GitCompareArrows.js.map