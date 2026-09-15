/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Album.ts
const Album = (props = {}) => {
	const { rect, polyline } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), polyline({ points: "11 3 11 11 14 8 17 11 17 3" }));
};
//#endregion
export { Album };

//# sourceMappingURL=Album.js.map