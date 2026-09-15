/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Luggage.ts
const Luggage = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }), path({ "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }), path({ "d": "M10 20h4" }), circle({
		cx: "16",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "8",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
export { Luggage };

//# sourceMappingURL=Luggage.js.map