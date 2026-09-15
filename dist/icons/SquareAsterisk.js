/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquareAsterisk.ts
const SquareAsterisk = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 8v8" }), path({ "d": "m8.5 14 7-4" }), path({ "d": "m8.5 10 7 4" }));
};
//#endregion
export { SquareAsterisk };

//# sourceMappingURL=SquareAsterisk.js.map