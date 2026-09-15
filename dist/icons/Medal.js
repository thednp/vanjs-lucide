/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Medal.ts
const Medal = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" }), path({ "d": "M11 12 5.12 2.2" }), path({ "d": "m13 12 5.88-9.8" }), path({ "d": "M8 7h8" }), circle({
		cx: "12",
		cy: "17",
		"r": "5"
	}), path({ "d": "M12 18v-2h-.5" }));
};
//#endregion
export { Medal };

//# sourceMappingURL=Medal.js.map