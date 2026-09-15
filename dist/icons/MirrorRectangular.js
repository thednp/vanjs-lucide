/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/MirrorRectangular.ts
const MirrorRectangular = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 6 8 9" }), path({ "d": "m16 7-8 8" }), rect({
		"x": "4",
		"y": "2",
		width: "16",
		height: "20",
		rx: "2"
	}));
};
//#endregion
export { MirrorRectangular };

//# sourceMappingURL=MirrorRectangular.js.map