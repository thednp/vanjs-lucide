/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareChartGantt.ts
const SquareChartGantt = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 8h7" }), path({ "d": "M8 12h6" }), path({ "d": "M11 16h5" }));
};
//#endregion
export { SquareChartGantt };

//# sourceMappingURL=SquareChartGantt.js.map