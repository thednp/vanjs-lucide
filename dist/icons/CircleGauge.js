/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CircleGauge.ts
const CircleGauge = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.6 2.7a10 10 0 1 0 5.7 5.7" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M13.4 10.6 19 5" }));
};
//#endregion
export { CircleGauge };

//# sourceMappingURL=CircleGauge.js.map