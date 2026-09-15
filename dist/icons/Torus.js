/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Torus.ts
const Torus = (props = {}) => {
	const { ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "11",
		rx: "3",
		ry: "2"
	}), ellipse({
		cx: "12",
		cy: "12.5",
		rx: "10",
		ry: "8.5"
	}));
};
//#endregion
export { Torus };

//# sourceMappingURL=Torus.js.map