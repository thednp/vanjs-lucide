/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/WashingMachine.ts
const WashingMachine = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 6h3" }), path({ "d": "M17 6h.01" }), rect({
		width: "18",
		height: "20",
		"x": "3",
		"y": "2",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "13",
		"r": "5"
	}), path({ "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }));
};
//#endregion
export { WashingMachine };

//# sourceMappingURL=WashingMachine.js.map