/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Tablets.ts
const Tablets = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "7",
		cy: "7",
		"r": "5"
	}), circle({
		cx: "17",
		cy: "17",
		"r": "5"
	}), path({ "d": "M12 17h10" }), path({ "d": "m3.46 10.54 7.08-7.08" }));
};
//#endregion
export { Tablets };

//# sourceMappingURL=Tablets.js.map