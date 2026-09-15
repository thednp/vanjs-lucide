/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Microwave.ts
const Microwave = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "15",
		"x": "2",
		"y": "4",
		rx: "2"
	}), rect({
		width: "8",
		height: "7",
		"x": "6",
		"y": "8",
		rx: "1"
	}), path({ "d": "M18 8v7" }), path({ "d": "M6 19v2" }), path({ "d": "M18 19v2" }));
};
//#endregion
export { Microwave };

//# sourceMappingURL=Microwave.js.map