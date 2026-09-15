/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Frame.ts
const Frame = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "22",
		x2: "2",
		y1: "6",
		y2: "6"
	}), line({
		x1: "22",
		x2: "2",
		y1: "18",
		y2: "18"
	}), line({
		x1: "6",
		x2: "6",
		y1: "2",
		y2: "22"
	}), line({
		x1: "18",
		x2: "18",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
export { Frame };

//# sourceMappingURL=Frame.js.map