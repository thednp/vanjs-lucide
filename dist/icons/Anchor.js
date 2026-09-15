/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Anchor.ts
const Anchor = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v16" }), path({ "d": "m19 13 2-1a9 9 0 0 1-18 0l2 1" }), path({ "d": "M9 11h6" }), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
export { Anchor };

//# sourceMappingURL=Anchor.js.map