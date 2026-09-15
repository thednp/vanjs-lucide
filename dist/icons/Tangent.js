/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Tangent.ts
const Tangent = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "17",
		cy: "4",
		"r": "2"
	}), path({ "d": "M15.59 5.41 5.41 15.59" }), circle({
		cx: "4",
		cy: "17",
		"r": "2"
	}), path({ "d": "M12 22s-4-9-1.5-11.5S22 12 22 12" }));
};
//#endregion
export { Tangent };

//# sourceMappingURL=Tangent.js.map