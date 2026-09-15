/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Computer.ts
const Computer = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "8",
		"x": "5",
		"y": "2",
		rx: "2"
	}), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2"
	}), path({ "d": "M6 18h2" }), path({ "d": "M12 18h6" }));
};
//#endregion
export { Computer };

//# sourceMappingURL=Computer.js.map