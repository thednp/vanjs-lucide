/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Gamepad.ts
const Gamepad = (props = {}) => {
	const { line, rect } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "6",
		x2: "10",
		y1: "12",
		y2: "12"
	}), line({
		x1: "8",
		x2: "8",
		y1: "10",
		y2: "14"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "13",
		y2: "13"
	}), line({
		x1: "18",
		x2: "18.01",
		y1: "11",
		y2: "11"
	}), rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
export { Gamepad };

//# sourceMappingURL=Gamepad.js.map