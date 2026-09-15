/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareArrowUp.ts
const SquareArrowUp = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m16 12-4-4-4 4" }), path({ "d": "M12 16V8" }));
};
//#endregion
export { SquareArrowUp };

//# sourceMappingURL=SquareArrowUp.js.map