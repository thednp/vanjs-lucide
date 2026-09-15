/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Lock.ts
const Lock = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "11",
		"x": "3",
		"y": "11",
		rx: "2",
		ry: "2"
	}), path({ "d": "M7 11V7a5 5 0 0 1 10 0v4" }));
};
//#endregion
export { Lock };

//# sourceMappingURL=Lock.js.map