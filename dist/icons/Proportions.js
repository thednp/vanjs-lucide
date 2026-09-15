/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Proportions.ts
const Proportions = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M12 9v11" }), path({ "d": "M2 9h13a2 2 0 0 1 2 2v9" }));
};
//#endregion
export { Proportions };

//# sourceMappingURL=Proportions.js.map