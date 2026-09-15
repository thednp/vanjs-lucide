/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Drum.ts
const Drum = (props = {}) => {
	const { path, ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 8 8" }), path({ "d": "m22 2-8 8" }), ellipse({
		cx: "12",
		cy: "9",
		rx: "10",
		ry: "5"
	}), path({ "d": "M7 13.4v7.9" }), path({ "d": "M12 14v8" }), path({ "d": "M17 13.4v7.9" }), path({ "d": "M2 9v8a10 5 0 0 0 20 0V9" }));
};
//#endregion
export { Drum };

//# sourceMappingURL=Drum.js.map