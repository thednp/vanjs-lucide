/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/ChartCandlestick.ts
const ChartCandlestick = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 5v4" }), rect({
		width: "4",
		height: "6",
		"x": "7",
		"y": "9",
		rx: "1"
	}), path({ "d": "M9 15v2" }), path({ "d": "M17 3v2" }), rect({
		width: "4",
		height: "8",
		"x": "15",
		"y": "5",
		rx: "1"
	}), path({ "d": "M17 13v3" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }));
};
//#endregion
export { ChartCandlestick };

//# sourceMappingURL=ChartCandlestick.js.map