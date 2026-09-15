/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/PanelRightDashed.ts
const PanelRightDashed = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M15 14v1" }), path({ "d": "M15 19v2" }), path({ "d": "M15 3v2" }), path({ "d": "M15 9v1" }));
};
//#endregion
export { PanelRightDashed };

//# sourceMappingURL=PanelRightDashed.js.map