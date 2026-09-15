/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/SquarePilcrow.ts
const SquarePilcrow = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }), path({ "d": "M12 7v10" }), path({ "d": "M16 7v10" }));
};
//#endregion
export { SquarePilcrow };

//# sourceMappingURL=SquarePilcrow.js.map