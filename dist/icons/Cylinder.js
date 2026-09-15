/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Cylinder.ts
const Cylinder = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 5v14a9 3 0 0 0 18 0V5" }));
};
//#endregion
export { Cylinder };

//# sourceMappingURL=Cylinder.js.map