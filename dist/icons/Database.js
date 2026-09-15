/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
//#region src/icons/Database.ts
const Database = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 5V19A9 3 0 0 0 21 19V5" }), path({ "d": "M3 12A9 3 0 0 0 21 12" }));
};
//#endregion
export { Database };

//# sourceMappingURL=Database.js.map