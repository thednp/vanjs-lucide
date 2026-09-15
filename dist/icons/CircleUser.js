/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/CircleUser.ts
const CircleUser = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }));
};
//#endregion
export { CircleUser };

//# sourceMappingURL=CircleUser.js.map