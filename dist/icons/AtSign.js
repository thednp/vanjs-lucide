/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/AtSign.ts
const AtSign = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }));
};
//#endregion
export { AtSign };

//# sourceMappingURL=AtSign.js.map