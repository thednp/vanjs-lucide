/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/MirrorRound.ts
const MirrorRound = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 6.6 8.6 8" }), path({ "d": "M12 18v4" }), path({ "d": "M15 7.5 9.5 13" }), path({ "d": "M7 22h10" }), circle({
		cx: "12",
		cy: "10",
		"r": "8"
	}));
};
//#endregion
export { MirrorRound };

//# sourceMappingURL=MirrorRound.js.map