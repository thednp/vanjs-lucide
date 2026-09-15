/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/LockKeyholeOpen.ts
const LockKeyholeOpen = (props = {}) => {
	const { circle, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "16",
		"r": "1"
	}), rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "10",
		rx: "2"
	}), path({ "d": "M7 10V7a5 5 0 0 1 9.33-2.5" }));
};
//#endregion
export { LockKeyholeOpen };

//# sourceMappingURL=LockKeyholeOpen.js.map