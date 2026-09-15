/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/AppWindow.ts
const AppWindow = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "2",
		"y": "4",
		width: "20",
		height: "16",
		rx: "2"
	}), path({ "d": "M10 4v4" }), path({ "d": "M2 8h20" }), path({ "d": "M6 4v4" }));
};
//#endregion
export { AppWindow };

//# sourceMappingURL=AppWindow.js.map