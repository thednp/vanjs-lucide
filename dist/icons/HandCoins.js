/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/HandCoins.ts
const HandCoins = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }), path({ "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }), path({ "d": "m2 16 6 6" }), circle({
		cx: "16",
		cy: "9",
		"r": "2.9"
	}), circle({
		cx: "6",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
export { HandCoins };

//# sourceMappingURL=HandCoins.js.map