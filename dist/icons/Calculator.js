/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Calculator.ts
const Calculator = (props = {}) => {
	const { rect, line, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6"
	}), line({
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18"
	}), path({ "d": "M16 10h.01" }), path({ "d": "M12 10h.01" }), path({ "d": "M8 10h.01" }), path({ "d": "M12 14h.01" }), path({ "d": "M8 14h.01" }), path({ "d": "M12 18h.01" }), path({ "d": "M8 18h.01" }));
};
//#endregion
export { Calculator };

//# sourceMappingURL=Calculator.js.map