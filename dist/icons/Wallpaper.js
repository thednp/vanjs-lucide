/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Wallpaper.ts
const Wallpaper = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }), path({ "d": "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }), circle({
		cx: "8",
		cy: "9",
		"r": "2"
	}), rect({
		"x": "2",
		"y": "3",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
export { Wallpaper };

//# sourceMappingURL=Wallpaper.js.map