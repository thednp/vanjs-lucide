/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Mailbox.ts
const Mailbox = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }), polyline({ points: "15,9 18,9 18,11" }), path({ "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }), line({
		x1: "6",
		x2: "7",
		y1: "10",
		y2: "10"
	}));
};
//#endregion
export { Mailbox };

//# sourceMappingURL=Mailbox.js.map